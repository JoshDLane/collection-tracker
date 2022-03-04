import { useEffect, useRef } from 'react'

/**
 * Tries to return a memoized value,
 * otherwise it will return the supplied value.
 *
 * Prefer using `useMemo` if the `value` is computed in the same render function
 * that is hook is used in.
 * This hook is intended for cases where a prop should be memoized for
 * later `useMemo` or `useEffect` or `useCallback` calls.
 *
 * @param value value to attempt to memoize
 * @param comparer a way of comparing the given value with the currently memorized value
 * @returns returns memoized value if available, otherwise return the given value
 */
export function useMemoizedValue<T> (
  value: T,
  comparer: (oldValue: T, newValue: T) => boolean = (a, b) => a === b
): T {
  const valueRef = useRef(value)

  const isDifferent = !comparer(valueRef.current, value)

  useEffect(() => {
    if (isDifferent) {
      valueRef.current = value
    }
  }, [isDifferent, value])

  return isDifferent ? value : valueRef.current
}
