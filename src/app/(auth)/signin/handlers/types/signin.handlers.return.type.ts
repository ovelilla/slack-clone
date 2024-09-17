type SignInHandlersReturnType = {
  handleChangeEmailInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePasswordInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleGithubClickEvent: VoidFunction;
  handleGoogleClickEvent: VoidFunction;
  handleSubmitEvent: (event: React.FormEvent<HTMLFormElement>) => void;
};

export type { SignInHandlersReturnType };
