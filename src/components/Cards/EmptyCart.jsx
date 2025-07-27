import { Link } from "react-router-dom";

const EmptyCart = () => (
  <div className="flex flex-col items-center justify-center py-20 text-center text-gray-500 dark:text-gray-400">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-24 mb-6 text-pink-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.6 8H19m-7-6v6m4-6v6"
      />
    </svg>

    <h2 className="mb-4 text-2xl font-semibold">You have Not Added Products Yet!!</h2>
    <p className="mb-8 max-w-sm">
      Looks like you haven’t added any products yet. Go to add prouduct!
    </p>
    <Link
      to="/product/add"
      className="inline-block px-6 py-3 font-semibold text-white bg-pink-500 rounded hover:bg-pink-600 transition"
    >
      Browse Products
    </Link>
  </div>
);

export default EmptyCart;
