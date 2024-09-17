import type { Metadata } from "next";
import "@fontsource-variable/noto-sans";
import "./globals.css";

import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import { ConvexClientProvider } from "@/core/providers/convex-client.provider";

export const metadata: Metadata = {
  title: "Slack Clone",
  description: "Slack Clone",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en">
        <body>
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
};

export default RootLayout;
