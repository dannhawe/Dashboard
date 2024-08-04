"use client";
import "../globals.css";
import "../data-tables-css.css";
import "../satoshi.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <QueryClientProvider client={queryClient}>
          <AntdRegistry>
            <div className="mx-auto max-w-screen-2xl">{children}</div>
          </AntdRegistry>
        </QueryClientProvider>
      </body>
    </html>
  );
}
