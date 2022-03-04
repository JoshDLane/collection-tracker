import { RefObject, useEffect, useRef } from 'react'

export function useUpdatingRef<T> (value: T): RefObject<T> {
  const ref = useRef<T>(value)

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref
}

export function useUpdatingFunctionRef<Args extends any[], ReturnValue> (
  value: (...args: Args) => ReturnValue
): (...args: Args) => ReturnValue

export function useUpdatingFunctionRef<Args extends any[]> (
  value: undefined
): (...args: Args) => undefined
export function useUpdatingFunctionRef<Args extends any[], ReturnValue> (
  value: ((...args: Args) => ReturnValue) | undefined
): (...args: Args) => ReturnValue | undefined
export function useUpdatingFunctionRef<Args extends any[], ReturnValue> (
  value: ((...args: Args) => ReturnValue) | undefined
): (...args: Args) => ReturnValue | undefined {
  const ref = useRef<((...args: Args) => ReturnValue) | undefined>(value)

  useEffect(() => {
    ref.current = value
  }, [value])

  type ReturnType = (...args: Args) => ReturnValue | undefined

  const stableFunctionRef = useRef<ReturnType>((...args) =>
    ref.current?.(...args)
  )

  return stableFunctionRef.current
}
