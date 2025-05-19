import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
const BeautyCollection = () => {
  return (
    <>
      <div className="md:px-0 px-4 mx-auto min-h-[80vh] max-w-6xl pt-[50px] md:pt-[100px] ">
        <div className="mb-[2rem] flex flex-col items-center justify-center md:flex-row md:justify-between">
          <h1 className="mb-5 text-center text-[32px] font-medium md:mb-auto md:text-4xl">
            Beauty Collection
          </h1>
          <ButtonPrimary className="w-[50vw] text-center md:w-auto">
            See All Products
          </ButtonPrimary>
        </div>
        <hr />
        <div className="mt-20">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:justify-between md:gap-0">
            <div className="flex h-[530px] w-[100%] flex-col justify-between bg-[#FFF8ED] md:h-[530px] md:w-[360px]">
              <img
                src="/HomeImg/cat_1.png"
                alt="item"
                className="m-auto h-[70%] w-[90%]"
              />
              <div className="mb-5 ml-5 flex flex-col justify-between gap-3">
                <p className="text-xl font-medium">Skincare Cream Tube</p>
                <p className="text-xl font-medium text-[#F98634]">$30</p>
                <p className="font-medium underline decoration-1 underline-offset-[5px]">
                  Add to cart
                </p>
              </div>
            </div>
            <div className="flex h-[530px] w-[100%] flex-col justify-between bg-[#FFF8ED] md:h-[530px] md:w-[360px]">
              <img
                src="/HomeImg/cat_2.png"
                alt="item"
                className="m-auto h-[70%] w-[90%]"
              />
              <div className="mb-5 ml-5 flex flex-col justify-between gap-3">
                <p className="text-xl font-medium">SCosmetic Skincare Cream</p>
                <p className="text-xl font-medium text-[#F98634]">$30</p>
                <p className="font-medium underline decoration-1 underline-offset-[5px]">
                  Add to cart
                </p>
              </div>
            </div>

            <div className="flex h-[530px] w-[100%] flex-col justify-between bg-[#FFF8ED] md:h-[530px] md:w-[360px]">
              <img
                src="/HomeImg/cat_3.png"
                alt="item"
                className="m-auto h-[70%] w-[90%]"
              />
              <div className="mb-5 ml-5 flex flex-col justify-between gap-3">
                <p className="text-xl font-medium">Radiant Glow Serum</p>
                <p className="text-xl font-medium text-[#F98634]">$30</p>
                <p className="font-medium underline decoration-1 underline-offset-[5px]">
                  Add to cart
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeautyCollection;
