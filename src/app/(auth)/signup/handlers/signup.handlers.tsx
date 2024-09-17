// Vendors
import { Dispatch, SetStateAction } from "react";
// Types
import { SignUpHandlersPropsType } from "./types/signup.handlers.props.type";
import { SignUpHandlersReturnType } from "./types/signup.handlers.return.type";

const changeConfirmPasswordInputHandler = ({
  event,
  setConfirmPassword,
}: {
  event: React.ChangeEvent<HTMLInputElement>;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
}): void => {
  setConfirmPassword(event.target.value);
};

const changeEmailInputHandler = ({
  event,
  setEmail,
}: {
  event: React.ChangeEvent<HTMLInputElement>;
  setEmail: Dispatch<SetStateAction<string>>;
}): void => {
  setEmail(event.target.value);
};

const changeNameInputHandler = ({
  event,
  setName,
}: {
  event: React.ChangeEvent<HTMLInputElement>;
  setName: Dispatch<SetStateAction<string>>;
}): void => {
  setName(event.target.value);
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
}: Pick<SignUpHandlersPropsType, "setLoading" | "signIn">): void => {
  setLoading(true);
  signIn("github").finally(() => {
    setLoading(false);
  });
};

const googleClickEventHandler = ({
  setLoading,
  signIn,
}: Pick<SignUpHandlersPropsType, "setLoading" | "signIn">): void => {
  setLoading(true);
  signIn("google").finally(() => {
    setLoading(false);
  });
};

const submitEventHandler = ({
  confirmPassword,
  email,
  event,
  name,
  password,
  setError,
  setLoading,
  signIn,
}: Pick<
  SignUpHandlersPropsType,
  "confirmPassword" | "email" | "name" | "password" | "setError" | "setLoading" | "signIn"
> & {
  event: React.FormEvent<HTMLFormElement>;
}): void => {
  event.preventDefault();
  if (password !== confirmPassword) {
    return setError("Password do not match");
  }

  setLoading(true);

  signIn("password", { email, name, password, flow: "signUp" })
    .catch(() => setError("Something went wrong"))
    .finally(() => {
      setLoading(false);
    });
};

const SignUpHandlers = ({
  confirmPassword,
  email,
  name,
  password,
  setConfirmPassword,
  setEmail,
  setError,
  setLoading,
  setName,
  setPassword,
  signIn,
}: SignUpHandlersPropsType): SignUpHandlersReturnType => {
  return {
    handleChangeConfirmPasswordInput: (event) =>
      changeConfirmPasswordInputHandler({ event, setConfirmPassword }),
    handleChangeEmailInput: (event) => changeEmailInputHandler({ event, setEmail }),
    handleChangeNameInput: (event) => changeNameInputHandler({ event, setName }),
    handleChangePasswordInput: (event) => changePasswordInputHandler({ event, setPassword }),
    handleGithubClickEvent: () => githubClickEventHandler({ setLoading, signIn }),
    handleGoogleClickEvent: () => googleClickEventHandler({ setLoading, signIn }),
    handleSubmitEvent: (event) =>
      submitEventHandler({
        confirmPassword,
        email,
        event,
        name,
        password,
        setError,
        setLoading,
        signIn,
      }),
  };
};

export { SignUpHandlers };
