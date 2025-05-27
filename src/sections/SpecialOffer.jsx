import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
const SpecialOffer = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-0 md:py-28">
      {/* left sec. */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <p className="text-center text-[32px] leading-[1.3] font-medium md:text-start md:text-[2.5rem]">
            Special Offers: Curated Bundles Just for You
          </p>
          <div className="my-8 flex gap-3">
            <div className="flex md:h-[132px] h-[120px] w-[162px] flex-col items-center justify-center border bg-[#fff6ed]">
              <p className="text-[36px] font-medium md:text-[48px]">01</p>
              <p className="text-[16px] font-medium md:text-[18px]">hour</p>
            </div>
            <div className="flex md:h-[132px] h-[120px] w-[162px] flex-col items-center justify-center border bg-[#fff6ed]">
              <p className="text-[36px] font-medium md:text-[48px]">47</p>
              <p className="text-[16px] font-medium md:text-[18px]">minute</p>
            </div>
            <div className="flex md:h-[132px] h-[120px] w-[162px] flex-col items-center justify-center border bg-[#fff6ed]">
              <p className="text-[36px] font-medium md:text-[48px]">00</p>
              <p className="text-[16px] font-medium md:text-[18px]">second</p>
            </div>
          </div>
          <div className="flex flex-col justify-center md:justify-start">
            <h2 className="mb-6 text-center md:text-start">
              Nisi at molestie auctor aenean mattis donec felis id scelerisque.
              Id at nisl eget gravida faucibus nisl urna metus imperdiet.
            </h2>
            <ButtonPrimary className="w-fit self-center md:self-start">
              Shop the Ultimate Set
            </ButtonPrimary>
          </div>
        </div>

        {/* right image */}
        <div className="mt-12 flex md:mt-0 md:justify-end">
          <div className="relative">
            <img
              src="/HomeImg/sempu.jpg"
              alt=""
              className="h-[auto] w-[95%] md:h-[418px] md:w-[518px]"
            />
            <img
              src="/HomeImg/productBackground.png"
              alt=""
              className="absolute top-20 left-14 z-[-1] h-[auto] w-[285px] border object-cover md:top-18 md:left-10 md:h-[380px] md:w-[518px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
