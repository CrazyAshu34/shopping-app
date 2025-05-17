import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
