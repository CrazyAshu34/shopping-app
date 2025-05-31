import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[398px] bg-[#F38E8C] md:h-[608px]">
      <div className="mx-auto max-w-6xl px-4 py-18 md:px-0 md:py-30">
        <div className="mx-auto mt-10 flex w-full flex-col items-center justify-center md:space-y-8 space-y-12">
          <p className=" text-[40px] text-white md:text-[56px]">Error 404</p>
          <p className="w-auto text-center md:w-[49%] text-[18px] font-medium md:text-[20px] md:leading-6 leading-6">
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable
          </p>

          <ButtonPrimary
            onClick={() => navigate("/")}
            className="w-full md:w-fit self-center rounded !px-18 !py-4 align-middle !text-white hover:!bg-[white] hover:!text-[#1c0b0c]"
          >
            Back To Homepage
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
