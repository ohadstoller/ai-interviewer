import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";

import "./globals.css";
import SideBar from "@/app/components/SideBar";
import { SessionProvider } from "@/app/components/SessionProvider";
import Login from "./components/Login";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Buddy",
  description: "AI coding interview buddy",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  // const renderContent = () => {
  //   if (!session) {
  //     return <Login />;
  //   }

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className={"flex"}>
              <div
                className={
                  "bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]"
                }
              >
                <SideBar />
              </div>
              {/*Sidebar*/}
              {/*ClientProvider*/}
              <div className="bg-[#343641] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
