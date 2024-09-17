// Vendors
import { Dispatch, SetStateAction } from "react";
import { ConvexAuthActionsContext } from "@convex-dev/auth/react";

type SignInType = ConvexAuthActionsContext["signIn"];

type SignUpHandlersPropsType = {
  confirmPassword: string;
  email: string;
  name: string;
  password: string;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setName: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  signIn: SignInType;
};

export type { SignUpHandlersPropsType };
