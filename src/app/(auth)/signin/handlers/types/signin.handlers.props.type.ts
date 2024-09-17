// Vendors
import { Dispatch, SetStateAction } from "react";
import { ConvexAuthActionsContext } from "@convex-dev/auth/react";

type SignInType = ConvexAuthActionsContext["signIn"];

type SignInHandlersPropsType = {
  email: string;
  password: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setPassword: Dispatch<SetStateAction<string>>;
  signIn: SignInType;
};

export type { SignInHandlersPropsType };
