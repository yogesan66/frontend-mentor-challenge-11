import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-menu.svg";
import close from "../assets/images/icon-close.svg";
import avatar from "../assets/images/image-avatar.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "./Cart";
import { useEffect, useRef, useState } from "react";
import { useCartStore } from "../store/store";

const Navbar = () => {
  const menuItems = ["Collections", "Men", "Women", "About", "Contact"];
  const [isOpenCart, setOpenCart] = useState(false);
  const { cart } = useCartStore();
  const cartRef = useRef(null);
  const [sidenav, setSideNav] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        setOpenCart(false);
      }
    };
    if (isOpenCart) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenCart]);

  return (
    <div className="flex justify-between py-5 px-6 sm:py-8 items-center border-b-[0.5px] border-grayishBlue/40">
      <div className="flex gap-12">
        <div className="flex gap-5">
          <img
            src={menu}
            className="block md:hidden"
            onClick={() => setSideNav(!sidenav)}
          />
          <img src={logo} />
        </div>

        <ul className="gap-7 hidden md:flex">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="relative text-darkGrayishBlue hover:text-veryDarkBlue cursor-pointer
             before:content-[''] before:absolute before:bottom-[-48px] before:left-0
             before:h-[3px] before:w-0 before:bg-orange
             before:transition-all before:duration-300 hover:before:w-full"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-6 sm:gap-12 items-center">
        <div className="relative" ref={cartRef}>
          <AiOutlineShoppingCart
            className={
              "h-6 w-6 text-darkGrayishBlue hover:text-blackOp cursor-pointer" +
              (isOpenCart ? " text-blackOp" : "")
            }
            onClick={() => setOpenCart(!isOpenCart)}
          />
          {cart != 0 && (
            <span className="absolute -top-2 -right-2 text-[0.6rem] flex items-center justify-center bg-orange rounded-full w-5 text-white">
              {cart}
            </span>
          )}
          {isOpenCart && <Cart />}
        </div>
        <div>
          <img
            src={avatar}
            className="w-7 h-7 sm:w-14 sm:h-14 cursor-pointer hover:ring-2 rounded-full duration-200 transition-all hover:ring-orange"
          />
        </div>
      </div>
      <div
        className={`fixed inset-0 z-[60] bg-blackOp/70 transition-opacity duration-300 ${
          sidenav ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setSideNav(false)}
      >
        <div
          className={`h-full bg-white w-[65%] p-5 transition-transform duration-300 ease-in-out ${
            sidenav ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={close}
            className="mb-10 cursor-pointer"
            onClick={() => setSideNav(false)}
          />
          <ul className="gap-5 flex flex-col">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="max-w-max text-sm relative text-veryDarkBlue font-bold cursor-pointer inline-block
          before:content-[''] before:absolute before:bottom-[-8px] before:left-0
          before:h-[3px] before:w-0 before:bg-orange
          before:transition-all before:duration-300 hover:before:w-full"
                onClick={() => setSideNav(false)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
