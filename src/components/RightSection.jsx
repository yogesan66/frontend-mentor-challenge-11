import { useState } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { useCartStore } from "../store/store";

const RightSection = () => {
  const [count, setCount] = useState(0);
  const { addItem } = useCartStore();
  const decrease = () => {
    if (count > 0) setCount(count - 1);
  };

  const addToCart = () => {
    addItem(count);
    setCount(0);
  };

  return (
    <div className="flex w-full h-full justify-center items-center flex-col p-6 mt-0 sm:mt-5 md:mt-0">
      <div className="max-w-md">
        <p className="uppercase font-bold  text-sm text-darkGrayishBlue tracking-wider">
          Sneaker Company
        </p>
        <h1 className="font-bold text-4xl sm:text-5xl max-w-md mt-4 sm:mb-8">
          Fall Limited Edition Sneakers
        </h1>
        <p className="max-w-md text-darkGrayishBlue leading-6 tracking-wide  my-5 sm:my-7">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex flex-row sm:flex-col gap-4  justify-between sm:justify-start items-center sm:items-start">
          <div className="flex gap-4">
            <p className="font-bold text-3xl">$125.00</p>
            <span className="bg-blackOp max-h-max text-white rounded-md px-2 mt-2">
              50%
            </span>
          </div>
          <p className="text-darkGrayishBlue line-through font-semibold">
            $250.00
          </p>{" "}
        </div>
        <div className="w-full flex flex-col sm:flex-row mt-7 gap-4">
          <div className="flex flex-1  justify-between items-center bg-lightGrayishBlue py-3 px-4 rounded-lg">
            {" "}
            <span className="cursor-pointer" onClick={decrease}>
              <AiOutlineMinus
                className={
                  "text-orange hover:opacity-50 transition-all duration-200" +
                  (count === 0 ? " opacity-50" : "")
                }
              />
            </span>
            <span className="font-bold"> {count} </span>
            <span
              className="cursor-pointer"
              onClick={() => setCount(count + 1)}
            >
              <AiOutlinePlus className="text-orange hover:opacity-50 transition-all duration-200" />
            </span>
          </div>
          <button
            onClick={addToCart}
            className=" sm:w-[60%] py-3 px-4 hover:bg-opacity-60 transition-all duration-200 bg-orange rounded-lg font-bold flex items-center justify-center gap-4"
          >
            <span>
              <AiOutlineShoppingCart className="h-5 w-5" />
            </span>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
