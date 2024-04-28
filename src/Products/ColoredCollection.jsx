import React from 'react';
import { coloredCollectionImages } from '../Data/CB_data.js'; // Import the array of image paths

const ColoredCollection = () => {
  return (
    <section className="w-fit mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 p-8">
      {coloredCollectionImages.map((image, index) => (
        <div key={index} className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <img
            src={image.src}
            alt={`Product ${index + 1}`}
            className="h-[250px] w-full object-contain rounded-t-xl"
          />
          <div className="px-4 py-3">
            <span className="text-gray-400 mr-3 uppercase text-xs">{image.brand}</span>
            {/* Use a div for the product name to allow it to wrap */}
            <div className="text-lg font-bold text-black truncate block capitalize overflow-hidden" style={{ maxHeight: '3.6rem' }}>{image.name}</div>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">&#8377; {image.price}</p>
              {image.discount && (
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">&#8377; {image.discount}</p>
                </del>
              )}
            </div>
            <button className="text-center border rounded bg-teal-200 w-full sm:w-[90%] h-12">Order on Call</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ColoredCollection;
