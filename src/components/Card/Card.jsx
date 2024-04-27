import React, { useState } from "react";

function Card({
  productCategory,
  productName,
  availableColor,
  productPrice,
  productImage,
  productDescription,
  availableSize,
  handleNavigate,
  productId
}) {
  const productSize = [
    {
      size: "XL",
      id: 1,
      availability: true
    },
    {
      size: "L",
      id: 2,
      availability: true
    },
    { size: "M", id: 3, availability: true },
    {
      size: "S",
      id: 4,
      availability: false
    },
    {
      size: "XS",
      id: 5,
      availability: true
    }
  ];
  const productColors = [
    {
      color: "black",
      id: 1
    },
    {
      color: "white",
      id: 2
    },
    {
      color: "rose-600",
      id: 3
    },
    {
      color: "blue-400",
      id: 4
    }
  ];
  const [selectedSize, setSelectedSize] = useState(false);
  const [selectedColor, setSelectedColor] = useState(false);

  return (
    <div className="w-full h-full">
      <div
        className="w-full h-fit cursor-pointer"
        onClick={() => handleNavigate(productId)}
      >
        <img
          className="w-full h-96  bg-cover object-cover bg-center"
          src={productImage}
          alt="Produce Image"
        />
      </div>
      <div className="flex mt-1 flex-col relative gap-1 items-center justify-center">
        <p className="text-sm text-slate-600 flex gap-2">
          {productCategory}
          <span className="font-semibold font-Cormorant tracking-wide">
            &#x20B9;{productPrice}
          </span>
        </p>
        <p className="font-Cormorant">{productName}</p>

        <ul className="list-none flex items-center gap-3">
          {productSize.map((productSize) => (
            <li
              className={`h- w-7 cursor-pointer text-center border border-slate rounded hover:border-black ${
                selectedSize === productSize.id ? "border-black" : ""
              }
              ${productSize.availability === true ? "" : "text-slate-200"}
              `}
              onClick={() => setSelectedSize(productSize.id)}
            >
              {productSize.size}
            </li>
          ))}
        </ul>
        <ul className="list-none flex items-center gap-3">
          {productColors.map((productColor) => (
            <li
              onClick={() => setSelectedColor(productColor.id)}
              className={`h-6 w-6 text-center cursor-pointer border border-slate rounded-full bg-${
                productColor.color
              } hover:border-black ${
                selectedColor === productColor.id ? "border-black" : ""
              }`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;
