import React from "react";

const FreshGallery = () => {
  return (
    <div className="h-auto bg-[#fafafa]">
      <div className="mx-auto mt-[38px] max-w-6xl px-4 py-10 md:mt-[130px] md:px-0 md:py-28">
        <p className="mx-auto mb-18 w-full text-center text-[36px] leading-[1.3] font-medium md:mb-20 md:w-[50%] md:text-[3rem]">
          Fresh from Our Gallery: Latest Beauty Trends
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <img
            src="/HomeImg/FlowerGirlOne.jpg"
            className="h-auto w-full"
            alt=""
          />
          <img
            src="/HomeImg/FlowerGirlTwo.jpg"
            className="h-auto w-full"
            alt=""
          />
          <div className="col-span-1 grid grid-cols-1 gap-6 md:col-span-2 md:grid-cols-3">
            <img
              src="/HomeImg/FlowerGirlThree.jpg"
              className="h-auto w-full"
              alt=""
            />
            <img
              src="/HomeImg/FlowerGirlFour.jpg"
              className="h-auto w-full"
              alt=""
            />
            <img
              src="/HomeImg/FlowerGirlFive.jpg"
              className="h-auto w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreshGallery;
