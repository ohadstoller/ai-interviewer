"use client";

import { ReactElement, ReactNode } from "react";
import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";

type SessionProviderProps = { children: ReactNode; session: Session | null };

export function SessionProvider({
  children,
  session,
}: SessionProviderProps): ReactElement {
  return <Provider>{children}</Provider>;
}
