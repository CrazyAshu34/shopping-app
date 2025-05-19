import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
const BeautyBanner = () => {
  return (
    <>
      <div className="relative mx-auto my-[40px] h-auto w-full bg-[url('/HomeImg/banner.png')] bg-cover bg-no-repeat px-4 before:absolute before:bottom-0 before:left-0 before:h-[38%] before:w-[100%] before:bg-[url('/HomeImg/banner_girl.png')] before:bg-contain before:bg-no-repeat before:content-[''] md:my-[120px] md:flex md:h-[512px] md:max-w-6xl md:items-center md:justify-end md:px-0 before:md:h-full before:md:w-full">
        <div className="md: flex flex-col items-center justify-center pb-[22rem] md:items-start md:justify-start md:pb-0 mr-0 md:mr-14">
          <p className="md:mt-0 mt-[2rem] w-[80%] pb-[2rem] text-center text-3xl font-medium md:w-[100%] md:text-start md:md:text-[40px] md:leading-[50px] ">
            Alous: Where Skincare <br /> Meets Perfection
          </p>
          {/* value container  */}
          <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-0">
            <div className="flex flex-col items-center justify-center md:items-start md:justify-center">
              <p className="text-3xl font-medium md:text-[40px]">150+</p>
              <p className="w-auto text-[14px] md:w-[70%] md:text-[14px]">
                Skincare Products Available
              </p>
            </div>
            <div className="flex flex-col items-center justify-center md:items-start md:justify-center">
              <p className="text-3xl font-medium md:text-[40px]">10M</p>
              <p className="w-auto text-[14px] md:w-[70%] md:text-[14px]">
                Social Media Followers
              </p>
            </div>
            <div className="flex flex-col items-center justify-center md:items-start md:justify-center">
              <p className="text-3xl font-medium md:text-[40px]">100%</p>
              <p className="w-auto text-[14px] md:w-[70%] md:text-[14px]">
                Certified Ingredients
              </p>
            </div>
          </div>
          <div>
            <ButtonPrimary className="mt-[2rem]">
              Learn More About Us
            </ButtonPrimary>
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default BeautyBanner;
