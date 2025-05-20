import React from "react";
import rightArrow from "../assets/rightArrow.svg";

const WhyWe = () => {
  return (
    <>
      <div className="mx-auto h-lvh max-w-6xl px-4 md:px-0">
        <p className="mx-auto mb-10 text-center text-3xl md:mb-20 md:text-[3rem]">
          Why We Stand Out: Your Perfect <br />
          Skincare Partner
        </p>
        {/* first product */}
        <div className="grid grid-cols-2 items-center justify-between">
          {/* left div */}
          <div className="">
            <p className="mb-5 text-[28px] font-medium">
              Premium Quality <br />
              Ingredients
            </p>
            <h2 className="mb-5 w-[70%] text-base">
              Quis quis tortor nulla adipiscing. Magna sagittis in phasellus nec
              at adipiscing mauris eu. Eget vel dolor ut ut et. Malesuada sit in
              diam tortor risus in dignissim. At varius a natoque ligula. Ut
              sit.
            </h2>
            <h2 className="flex items-center text-base font-medium underline decoration-1 underline-offset-6">
              <span>Discover Our Ingredients</span>
              <img src={rightArrow} alt="" className="size-5 font-bold" />
            </h2>
          </div>
          {/* right div */}
          <div className="flex justify-end">
            <div className="relative">
              <img
                src="/HomeImg/primium_image.jpg"
                alt=""
                className="h-[338px] w-[480px]"
              />
              <img
                src="/HomeImg/productBackground.png"
                alt=""
                className="absolute top-13 left-13 z-[-1] h-[338px] w-[450px] border"
              />
            </div>
          </div>
        </div>
        {/* second product */}
        {/* |||||||||||||||||||||||||| */}
        <div className="mt-[70px] grid grid-cols-2 items-center justify-between">
          {/* right div */}
          <div className="flex items-center">
            <div className="relative">
              <img
                src="/HomeImg/formula.jpg"
                alt=""
                className="h-[338px] w-[480px]"
              />
              <img
                src="/HomeImg/productBackground.png"
                alt=""
                className="absolute top-13 left-13 z-[-1] h-[338px] w-[450px] border"
              />
            </div>
          </div>
          {/* left div */}
          {/* one content is okay  */}
          <div className="mt-auto ml-40 flex flex-col">
            <p className="mb-5 text-[28px] font-medium">
              Dermatologist- <br />
              Approved Formulas
            </p>
            <h2 className="mb-5 text-base">
              Quis quis tortor nulla adipiscing. Magna sagittis in phasellus nec
              at adipiscing mauris eu. Eget vel dolor ut ut et. Malesuada sit in
              diam tortor risus in dignissim. At varius a natoque ligula. Ut
              sit.
            </h2>
            <h2 className="flex items-center text-base font-medium underline decoration-1 underline-offset-6">
              <span>Explore Our Collections</span>
              <img src={rightArrow} alt="" className="size-5 font-bold" />
            </h2>
          </div>
        </div>
        {/* Third product  */}
        {/* |||||||||||||||||||||||||| */}
        <div className="mt-[70px] grid grid-cols-2 items-center justify-between">
          {/* left div */}
          <div className="">
            <p className="mb-5 text-[28px] font-medium">
              Tailored for All Skin <br />
              Types
            </p>
            <h2 className="mb-5 w-[70%] text-base">
              Quis quis tortor nulla adipiscing. Magna sagittis in phasellus nec
              at adipiscing mauris eu. Eget vel dolor ut ut et. Malesuada sit in
              diam tortor risus in dignissim. At varius a natoque ligula. Ut
              sit.
            </h2>
            <h2 className="flex items-center text-base font-medium underline decoration-1 underline-offset-6">
              <span>Find Your Match</span>
              <img src={rightArrow} alt="" className="size-5 font-bold" />
            </h2>
          </div>
          {/* right div */}
          <div className="flex justify-end">
            <div className="relative">
              <img
                src="/HomeImg/skin_type.jpg"
                alt=""
                className="h-[338px] w-[480px]"
              />
              <img
                src="/HomeImg/productBackground.png"
                alt=""
                className="absolute top-13 left-13 z-[-1] h-[338px] w-[450px] border"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyWe;
