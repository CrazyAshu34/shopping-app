import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import purebeauty from "../assets/purebeauty.svg";

const Footer = () => {
  return (
    <div className="bg-[url('HomeImg/background_gradient.png')] bg-center bg-no-repeat bg-cover md:mt-0 mt-10">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-0 md:py-20">
        {/* first section */}
        <div className="mb-8 flex flex-col items-center justify-between md:mb-20 md:flex-row">
          <div className="mb-8 md:mb-0">
            <p className="mb-2 text-center text-[32px] leading-[1.3] font-medium md:text-start md:text-[40px]">
              Join Our Beauty Community
            </p>
            <h2 className="w-full text-center text-base md:w-[65%] md:text-start md:text-[18px]">
              Unlock exclusive offers and be the first to discover our latest
              skincare products!
            </h2>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-5 md:w-auto md:flex-row">
            <ButtonPrimary className="w-full rounded !text-white hover:!bg-[white] hover:!text-[#1c0b0c] md:w-auto">
              Sign Up for Updates
            </ButtonPrimary>
            <ButtonPrimary className="w-full rounded bg-white !text-[#1c0b0c] hover:!bg-[#1c0b0c] hover:!text-[white] md:w-auto">
              Shop Bestsellers
            </ButtonPrimary>
          </div>
        </div>
        <hr />
        {/* second section */}
        <div className="my-12 md:my-8 md:mb-6 md:flex md:gap-6">
          <div className="flex md:w-[25%] flex-col justify-center space-y-6 ">
            <img
              className="mx-auto h-auto w-[200px] md:mx-0"
              src="/HomeImg/mylogo.png"
              alt="icon"
            />
            <h2 className="md:w-auto w-[60%] md:text-start text-center mx-auto">
              Cras maecenas elementum quam sit purus ullamcorper tellus. A
              posuere tempus egestas orci eget.
            </h2>
            <div className="flex justify-center space-x-3 md:justify-start">
              <img
                className="h-auto w-[40px] rounded-full bg-black p-3"
                src="/HomeImg/facebook.png"
                alt=""
              />
              <img
                className="h-auto w-[40px] rounded-full bg-black p-3"
                src="/HomeImg/twitter.png"
                alt=""
              />
              <img
                className="h-auto w-[40px] rounded-full bg-black p-3"
                src="/HomeImg/linkedin.png"
                alt=""
              />
              <img
                className="h-auto w-[40px] rounded-full bg-black p-3"
                src="/HomeImg/instagram.png"
                alt=""
              />
            </div>
          </div>
          {/* ]----------------------------- */}
          <div className="my-10 grid grid-cols-1 gap-10 text-center md:grid-cols-4 md:text-left">
            <div>
              <p className="mb-5 text-xl font-medium">Customer Service</p>
              <div className="flex flex-col space-y-3">
                <p>FAQ</p>
                <p>Shipping Information</p>
                <p>Return Policy</p>
                <p>Track Your Order</p>
                <p>Contact Us</p>
              </div>
            </div>

            <div>
              <p className="mb-5 text-xl font-medium">Shop</p>
              <div className="flex flex-col space-y-3">
                <p>All Products</p>
                <p>New Arrivals</p>
                <p>Bestsellers</p>
                <p>Bundles & Kits</p>
                <p>Gift Cards</p>
              </div>
            </div>

            <div>
              <p className="mb-5 text-xl font-medium">About Us</p>
              <div className="flex flex-col space-y-3">
                <p>Our Story</p>
                <p>Sustainability</p>
                <p>Press & Media</p>
                <p>Testimonials</p>
                <p>Careers</p>
              </div>
            </div>

            <div>
              <p className="mb-5 text-xl font-medium">Resources</p>
              <div className="flex flex-col space-y-3">
                <p>Skincare Blog</p>
                <p>Ingredients Glossary</p>
                <p>Skin Type Quiz</p>
                <p>How-To Guides</p>
                <p>Loyalty Program</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* ......... */}
        <div className="flex flex-col items-center justify-between gap-4 py-4 md:flex-row md:gap-0">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:gap-7 sm:text-left">
            <span>Copyright © 2024 Alous</span>
            <span className="hidden sm:inline">|</span>
            <span>Design by Ashutosh Singh</span>
          </div>
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:gap-7 sm:text-left">
            <a href="#">Term of use</a>
            <span className="hidden sm:inline">|</span>
            <a href="#">Privacy Policy</a>
            <span className="hidden sm:inline">|</span>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
