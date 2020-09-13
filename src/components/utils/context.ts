import React from "react";

export interface ErrorContext {
  error: string | null;
  setCurrentError: (error: string) => void;
}

export const ERROR_DEFAULT_VALUE = {
  error: null,
  setCurrentError: () => {},
};

export const errorContext = React.createContext<ErrorContext>(
  ERROR_DEFAULT_VALUE
);

export interface ZipcodeContext {
  zipcode: number | null;
  setCurrentZipcode: (zipcode: number | null) => void;
}

export const ZIPCODE_DEFAULT_VALUE = {
  zipcode: null,
  setCurrentZipcode: () => {},
};

export const zipcodeContext = React.createContext<ZipcodeContext>(
  ZIPCODE_DEFAULT_VALUE
);
