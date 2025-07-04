import { useEffect, useRef, useState } from 'react';

export const useFocus = () => {
  const [shouldFocus, setShouldFocus] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (shouldFocus && inputRef.current) {
      inputRef.current.focus();
      setShouldFocus(false);
    }
  }, [shouldFocus]);

  return {
    inputRef,
    setShouldFocus,
  };
};
