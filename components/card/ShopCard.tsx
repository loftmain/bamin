import { Shop } from "@prisma/client";

export default function ShopCard({ shop }: { shop: Shop }) {
  return (
    <div
      href={shop.id}
      className="my-2 p-2 border-b border-gray-300 hover:cursor-pointer"
    >
      <div className="flex w-full">
        <div className="w-16">
          <div className="w-12 h-16 bg-slate-500" />
        </div>
        <div className="flex flex-col w-full text-xs">
          <h2 className="font-semibold text-sm mb-1">title</h2>
          <div className="flex gap-2">
            <p>star</p>
            <p>description</p>
          </div>
          <div className="flex gap-2">
            <p>DeliveryTime</p>
            <p>DeliveryFee</p>
          </div>
          <div className="flex">
            <p>minimum order</p>
            <p>tag</p>
          </div>
        </div>
      </div>
    </div>
  );
}
