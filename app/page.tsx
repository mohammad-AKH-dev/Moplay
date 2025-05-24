import Image from "next/image";
import Navbar from "./components/modules/Navbar/Navbar";
import Landing from "./components/templates/index/Landing";

export default function Home() {
  return (
   <div className="font-regular text-[30px] p-8">
      <Navbar/>
      <Landing/>
   </div>
  );
}
