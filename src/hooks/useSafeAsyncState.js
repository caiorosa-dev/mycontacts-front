import {
  useEffect, useRef, useState, useCallback,
} from 'react';

export default function useSafeAsyncState(initialState) {
  const [state, setState] = useState(initialState);

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  });

  const setSafeAsyncState = useCallback((value) => {
    if (isMounted.current) {
      setState(value);
    }
  }, []);

  return [state, setSafeAsyncState];
}
