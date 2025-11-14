import type { Err, Ok, Result } from '../types/result.js';

/**
 * Creates an Err result
 *
 * @template ErrorType The type of the error value
 * @param error The error value
 * @returns An Err result
 */
export const err = <ErrorType>(error: ErrorType): Err<ErrorType> => ({
  isOk: false,
  error,
});

/**
 * Creates an Ok result
 *
 * @template SuccessType The type of the success value
 * @param data The success value
 * @returns An Ok result
 */
export const ok = <SuccessType>(data: SuccessType): Ok<SuccessType> => ({
  isOk: true,
  data,
});

/**
 * Checks if a Result is an Err
 *
 * @template SuccessType The type of the success value
 * @template ErrorType The type of the error value
 * @param result The result to check
 * @returns True if the result is an Err, false otherwise
 */
export const isErr = <SuccessType, ErrorType>(
  result: Result<SuccessType, ErrorType>
): result is Err<ErrorType> => {
  return result.isOk === false;
};

/**
 * Checks if a Result is an Ok
 *
 * @template SuccessType The type of the success value
 * @template ErrorType The type of the error value
 * @param result The result to check
 * @returns True if the result is an Ok, false otherwise
 */
export const isOk = <SuccessType, ErrorType>(
  result: Result<SuccessType, ErrorType>
): result is Ok<SuccessType> => {
  return result.isOk === true;
};
