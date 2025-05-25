import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
const ExploreBeauty = () => {
  return (
    <div className="mt-[50px] bg-[url('/HomeImg/background_gradient.png')] bg-cover bg-position-[center_center] bg-no-repeat md:mt-[130px]">
      <div className="flex flex-col justify-center">
        <p className="mx-auto mt-[50px] mb-4 w-[90%] text-center text-[36px] font-medium md:mt-[120px] md:mb-8 md:w-[50%] md:text-[3rem] md:font-normal leading-[1.3]">
          Explore Our Beauty Collections
        </p>
        <h2 className="mx-auto mb-[50px] w-[85%] text-center text-base md:text-[18px] md:mb-[100px] md:w-[48%]">
          Nisi at molestie auctor aenean mattis donec felis id scelerisque. Id
          at nisl eget gravida faucibus nisl urna. Metus imperdiet scelerisque
          malesuada proin.
        </h2>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex h-[375px] w-full items-end justify-center bg-[url('/HomeImg/glassMakup.jpg')] bg-cover bg-center bg-no-repeat pb-10">
          <ButtonPrimary>Skincare Essentials</ButtonPrimary>
        </div>
        <div className="flex h-[375px] w-full items-end justify-center bg-[url('/HomeImg/plastiMakup.jpg')] bg-cover bg-center bg-no-repeat pb-10">
          <ButtonPrimary>Skincare Essentials</ButtonPrimary>
        </div>
        <div className="flex h-[375px] w-full items-end justify-center bg-[url('/HomeImg/cosmeticMakeup.jpg')] bg-cover bg-center bg-no-repeat pb-10">
          <ButtonPrimary>Skincare Essentials</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default ExploreBeauty;
