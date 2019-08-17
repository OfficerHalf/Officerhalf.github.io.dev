import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  // Keep the debounced value
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Only update after a delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // If the value changes (or the component unmounts, etc), remove the handler
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
