import { FaShoppingCart } from "react-icons/fa";
import { TbCoinTaka } from "react-icons/tb";

const SingleProducts = ({ product }) => {
  const {productName, model,description,discountPrice,price,category, brandName,photoURL,
  } = product;

  return (
    <div className="mb-20 rounded bg-white shadow-lg hover:shadow-[#f5c59a]  hover:border-[#f5b882] mx-auto  border w-[250px] h-[320px] relative">
      <img
        className="max-w-[150px] max-h-[150px] mx-auto my-3"
        src={photoURL}
        alt="product Img"
      />
      <div className="px-3 space-y-2">
        <h1 className="font-bold">{model}</h1>
        <h2 className="font-bold text-gray-500">
          {productName}
         
        </h2>
        <p className="text-[#FD7800] flex items-center font-bold">
          <span>
            <TbCoinTaka className="font-bold text-xl" />
          </span>
          <span className="mr-2">{discountPrice} </span>
          <del className="flex items-center ">
            <TbCoinTaka className="font-bold text-xl" />
            {price}
          </del>
        </p>
      </div>
      <div className="absolute bottom-0 w-full">
        <button className="py-2 bg-[#EEEEEE] hover:bg-[#FD7800] hover:text-white w-full flex items-center justify-center font-bold">
          <FaShoppingCart className="mr-3" />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProducts;
