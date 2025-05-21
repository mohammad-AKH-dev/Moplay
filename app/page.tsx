import Image from "next/image";

export default function Home() {
  return (
   <div className="font-regular text-[30px] p-8">
    Hello
    <img src={'/images/logo.png'}/> 
   </div>
  );
}
