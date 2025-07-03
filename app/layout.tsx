import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Moplay',
  description: '...',
}


export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className="dark:bg-main dark ">
      <body className={` antialiased font-regular dark:text-white text-title bg-[#ffffff] dark:bg-main`}>
        <div className="">
          {children}
          </div>
      </body>
    </html>
  );
}
