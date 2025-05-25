import React from "react";
import starLogo from "../assets/star-svgrepo-com.svg";
import BeautyCollection from "../sections/BeautyCollection";
import ButtonPrimary from "../components/ButtonPrimary";
import BeautyBanner from "../sections/BeautyBanner";
import WhyWe from "../sections/WhyWe";
import ExploreBeauty from "../sections/ExploreBeauty";
import Testimonials from "../sections/Testimonials";
import FreshGallery from "../sections/FreshGallery";
const Home = () => {
  return (
    <>
      <div className="bg-[url('HomeImg/background_gradient.png')] bg-cover bg-center">
        {/* girl bg image div*/}

        <div className="bg-[url('HomeImg/background_girl.png')] bg-size-[100%_auto] bg-position-[100%_39rem] bg-no-repeat md:size-auto md:bg-size-[auto] md:bg-position-[97%_10rem]">
          <div className="mx-auto min-h-[80vh] max-w-6xl px-4 py-6 pt-30 pb-62 md:px-0 md:pt-48 md:pb-30">
            {/* heading */}
            <h1 className="mb-[.6em] w-[80vw] text-4xl leading-12 font-medium md:w-[30vw] md:text-5xl md:leading-15">
              Transform Your Skin, Embrace Your Glow
            </h1>

            {/* Subheading */}
            <h2 className="mb-[1.8em] w-[85vw] text-[14px] md:w-[26vw] md:text-base">
              Do not forget body care! Exfoliate weekly and hydrate daily for
              soft, glowing skin all over.
            </h2>

            {/* Contact Button */}
            <ButtonPrimary className="mb-[4em]">Contact Us</ButtonPrimary>

            <div className="">
              <div className="flex justify-start">
                <p className="mr-4 text-5xl text-[#1c0b0c]">🙶</p>
                <p className="flex items-center text-[1.125rem] font-medium">
                  Incredible Glow Boost
                </p>
              </div>
              <h2 className="mb-5 ml-10 w-[60vw] text-[14px] md:w-[23vw] md:text-base">
                Love your skin, nourish your beauty, and let your confidence
                shine every day.
              </h2>
            </div>
            {/* testimonial */}
            <div className="flex flex-row">
              <img
                src="/HomeImg/girl_logo.jpg"
                alt="girl_logo"
                className="size-8 rounded-full"
              />
              <div className="mx-1 flex flex-row items-center">
                <span className="w-28 border-0 border-t-1"></span>
              </div>
              <div className="flex items-center">
                <p className="mr-2 ml-1">4.9</p>
                <img src={starLogo} alt="" className="size-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second fold */}
      <BeautyCollection />
      {/* Beauty banner */}
      <BeautyBanner />
      {/* Why we section */}
      <WhyWe />
      {/* ExploreBeauty */}
      <ExploreBeauty />
      {/* Testimonials */}
      <Testimonials />
      {/* FreshGallery */}
      <FreshGallery />
    </>
  );
};

export default Home;
