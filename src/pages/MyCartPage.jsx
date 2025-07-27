
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import EmptyCart from "../components/Cards/EmptyCart";

const MyCartPage = () => {
  const { user } = useAuth() || {};
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://giga-gadget.vercel.app/getproduct/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [user]);
   const handleDelete = (id) => {
    fetch(`https://giga-gadget.vercel.app/deleteproduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0 || data.success) {  // adjust based on your backend response
          toast.success("Product removed from cart");
          setItems((prevItems) => prevItems.filter((item) => item._id !== id));
        } else {
          toast.error("Failed to delete product");
        }
      })
      .catch(() => {
        toast.error("Error deleting product");
      });
  };

  if (loading) {
    return <div className="text-center pt-10">Loading your cart...</div>;
  }

  if (!items.length) {
    return <EmptyCart></EmptyCart>;
  }

  return (
    <div className="gadgetContainer pt-10 space-y-6">
      {items.map((item) => (
        <div
          key={item._id}
          className="flex items-center border p-4 rounded shadow-sm dark:bg-[#1a2641d5]"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 object-cover rounded mr-6"
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-500">Brand: {item.brand}</p>
            <p className="text-gray-700 font-semibold mt-1">Price: ${item.price}</p>
            <p className="text-sm text-gray-400 mt-1">Type: {item.type}</p>
          </div>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
               onClick={()=>{handleDelete(item._id)}}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyCartPage;
