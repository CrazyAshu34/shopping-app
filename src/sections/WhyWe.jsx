import React from "react";
import rightArrow from "../assets/rightArrow.svg";

const WhyWe = () => {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 md:px-0">
        <p className="mx-auto mb-18 w-[95%] text-center text-[36px] leading-[1.3] font-medium md:mb-20 md:text-[3rem]">
          Why We Stand Out: Your Perfect <br />
          Skincare Partner
        </p>
        {/* first product */}
        <div className="grid grid-cols-1 items-center justify-between md:grid-cols-2">
          {/* left div */}
          <div className="">
            <p className="mb-5 text-2xl font-medium md:text-[28px]">
              Premium Quality <br />
              Ingredients
            </p>
            <h2 className="mb-5 w-full text-[14px] md:w-[70%] md:text-base">
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
          <div className="mt-12 flex md:mt-0 md:justify-end">
            <div className="relative">
              <img
                src="/HomeImg/primium_image.jpg"
                alt=""
                className="h-auto w-[320px] md:h-[338px] md:w-[480px]"
              />
              <img
                src="/HomeImg/productBackground.png"
                alt=""
                className="absolute top-13 left-13 z-[-1] h-auto w-[285px] border md:h-[338px] md:w-[450px]"
              />
            </div>
          </div>
        </div>
        {/* second product ------------------|----------- */}
        <div className="mt-[70px] grid grid-cols-1 items-center justify-between md:grid-cols-2">
          {/* left div */}
          <div className="order-last flex items-center md:order-first">
            <div className="relative">
              <img
                src="/HomeImg/formula.jpg"
                alt=""
                className="h-auto w-[320px] md:h-[338px] md:w-[480px]"
              />
              <img
                src="/HomeImg/productBackground.png"
                alt=""
                className="absolute top-13 left-13 z-[-1] h-auto w-[285px] border md:h-[338px] md:w-[450px]"
              />
            </div>
          </div>
          {/* right div */}
          <div className="mb-12 flex flex-col md:mt-auto md:mb-0 md:ml-40">
            <p className="mb-5 text-2xl font-medium md:text-[28px]">
              Dermatologist- <br />
              Approved Formulas
            </p>
            <h2 className="mb-5 text-[14px] md:text-base">
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
        <div className="mt-[70px] grid grid-cols-1 items-center justify-between md:grid-cols-2">
          {/* left div */}
          <div className="">
            <p className="mb-5 text-2xl font-medium md:text-[28px]">
              Tailored for All Skin <br />
              Types
            </p>
            <h2 className="mb-5 w-full text-[14px] md:w-[70%] md:text-base">
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
          <div className="mt-12 flex md:mt-0 md:justify-end">
            <div className="relative">
              <img
                src="/HomeImg/skin_type.jpg"
                alt=""
                className="h-auto w-[320px] md:h-[338px] md:w-[480px]"
              />
              <img
                src="/HomeImg/productBackground.png"
                alt=""
                className="absolute top-13 left-13 z-[-1] h-auto w-[285px] border md:h-[338px] md:w-[450px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyWe;
