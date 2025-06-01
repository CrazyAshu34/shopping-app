import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import { useNavigate, useParams } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const param = useParams();
  console.log(param, typeof param); // {product-details: '101'} 'object'

  return (
    <div className="h-[398px] bg-[#F38E8C] md:h-[608px]">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-0 md:py-28">
        <div className="mt-10 flex flex-col items-center justify-center space-y-8">
          <p className="text-[56px] text-white">Product</p>
          <p className="text-[20px]">Product - page</p>

          <ButtonPrimary
            onClick={() => navigate("/")}
            className="w-fit self-center rounded !px-18 !py-4 align-middle !text-white hover:!bg-[white] hover:!text-[#1c0b0c]"
          >
            Back To Homepage
          </ButtonPrimary>

          <div className="h-[100px] self-center bg-pink-100 p-20">
            {/* This product is is: --{JSON.stringify(param)}-- */}{" "}
            {/* this is working */}
            This product is is: {param["product-details"]}{" "}
            {/* this is still not working */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
