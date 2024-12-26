/* eslint-disable @typescript-eslint/no-explicit-any */
import MainCard from "../card/MainCard";

const property = [
  {
    title: "배달",
    description: "세상은 넓고 맛집은 없다",
    imageURL: "/images/mainloft.jpg",
  },
  {
    title: "B마트",
    description: "장보기도 더 빠르게",
    imageURL: "/images/mainloft.jpg",
  },
  {
    title: "배민스토어",
    description: "배달은 지금 옵니다",
    imageURL: "/images/mainloft.jpg",
  },
];

export default function MainSection() {
  return (
    <section className="h-full">
      <div className="flex">
        {property.map((value: any, index: number) => (
          <MainCard key={index} property={value} />
        ))}
      </div>
    </section>
  );
}
