// Vendors
import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";
// Handlers
import { SignUpHandlers } from "../handlers/signup.handlers";
// Types
import { SignUpHookReturnType } from "./types/signup.hook.return.type";

const SignUpHook = (): SignUpHookReturnType => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuthActions();

  const {
    handleChangeConfirmPasswordInput,
    handleChangeEmailInput,
    handleChangeNameInput,
    handleChangePasswordInput,
    handleGithubClickEvent,
    handleGoogleClickEvent,
    handleSubmitEvent,
  } = SignUpHandlers({
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
  });

  return {
    confirmPassword,
    email,
    error,
    handleChangeConfirmPasswordInput,
    handleChangeEmailInput,
    handleChangeNameInput,
    handleChangePasswordInput,
    handleGithubClickEvent,
    handleGoogleClickEvent,
    handleSubmitEvent,
    loading,
    name,
    password,
  };
};

export { SignUpHook };
