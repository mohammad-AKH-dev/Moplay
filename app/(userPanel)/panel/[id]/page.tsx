import UserPanel from "@/app/components/templates/panel/UserPanel";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";
import { ToastContainer } from "react-toastify";

const getUserData = async (id: string) => {
  const userRes = await fetch(
    `https://moplay-api.onrender.com/api/users/${id}`
  );

  return userRes.json();
};

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { id } = await params;

  // fetch data
  const userDetails = await getUserData(String(id));

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: `panel/${userDetails.userName}`,
  };
}

async function page({ params }: { params: Promise<{ id: string | number }> }) {
 
  const { id } = await params;

  const user = await getUserData(String(id));

  return (
    <>
      <ToastContainer />
      <section className="user-panel__information container my-6">
        <h2 className="user-panel__information-title text-[24px]">
          User Information
        </h2>
        <div className="user-panel__information">
          <UserPanel {...user} />
        </div>
      </section>
    </>
  );
}

export default page;
