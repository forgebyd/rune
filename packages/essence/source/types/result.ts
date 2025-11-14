export type Result<SuccessType, ErrorType> =
  | {
      isOk: true;
      data: SuccessType;
    }
  | {
      isOk: false;
      error: ErrorType;
    };

export type Ok<SuccessType> = Result<SuccessType, never>;

export type Err<ErrorType> = Result<never, ErrorType>;
