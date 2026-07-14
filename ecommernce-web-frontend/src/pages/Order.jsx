import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

function Order() {
  let { products, currency } = useContext(ShopContext);

  return (
    <div className="boder-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:justify-between md:items-center gap-4"
          >
            <div className="flex items-start text-sm gap-6">
              <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Qunatity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-gray-400">30,March,2026</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-400"></p>
                <p>Ready To Ship</p>
              </div>
               <button className="py-2 px-4 text-sm font-medium border rounded-sm cursor-pointer">Track Order</button>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
