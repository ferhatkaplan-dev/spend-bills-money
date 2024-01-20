import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

function Products() {
  const { products } = useSelector((state) => state.spendMoney);
  return (
    <section id="products" className="max-w-screen-lg mx-auto duration-300">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
}

export default Products;
