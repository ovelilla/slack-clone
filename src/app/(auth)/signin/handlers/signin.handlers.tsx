// Vendors
import { Dispatch, SetStateAction } from "react";
// Types
import { SignInHandlersPropsType } from "./types/signin.handlers.props.type";
import { SignInHandlersReturnType } from "./types/signin.handlers.return.type";

const changeEmailInputHandler = ({
  event,
  setEmail,
}: {
  event: React.ChangeEvent<HTMLInputElement>;
  setEmail: Dispatch<SetStateAction<string>>;
}): void => {
  setEmail(event.target.value);
};

const changePasswordInputHandler = ({
  event,
  setPassword,
}: {
  event: React.ChangeEvent<HTMLInputElement>;
  setPassword: Dispatch<SetStateAction<string>>;
}): void => {
  setPassword(event.target.value);
};

const githubClickEventHandler = ({
  setLoading,
  signIn,
}: Pick<SignInHandlersPropsType, "setLoading" | "signIn">): void => {
  setLoading(true);
  signIn("github").finally(() => {
    setLoading(false);
  });
};

const googleClickEventHandler = ({
  setLoading,
  signIn,
}: Pick<SignInHandlersPropsType, "setLoading" | "signIn">): void => {
  setLoading(true);
  signIn("google").finally(() => {
    setLoading(false);
  });
};

const submitEventHandler = ({
  email,
  event,
  password,
  setError,
  setLoading,
  signIn,
}: Pick<SignInHandlersPropsType, "email" | "password" | "setError" | "setLoading" | "signIn"> & {
  event: React.FormEvent<HTMLFormElement>;
}): void => {
  event.preventDefault();
  setLoading(true);
  signIn("password", { email, password, flow: "signIn" })
    .catch(() => {
      setError("Invalid email or password");
    })
    .finally(() => {
      setLoading(false);
    });
};

const SignInHandlers = ({
  email,
  password,
  setEmail,
  setError,
  setLoading,
  setPassword,
  signIn,
}: SignInHandlersPropsType): SignInHandlersReturnType => {
  return {
    handleChangeEmailInput: (event) => changeEmailInputHandler({ event, setEmail }),
    handleChangePasswordInput: (event) => changePasswordInputHandler({ event, setPassword }),
    handleGithubClickEvent: () => githubClickEventHandler({ setLoading, signIn }),
    handleGoogleClickEvent: () => googleClickEventHandler({ setLoading, signIn }),
    handleSubmitEvent: (event) =>
      submitEventHandler({ email, event, password, setError, setLoading, signIn }),
  };
};

export { SignInHandlers };
