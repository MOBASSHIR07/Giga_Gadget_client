import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const BrandProducts = () => {
  const products = useLoaderData();

  return (
    <div className=" py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Products by Brand</h2>

      {products.length > 0 ? (
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-10">
          {products.map((item) => (
            <ProductCard key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-20">
          <p className="text-lg font-medium">No products found for this brand.</p>
        </div>
      )}
    </div>
  );
};

export default BrandProducts;
