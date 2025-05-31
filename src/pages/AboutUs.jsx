import React from "react";
import ButtonPrimary from "../components/ButtonPrimary";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[398px] bg-[#F38E8C] md:h-[608px]">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-0 md:py-28">
        <div className="mt-10 flex flex-col items-center justify-center space-y-8">
          <p className="text-[56px] text-white">About Us</p>
          <p className="text-[20px]">WE are a simple company</p>

          <ButtonPrimary
            onClick={() => navigate("/")}
            className="w-fit self-center rounded !px-18 !py-4 align-middle !text-white hover:!bg-[white] hover:!text-[#1c0b0c]"
          >
            Back To Homepage
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
