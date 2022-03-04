import { useEffect, useState } from 'react'
import { runAsync } from '../helpers'
import { useIsMounted } from './misc'
import { useUpdatingFunctionRef, useUpdatingRef } from './useUpdatingRef'

export function useAsyncData<T = any> (
  f: (isMounted: () => boolean) => Promise<T>,
  dependencies: readonly any[],
  onError: (error: any, mounted: boolean) => void = console.error
): {
    data: T | undefined
    loading: boolean
    refetch: () => Promise<void>
  } {
  const fMemoized = useUpdatingFunctionRef(f)

  const [{ data, loading }, setState] = useState<{
    data: T | undefined
    loading: boolean
  }>({ data: undefined, loading: true })

  const onErrorRef = useUpdatingRef(onError)
  const isMounted = useIsMounted()

  useEffect(() => {
    let mounted = true

    runAsync(
      async () => {
        setState((oldState) => ({ ...oldState, loading: true }))
        const data = await fMemoized(() => mounted)

        if (mounted) {
          setState({ loading: false, data })
        }
      },
      (e) => onErrorRef.current?.(e, mounted)
    )

    return () => {
      mounted = false
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  const refetch = useUpdatingFunctionRef(async () => {
    try {
      setState((oldState) => ({ ...oldState, loading: true }))
      const data = await fMemoized(() => isMounted.current)

      if (isMounted.current) {
        setState({ loading: false, data })
      }
    } catch (e) {
      onErrorRef.current?.(e, isMounted.current)
      throw e
    }
  })

  return {
    data,
    loading,
    refetch
  }
}
