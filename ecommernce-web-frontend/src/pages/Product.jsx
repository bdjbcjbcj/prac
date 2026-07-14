import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

function Product() {
  const { productId } = useParams();
  let { products, currency,addtoCart, } = useContext(ShopContext);
  let [productData, setProductData] = useState(false);
  let [images, setImages] = useState("");
  let [size,setSize]=useState('');

  let fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImages(item.image[0]);
        // console.log(item)
        return null;
      }
      
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex flex-col sm:flex-row gap-10">
        {/* Left: Thumbnails */}
        <div className="flex flex-row sm:flex-col gap-2 w-full sm:w-1/6 overflow-x-auto sm:overflow-y-auto">
          {productData.image.map((item, index) => (
            <img
              key={index}
              src={item}
              onClick={() => setImages(item)}
              className="cursor-pointer w-20 sm:w-full object-cover"
              alt=""
            />
          ))}
        </div>

        {/* Right: Main Image & Product Info */}
        <div className="flex  sm:flex-1 gap-15">
          {/* Main Image */}
          <div className="w-full flex justify-center sm:justify-start">
            <img
              src={images}
              alt=""
              className="w-4/5 sm:w-full h-auto object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-3">
            <h1 className="font-medium text-2xl">{productData.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <img
                  key={i}
                  src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                  className="w-4 sm:w-3.5"
                  alt=""
                />
              ))}
              <p className="pl-2">(122)</p>
            </div>

            {/* Price */}
            <p className="text-3xl font-medium">
              {currency}
              {productData.price}
            </p>

            {/* Description */}
            <p className="text-gray-600">{productData.description}</p>

            {/* Sizes */}
            <div className="flex flex-col gap-2">
              <p>Select Size</p>
              <div className="flex gap-2">
                {productData.sizes.map((size, idx) => (
                  <button
                  onClick={()=>setSize(size)}
                    key={idx}
                    className="border py-2 px-3 bg-gray-100 hover:bg-gray-200 cursor-pointer"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button onClick={()=>addtoCart(productData._id,size)} className="mt-4 py-3 px-6 bg-black text-sm text-white font-medium hover:bg-gray-800 w-44 cursor-pointer">
              ADD TO CART
            </button>

            <div className="border-t mt-15">
              <p className="text-sm text-gray-400 mt-7 w-64">
                100% Original product. Cash on delivery is available on this
                product. Easy return and exchange policy within 7 days.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* decritpion */}
      <div className="mt-20">
        <div className="flex">
          <b className="border py-2.5 px-5 text-sm">Description</b>
          <p className="border py-2.5 px-5 text-sm">Rewiews(122)</p>
        </div>
        <div className="flex flex-col gap-4 border py-6 px-6 text-sm text-gray-400">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            nam. Dolores in molestiae, dolorem sed nulla tenetur sequi quasi,
            ipsum molestias vel non minus repudiandae voluptatem ex consectetur,
            repellat aut deleniti aliquam quia dolore. Ducimus totam fugiat
            perferendis neque nobislorLorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            nam. Dolores in molestiae,
            <br />
             dolorem sed nulla tenetur sequi quasi,
            ipsum molestias vel non minus repudiandae voluptatem ex consectetur,
            repellat aut deleniti aliquam quia dolore. Ducimus totam fugiat
            perferendis neque nobislore
          </p>
        </div>
        
      </div>
      <RelatedProduct Category={productData.Category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;
