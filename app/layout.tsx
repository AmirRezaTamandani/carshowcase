import { Footer, Navbar, Provider } from "@/components";
import "./globals.css";
import { Suspense } from "react";

export const metadata = {
  title: "car show case ",
  description: "a demo site using next js 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <html lang="en">
        <body className="relative">
          <Provider>
            <Navbar />
            {children}
            <Footer />
          </Provider>
        </body>
      </html>
    </Suspense>
  );
}
