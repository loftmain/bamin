import ShopListSection from "@/components/section/ShopListSection";
import Link from "next/link";

async function getShopItems() {
  const shopItems = await (
    await fetch(`http://localhost:3000/api/shop`)
  ).json();

  return;
}
export default async function Shop() {
  const shopItems = await getShopItems();
  return (
    <div>
      <ShopListSection />
    </div>
  );
}
