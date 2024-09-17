type SignUpHandlersReturnType = {
  handleChangeConfirmPasswordInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeEmailInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeNameInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePasswordInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleGithubClickEvent: VoidFunction;
  handleGoogleClickEvent: VoidFunction;
  handleSubmitEvent: (event: React.FormEvent<HTMLFormElement>) => void;
};

export type { SignUpHandlersReturnType };
