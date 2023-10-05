"use client";
import { SessionProvider } from "next-auth/react";
const NextAuthProvider = ({ children }) => {
  console.log("provider");

  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;
