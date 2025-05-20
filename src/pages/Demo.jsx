import { useState, useEffect } from "react";

const Demo = () => {
  const [count, setCount] = useState({
    firstCount: 0,
    secondCount: 0,
    lastCount: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((mycount) => {
        // Counter limit check
        if (
          mycount.firstCount < 150 ||
          mycount.secondCount < 10 ||
          mycount.lastCount < 100
        ) {
          return {
            firstCount: mycount.firstCount < 150 ? mycount.firstCount + 1 : 150,
            secondCount: mycount.secondCount < 10 ? mycount.secondCount + 1 : 10,
            lastCount: mycount.lastCount < 100 ? mycount.lastCount + 1 : 100,
          };
        }
        // all in limit then, clearing interval 
        clearInterval(interval);
        return mycount;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto min-h-[80vh] max-w-6xl border px-4 py-6 pt-30 pb-62 md:pt-48 md:pb-30">
      <p>
        On load, count will change to:
        <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-0">
          <div className="flex flex-col items-center justify-center md:items-start md:justify-center">
            <p className="text-3xl font-medium md:text-[40px]">
              {count.firstCount}
              <br />
              {/* hardcoded for example */}
              150+
            </p>
            <p className="w-auto text-[14px] md:w-[70%] md:text-[14px]">
              Skincare Products Available
            </p>
          </div>
          <div className="flex flex-col items-center justify-center md:items-start md:justify-center">
            <p className="text-3xl font-medium md:text-[40px]">
              {count.secondCount}
              <br />
              {/* hardcoded for example */}
              10M
            </p>
            <p className="w-auto text-[14px] md:w-[70%] md:text-[14px]">
              Social Media Followers
            </p>
          </div>
          <div className="flex flex-col items-center justify-center md:items-start md:justify-center">
            <p className="text-3xl font-medium md:text-[40px]">
              {count.lastCount}
              <br />
              {/* hardcoded for example */}
              100%
            </p>
            <p className="w-auto text-[14px] md:w-[70%] md:text-[14px]">
              Certified Ingredients
            </p>
          </div>
        </div>
      </p>
    </div>
  );
};

export default Demo;
