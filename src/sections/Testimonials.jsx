import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import starLogo from "../assets/star-svgrepo-com.svg";

const Testimonials = () => {
  const cardData = [
    { image: "/HomeImg/testiOne.jpg", title: "Incredible Glow Boost" },
    { image: "/HomeImg/testiTwo.jpg", title: "Life-Changing Skincare!" },
    { image: "/HomeImg/testiThree.jpg", title: "Gentle Yet Effective" },
  ];

  return (
    <div className="mx-auto mt-[38px] max-w-6xl px-4 md:mt-[130px] md:px-0">
      <div className="mb-6 flex flex-col items-center justify-between md:flex-row">
        <p className="md:leading-auto mb-10 text-center text-[32px] leading-[1.3] font-medium md:mb-0 md:text-[2.5rem]">
          Real Stories, Real Radiance
        </p>
        <div>
          <ButtonPrimary>See All Testimonials</ButtonPrimary>
        </div>
      </div>
      <hr />
      <div className="md:mt-[70px] mt-[40px] flex flex-col justify-between md:flex-row">
        {/* img */}
        <div className="relative order-last h-[448px] w-full border bg-[url('HomeImg/banner.png')] bg-cover bg-center bg-no-repeat md:order-first md:h-[630px] md:w-[530px]">
          <img
            className="absolute bottom-0 left-0 h-auto w-full object-contain"
            src="/HomeImg/GirlGroup_two.png"
            alt=""
          />
        </div>

        {/* testimonials 1*/}
        <div className="mb-8">
          {cardData.map((card, idx) => (
            <div key={idx} className="max-w-md rounded-md p-4 md:max-w-[550px]">
              <p className="mb-2 text-xl font-semibold">
                <span className="font-serif text-2xl">“</span> {card.title}
              </p>
              <h2 className="mb-4 text-sm leading-relaxed">
                Praesent aliquam at ac tincidunt tellus et sed. Habitasse
                ultrices pretium quis feugiat habitant magnis nisl venenatis.
                Nulla eget eget aliquam mollis. Non nibh viverra eget lacus
                nullam faucibus. Pulvinar adipiscing ultrices sit.
              </h2>
              <div className="flex items-center">
                <img
                  src={card.image}
                  alt="user_logo"
                  className="h-8 w-8 rounded-full"
                />
                <hr className="mx-2 w-28 border-t border-gray-300" />
                <div className="flex items-center">
                  <p className="mr-1 text-sm font-medium">4.9</p>
                  <img src={starLogo} alt="star" className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
