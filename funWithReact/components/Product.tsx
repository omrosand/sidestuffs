type ProductProps = {
  name: string;
  description: string;
  price: number;
  inStock: boolean;
  quantity: number;
};

export default function Product(props: ProductProps) {
  const { name, description, price, quantity, inStock } = props;
  const priceText = `kr ${price},-`;
  let stockText = ``;
  inStock ? (stockText = `${quantity} stk.`) : (stockText = `Ikke på lager`);
  return (
    <>
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>{priceText}</h3>
      <h4>{stockText}</h4>
    </>
  );
}
