import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Constants as Config } from "@/data";
import { fontstyles_playfair, fontstyles_sourceSans } from "@/lib";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Footer, Header, theme } from "@/components/Layout";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: Config.title,
  description: Config.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontstyles_playfair.variable} ${fontstyles_sourceSans.variable}`}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <main>{children}</main>
            <footer>
              <Footer />
            </footer>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
