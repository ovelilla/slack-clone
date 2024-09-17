"use client";
// Vendors
import Link from "next/link";
// Components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input, InputPassword } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
// Hooks
import { SignUpHook } from "./hooks/signup.hook";
// Icons
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignInPage = () => {
  const {
    confirmPassword,
    email,
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
  } = SignUpHook();
  return (
    <Card className="rounded-none md:rounded-lg h-full w-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-2xl">Sign up to continue</CardTitle>
        <CardDescription>Use your email or another service to continue</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-6 px-0 pb-0">
        <form onSubmit={handleSubmitEvent} className="flex flex-col gap-3">
          <Input
            autoComplete="name"
            disabled={loading}
            name="name"
            onChange={handleChangeNameInput}
            placeholder="Name"
            required
            type="text"
            value={name}
          />
          <Input
            autoComplete="email"
            disabled={loading}
            name="email"
            onChange={handleChangeEmailInput}
            placeholder="Email"
            required
            type="email"
            value={email}
          />
          <InputPassword
            disabled={loading}
            name="password"
            onChange={handleChangePasswordInput}
            placeholder="Password"
            required
            value={password}
          />
          <InputPassword
            disabled={loading}
            name="confirmPassword"
            onChange={handleChangeConfirmPasswordInput}
            placeholder="Confirm password"
            required
            value={confirmPassword}
          />
          <Button type="submit" className="w-full" size="lg" disabled={loading}>
            Continue
          </Button>
        </form>

        <Separator />

        <div className="flex flex-col gap-3">
          <Button
            className="w-full relative"
            disabled={loading}
            onClick={handleGoogleClickEvent}
            size="lg"
            variant="outline"
          >
            <FcGoogle className="size-5 absolute top-2.5 left-2.5" />
            Continue with Google
          </Button>
          <Button
            className="w-full relative"
            disabled={loading}
            onClick={handleGithubClickEvent}
            size="lg"
            variant="outline"
          >
            <FaGithub className="size-5 absolute top-2.5 left-2.5" />
            Continue with Github
          </Button>
        </div>

        <Link href="/signin" className="text-xs text-sky-700 hover:underline cursor-pointer">
          Already have an account? Sign in
        </Link>
      </CardContent>
    </Card>
  );
};

export default SignInPage;
