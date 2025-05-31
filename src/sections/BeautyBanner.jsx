import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import { useState, useEffect, useRef } from "react";

const BeautyBanner = () => {
  const [count, setCount] = useState({
    firstCount: 0,
    secondCount: 0,
    lastCount: 0,
  });

  const componentRef = useRef(null);
  const intervalRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const timeoutRef = useRef(null);
  const secondCountIncrement = 10 / 150; // ≈ 0.0667
  // 500ms
  0 + 0.0667

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            // Add 500ms delay before starting the counter
            timeoutRef.current = setTimeout(() => {
              intervalRef.current = setInterval(() => {
                setCount((mycount) => {
                  if (
                    mycount.firstCount < 150 ||
                    mycount.secondCount < 10 ||
                    mycount.lastCount < 100
                  ) {
                    return {
                      firstCount:
                        mycount.firstCount < 150 ? mycount.firstCount + 1 : 150,
                      secondCount:
                        mycount.secondCount < 10
                          ? mycount.secondCount + secondCountIncrement
                          : 10,
                      lastCount:
                        mycount.lastCount < 100
                          ? mycount.lastCount + 100 / 150 //  0 + 0.6
                          : 100,
                    };
                  } else {
                    clearInterval(intervalRef.current);
                    return mycount;
                  }
                });
              }, 30);
            }, 500); // 500ms delay

            observer.unobserve(componentRef.current);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* for making two images in a background i have used bg-url and pseudo class before:: fo another image */}
      {/* To to change the size of the image i change the image cover to contain so it shouldn't get crop when resizing and absolute or relative of-course  */}
      <div
        ref={componentRef}
        className="relative bg-position-[center_center] mx-auto my-[40px] h-auto w-full bg-[url('/HomeImg/banner.png')] bg-cover bg-no-repeat px-4 before:absolute before:bottom-0 before:left-0 before:h-[38%] before:w-[100%] before:bg-[url('/HomeImg/banner_girl.png')] before:bg-contain before:bg-no-repeat before:content-[''] md:my-[120px] md:flex md:h-[512px] md:max-w-6xl md:items-center md:justify-end md:px-0 before:md:h-full before:md:w-full"
      >
        <div className="md: mr-0 flex flex-col items-center justify-center pb-[22rem] md:mr-14 md:items-start md:justify-start md:pb-0">
          <p className="mt-[2rem] w-[80%] pb-[2rem] text-center text-3xl font-medium md:mt-0 md:w-[100%] md:text-start md:md:text-[40px] md:leading-[50px]">
            Alous: Where Skincare <br /> Meets Perfection
          </p>
          {/* value container  */}
          <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-0">
            <div className="flex flex-col items-center justify-center md:items-start md:justify-center">
              <p className="text-3xl font-medium md:text-[40px]">
                {count.firstCount}+
              </p>
              <p className="w-auto text-[14px] md:w-[70%] md:text-[14px]">
                Skincare Products Available
              </p>
            </div>
            <div className="flex flex-col items-center justify-center md:items-start md:justify-center">
              <p className="text-3xl font-medium md:text-[40px]">
                {Math.round(count.secondCount)}M 
              </p>
              <p className="w-auto text-[14px] md:w-[70%] md:text-[14px]">
                Social Media Followers
              </p>
            </div>
            <div className="flex flex-col items-center justify-center md:items-start md:justify-center">
              <p className="text-3xl font-medium md:text-[40px]">
                {Math.round(count.lastCount)}%
              </p>
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
