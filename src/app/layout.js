"use client";

import "./globals.css";
import theme from "./utils/themes";
import { ThemeProvider } from "@emotion/react";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
