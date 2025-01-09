"use client";
import Image from "next/image";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function MainCard({ property }: { property: any }) {
  return (
    <>
      <div className="relative w-full p-2 justify-between gap-2">
        <div className="w-full p-2 bg-white h-32 rounded-xl">
          <div className="flex flex-col w-full">
            <h2 className="text-xl font-bold">{property.title}</h2>
            <p className="w-24">{property.description}</p>
          </div>
        </div>
        {/* image */}
        <Image
          src={property.imageURL}
          width={720}
          height={720}
          alt={property.title}
          className="bg-slate-500 rounded-full w-8 h-8 absolute right-4 bottom-4"
        />
      </div>
    </>
  );
}
