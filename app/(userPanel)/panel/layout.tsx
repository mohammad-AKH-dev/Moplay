import CopyRightSection from "@/app/components/modules/CopyRight/CopyRightSection";
import Footer from "@/app/components/modules/Footer/Footer";
import Navbar from "@/app/components/modules/Navbar/Navbar";
import UserPageHeader from "@/app/components/templates/panel/UserPageHeader";
import ThemeContextProvider from "@/app/contexts/ThemeContext";
import UserContextProvider from "@/app/contexts/UserContext";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user");

  if (!userCookie) {
    redirect("/login");
  }

  return (
    <>
      <ThemeContextProvider>
        <UserContextProvider>
          <Navbar />
          <UserPageHeader />
          {children}
          <Footer />
          <CopyRightSection />
        </UserContextProvider>
      </ThemeContextProvider>
    </>
  );
}
