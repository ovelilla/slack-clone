// Vendors
import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";
// Handlers
import { SignInHandlers } from "../handlers/signin.handlers";
// Types
import { SignInHookReturnType } from "./types/signin.hook.return.type";

const SignInHook = (): SignInHookReturnType => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");

  const { signIn } = useAuthActions();

  const {
    handleChangeEmailInput,
    handleChangePasswordInput,
    handleGithubClickEvent,
    handleGoogleClickEvent,
    handleSubmitEvent,
  } = SignInHandlers({
    email,
    password,
    setEmail,
    setError,
    setLoading,
    setPassword,
    signIn,
  });

  return {
    email,
    error,
    handleChangeEmailInput,
    handleChangePasswordInput,
    handleGithubClickEvent,
    handleGoogleClickEvent,
    handleSubmitEvent,
    loading,
    password,
  };
};

export { SignInHook };
