import React from "react";
import AB1 from '../assets/Bottle/AB1.png'
import AB2 from '../assets/Bottle/AB2.png'

const AntiqueCollections = () => {
  return (
    <section class="w-fit mx-auto grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      <div class="w-64 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
          <img
            src={AB1}
            alt="Product"
            class="h-64 w-64 object-contain rounded-t-xl"
          />
          <div class="px-4 py-3 w-72">
            <span class="text-gray-400 mr-3 uppercase text-xs">Giriraj Exports</span>
            <p class="text-lg font-bold text-black truncate block capitalize">
              Antique Copper Bottle 1.8L
            </p>
            <div class="flex items-center">
              <p class="text-lg font-semibold text-black cursor-auto my-3">
               &#8377; 2000 
              </p>
              <del>
                <p class="text-sm text-gray-600 cursor-auto ml-2">&#8377; 2500 </p>
              </del>
            </div>
            <button className="text-center border rounded bg-teal-200 w-[90%] h-12">Order on Call</button>
          </div>
          </a>
          </div>
          <div class="w-64 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
          <img
            src={AB2}
            alt="Product"
            class="h-64 w-64 object-contain rounded-t-xl"
          />
          <div class="px-4 py-3 w-72">
            <span class="text-gray-400 mr-3 uppercase text-xs">Giriraj Exports</span>
            <p class="text-md font-bold text-black truncate block capitalize">
              Antique Carving Bottle 1.2L
            </p>
            <div class="flex items-center">
              <p class="text-lg font-semibold text-black cursor-auto my-3">
              &#8377; 1800
              </p>
              <del>
                <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
              </del>
            </div>
            <button className="text-center border rounded bg-teal-200 w-[90%] h-12">Order on Call</button>
          </div>
          </a>
          </div>
    </section>
  );
};

export default AntiqueCollections;
