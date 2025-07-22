import deleteIcon from "../assets/images/icon-delete.svg";
import { useCartStore, useProductImageStore } from "../store/store";

const Cart = () => {
  const { cart, resetCart } = useCartStore();
  const { selectedImage } = useProductImageStore();
  const deleteItems = () => {
    resetCart();
  };

  return (
    <div className="absolute z-50 top-14 sm:top-12 right-1/2 translate-x-16 sm:translate-x-1/2 bg-white shadow-2xl min-w-[23rem] rounded-lg">
      <div className="p-6 border-b-[0.5px] border-grayishBlue/40">
        <p className="font-bold">Cart</p>
      </div>
      {cart != 0 && (
        <div className="flex flex-col p-6 gap-6">
          <div className="flex items-center justify-between">
            <img src={selectedImage} className="h-14 w-14 rounded-md" />
            <div className="flex flex-col gap-1">
              <p className="text-darkGrayishBlue">
                Fall Limited Edition Sneakers
              </p>
              <div className="flex">
                <p className="text-darkGrayishBlue">$125.00 x {cart} </p>{" "}
                <p className="font-bold ml-2"> ${(125 * cart).toFixed(2)}</p>
              </div>
            </div>
            <div>
              <img
                src={deleteIcon}
                className="cursor-pointer"
                onClick={deleteItems}
              />
            </div>
          </div>
          <button className="bg-orange hover:opacity-50 duration-200 transition-all rounded-lg py-4 font-bold mb-2">
            Checkout
          </button>
        </div>
      )}
      {cart === 0 && (
        <div className="text-darkGrayishBlue font-bold flex justify-center items-center h-48">
          Your cart is empty.
        </div>
      )}
    </div>
  );
};

export default Cart;
