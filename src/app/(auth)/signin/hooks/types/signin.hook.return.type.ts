type SignInHookReturnType = {
  email: string;
  error: string;
  handleChangeEmailInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePasswordInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleGithubClickEvent: VoidFunction;
  handleGoogleClickEvent: VoidFunction;
  handleSubmitEvent: (event: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  password: string;
};

export type { SignInHookReturnType };
