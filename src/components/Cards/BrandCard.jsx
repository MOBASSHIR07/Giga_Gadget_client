import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import "./Card.css";

const BrandCard = ({ brand }) => {
  const navigate = useNavigate();
  const location = useLocation(); 

  const { brandName, imageURL } = brand || {};

  
  const selectedBrand = decodeURIComponent(
    location.pathname.split("/products/category/")[1] || ""
  );

  const isSelected = selectedBrand === brandName;

  return (
    <div
      onClick={() =>
        navigate(`/products/category/${encodeURIComponent(brandName)}`)
      }
      className="w-full group cursor-pointer"
    >
      <div className="cardShadow p-5 w-full bg-white dark:bg-[#1a2641d5] rounded">
        <img
          className="w-full h-[150px] object-contain rounded-md"
          src={imageURL}
          alt={brandName}
        />
        <div
          className={`w-full rounded h-10 mt-2 flex justify-center items-center ${
            isSelected
              ? "bg-blue-600"
              : "bg-[#FF497C] group-hover:bg-[#ab3154]"
          }`}
        >
          <p className="text-center font-bold text-white">{brandName}</p>
        </div>
      </div>
    </div>
  );
};

BrandCard.propTypes = {
  brand: PropTypes.shape({
    brandName: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default BrandCard;
