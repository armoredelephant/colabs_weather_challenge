import { useCallback, useState } from "react";
import { ErrorContext, ZipcodeContext } from "./context";

// https://medium.com/@0n3z3r0n3/react-usecontext-how-to-update-context-from-child-component-8fa2894eee3d
export const useError = (): ErrorContext => {
  const [error, setError] = useState<string | null>(null);

  const setCurrentError = useCallback((currentError: string | null): void => {
    setError(currentError);
  }, []);

  return {
    error,
    setCurrentError,
  };
};

export const useZipcode = (): ZipcodeContext => {
  const [zipcode, setZipcode] = useState<number | null>(null);

  const setCurrentZipcode = useCallback(
    (currentZipcode: number | null): void => {
      setZipcode(currentZipcode);
    },
    []
  );

  return {
    zipcode,
    setCurrentZipcode,
  };
};
