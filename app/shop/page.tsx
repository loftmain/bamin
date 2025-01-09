import ShopListSection from "@/components/section/ShopListSection";

async function getShopItems() {
  const shopItems = await (
    await fetch(`http://localhost:3000/api/shop`, {
      cache: "no-cache",
    })
  ).json();

  return shopItems;
}
export default async function Shop() {
  const shopItems = await getShopItems();
  console.log("shopItems :>>", shopItems);
  return (
    <div>
      <ShopListSection shops={shopItems} />
    </div>
  );
}
