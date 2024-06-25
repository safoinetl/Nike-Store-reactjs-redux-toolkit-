import React from "react";
import { ShoppingBagIcon, StarIcon } from "@heroicons/react/16/solid";
import { useDispatch } from "react-redux";
import { setAddItemToCart } from "../../app/CartSlice";
const Items = ({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  const dispatch = useDispatch();
  const onAddToCart = () => {
    const item = {
      id,
      color,
      shadow,
      title,
      text,
      img,
      price,
    };
    dispatch(setAddItemToCart(item));
  };
  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center  ${
          ifExists ? "justify-items-start" : "justify-items-center"
        } rounded-xl py-5 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105 hover:rounded-xl `}
      >
        <div
          className={`grid items-center  ${
            ifExists ? "justify-items-start" : "justify-items-center"
          } `}
        >
          <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {title}
          </h1>
          <p className="text-slate-200  filter drop-shadow text-base md:text-sm font-normal">
            {text}
          </p>
          <div
            className={`grid items-center ${
              ifExists ? "justify-items-start" : "justify-items-center"
            } `}
          >
            <div
              className={`flex justify-between items-center m-2 ${
                ifExists ? "-ml-8" : ""
              }`}
            >
              <div className="flex items-center justify-center w-28 ">
                <h1 className="text-xl rounded font-bold blur-effect-theme">
                  ${price}
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-items-center ">
              <button
                type="button"
                className="  rounded opacity-90 blur-effect-theme button-theme p-0.5 shadow-sky-100"
                onClick={onAddToCart}
              >
                <ShoppingBagIcon className="icon-style text-slate-900" />
              </button>
              <button
                type="button"
                className=" rounded opacity-90 blur-effect-theme button-theme p-0.5 shadow-sky-100 text-lg text-slate-900 font-semibold"
                onClick={() => console.log(`buy item ${id},${title}`)}
              >
                {btn}
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex  items-center bottom-1 right-2 blur-effect-theme rounded">
          <StarIcon className="icon-style text-yellow-500 " />
          <h1 className="md:text-sm font-semibold  ">{rating}</h1>
        </div>
        <div
          className={`flex items-center ${
            ifExists ? "absolute top-5 right-1" : "justify-center"
          }`}
        >
          <img
            src={img}
            alt={`item/img${id}`}
            className={`transitions-theme   ${
              ifExists
                ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg] hover:-rotate-0"
                : "h-36 w-54 hover:-rotate-12"
            } `}
          />
        </div>
      </div>
    </>
  );
};

export default Items;
