"use client";
import { useSession } from "next-auth/react";
export default function Dashboard({}) {
  const { data: session, status } = useSession();
  return <h1>dashboard inside of app {status}</h1>;
}
