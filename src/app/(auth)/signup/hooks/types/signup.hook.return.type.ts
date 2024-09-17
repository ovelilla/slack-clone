type SignUpHookReturnType = {
  confirmPassword: string;
  email: string;
  error: string;
  handleChangeConfirmPasswordInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeEmailInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeNameInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePasswordInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleGithubClickEvent: VoidFunction;
  handleGoogleClickEvent: VoidFunction;
  handleSubmitEvent: (event: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  name: string;
  password: string;
};

export type { SignUpHookReturnType };
