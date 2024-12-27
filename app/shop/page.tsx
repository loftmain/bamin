async function getShopItems() {
  const shopItems = await (
    await fetch(`http://localhost:3000/api/shop`)
  ).json();

  console.log("shopItems :>> ", shopItems);
  return;
}
export default async function Shop() {
  const shopItems = await getShopItems();
  return <div>Shop</div>;
}
