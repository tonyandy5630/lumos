"use client";

import "./globals.css";
import theme from "../utils/themes";
import { ThemeProvider } from "@emotion/react";
import ProtectedRoute from "@/components/ProtectedRoutes";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <ProtectedRoute>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ProtectedRoute>
      </body>
    </html>
  );
}
