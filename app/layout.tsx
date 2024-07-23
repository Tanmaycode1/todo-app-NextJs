import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TodosProvider } from "@/store/todos";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo List",
  description: "Nextjs 14 and Tailwind css",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <TodosProvider>
          <Navbar/>
          {children}
        </TodosProvider>
      </body>
    </html>
  );
}
