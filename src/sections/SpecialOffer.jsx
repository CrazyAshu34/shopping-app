import React, { useEffect, useState } from "react";
import ButtonPrimary from "../components/ButtonPrimary";

const SpecialOffer = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const totalSeconds = 23 * 3600 + 20 * 60 + 10;
    const now = Date.now();
    let endTime = localStorage.getItem("special-offer-end-time");

    if (!endTime) {
      endTime = now + totalSeconds * 1000;
      localStorage.setItem("special-offer-end-time", endTime);
    } else {
      endTime = parseInt(endTime);
    }

    const updateTimer = () => {
      const secondsLeft = Math.floor((endTime - Date.now()) / 1000);
      setTimeLeft(secondsLeft > 0 ? secondsLeft : 0);
    };

    updateTimer(); // update immediately
    const interval = setInterval(() => {
      updateTimer();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return { h, m, s };
  };

  const { h, m, s } = formatTime(timeLeft);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-0 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <p className="text-center text-[32px] leading-[1.3] font-medium md:text-start md:text-[2.5rem]">
            Special Offers: Curated Bundles Just for You
          </p>
          <div className="my-8 flex gap-3">
            {[
              { label: "hour", value: h },
              { label: "minute", value: m },
              { label: "second", value: s },
            ].map((item, index) => (
              <div
                key={index}
                className="flex h-[120px] w-[162px] flex-col items-center justify-center border bg-[#fff6ed] md:h-[132px]"
              >
                <p className="text-[36px] font-medium md:text-[48px]">
                  {item.value}
                </p>
                <p className="text-[16px] font-medium md:text-[18px]">
                  {item.label}
                </p>
              </div>
            ))}
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
