import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const ProductsDetails = () => {
  const product = useLoaderData();
  const [loading, setLoading] = useState(false);

  if (!product) {
    return <div className="text-center pt-10">Product not found.</div>;
  }

  const { name, image, brandName, price, type, rating, description } = product;

  const handleBuyNow = () => {
    setLoading(true);
    setTimeout(() => {
      toast.success("Purchase successful!");
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="pb-10 gadgetContainer pt-12">
      <div className="grid md:grid-cols-2 gap-12 items-center bg-white dark:bg-[#1a2641d5] p-6 rounded-xl shadow-md">
        <div className="w-full">
          <img
            src={image}
            alt={name}
            className="w-full h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{name}</h2>
          <p className="text-gray-500 dark:text-gray-300 text-lg">
            Brand: <span className="font-medium">{brandName}</span>
          </p>
          <p className="text-gray-500 dark:text-gray-300 text-lg">
            Type: <span className="font-medium">{type}</span>
          </p>
          <p className="text-gray-500 dark:text-gray-300 text-lg">
            Rating: <span className="font-medium">{rating} / 5</span>
          </p>
          <p className="text-pink-500 text-xl font-semibold">Price: ${price}</p>

          <p className="text-gray-600 dark:text-gray-400">{description || "No description available."}</p>

          <button
            onClick={handleBuyNow}
            disabled={loading}
            className={`mt-4 px-6 py-3 rounded bg-pink-500 text-white font-semibold hover:bg-pink-600 transition ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Processing..." : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
