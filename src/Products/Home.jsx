import React from "react";
import Footer from "../components/Footer";
import tick1 from "../assets/homeimg.jpeg";
import copper1 from "../assets/c1.jpeg";
import copper2 from "../assets/c2.png";
import br1 from "../assets/brass1.jpeg";
import br2 from "../assets/brass2.jpeg";
import bro1 from "../assets/bronze1.jpeg";
import bro2 from "../assets/bronze2.jpeg"
import spr1 from "../assets/sp1.jpeg";
import spr2 from "../assets/sp2.jpeg";


function Home() {
  return (
    <>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <div class="bg-gray-800 py-20">
        <div class="container mx-auto px-6 md:px-12">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 lg:w-2/3">
              <h1 class="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
                Welcome to our <br class="hidden md:block" />
                <span class="text-indigo-500">Giriraj</span> Exports
              </h1>
              <p class="text-lg md:text-xl lg:text-2xl text-black mb-8">
                "Elevate your space with our exquisite copper and bronze
                treasures."
              </p>
              <div class="flex gap-2">
                <a
                  href="#"
                  class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-md"
                >
                  Get Started
                </a>
                {/* <a href="#" class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md">Learn
                        More
                    </a> */}
              </div>
            </div>
            <div class="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
              <img src={tick1} alt="Hero Image" class="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* components */}

      <div className="flex justify-center gap-28 mt-56">
        <a href="/" className="group relative block w-80 h-90 overflow-hidden">
          <div className="relative h-[350px] sm:h-[450px]">
            <img
              src={copper2}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
            />

            <img
              src={copper1}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">
              Copper Collections
            </h3>

            {/* <p className="mt-1.5 text-pretty text-xs text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos sequi dicta impedit aperiam ipsum!
            </p> */}

            <a href="CopperProduct" className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
              Explore Now
            </a>
          </div>
        </a>

        {/* 2 */}

        <a href="/" className="group relative block w-80 h-90 overflow-hidden">
          <div className="relative h-[350px] sm:h-[450px]">
            <img
              src={br1}
               alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
            />

            <img
              src={br2}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">
              Brass Collections
            </h3>

            {/* <p className="mt-1.5 text-pretty text-xs text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos sequi dicta impedit aperiam ipsum!
            </p> */}

            <span className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
              Explore Now
            </span>
          </div>
        </a>

        {/* 3 */}
        <a href="/" className="group relative block w-80 h-90 overflow-hidden">
          <div className="relative h-[350px] sm:h-[450px]">
            <img
              src={bro1}
               alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
            />

            <img
              src={bro2}
                     alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">
              Bronze Collections
            </h3>

            {/* <p className="mt-1.5 text-pretty text-xs text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos sequi dicta impedit aperiam ipsum!
            </p> */}

            <span className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
              Explore Now
            </span>
          </div>
        </a>
      </div>

      <div className="flex justify-center gap-24 mt-16">
        <a href="/" className="group relative block w-80 h-90 overflow-hidden">
          <div className="relative h-[350px] sm:h-[450px]">
            <img
              src={spr1}
               alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
            />

            <img
              src={spr2}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">
              Spiritual Collections
            </h3>

            {/* <p className="mt-1.5 text-pretty text-xs text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos sequi dicta impedit aperiam ipsum!
            </p> */}

            <span className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
              explore Now
            </span>
          </div>
        </a>

        {/* 5 */}

        <a href="/" className="group relative block w-80 h-90 overflow-hidden">
          <div className="relative h-[350px] sm:h-[450px]">
            <img
              src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
            />

            <img
              src="https://images.unsplash.com/photo-1593795899630-b6033c0fa58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
            <h3 className="text-xl font-medium text-white">Idol Collections</h3>

            {/* <p className="mt-1.5 text-pretty text-xs text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos sequi dicta impedit aperiam ipsum!
            </p> */}

            <span className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
              explore Now
            </span>
          </div>
        </a>
      </div>
      <div className="footer mt-16">
        <Footer />
      </div>
    </>
  );
}

export default Home;
