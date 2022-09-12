import Product from "../components/Product";

const TestPage = () => {
  return (
    <>
      <Product
        name="Kaffekopp"
        description="Deilig å drikke fra"
        price={59.9}
        inStock={true}
        quantity={23}
      />
      <Product
        name="Skrivebordlampe"
        description="Lyser opp hverdagen"
        price={699.99}
        inStock={false}
        quantity={23}
      />
      <Product
        name="Stressball"
        description="En god stress-reliever"
        price={10}
        inStock={true}
        quantity={999}
      />
    </>
  );
};
export default TestPage;
