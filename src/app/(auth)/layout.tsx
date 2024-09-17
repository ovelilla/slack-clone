const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-dvh flex items-center justify-center bg-[#5C3B58]">
      <div className="h-full w-full md:h-auto md:w-[420px]">{children}</div>
    </div>
  );
};

export default AuthLayout;
