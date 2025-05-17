import React from "react";
const Home = () => {
  return (
    <div className="bg-[url('HomeImg/background_gradient.png')] bg-cover bg-center">
      <div className="mx-auto min-h-[80vh] max-w-6xl px-4 py-6 pt-48">
        {/* Main Heading */}
        <h1 className="mb-[.6em] w-auto text-3xl leading-10 md:w-[30vw] md:text-5xl md:leading-15">
          Transform Your Skin, Embrace Your Glow
        </h1>

        {/* Subheading */}
        <h2 className="mb-[1.8em]">
          Makeup karo or cha jao dunia pe dunia tumhare kadam chumegi <br />
          tumahre aage ek bada samundar hai. jise tum akele captan hi paar kar
          skte ho.
        </h2>

        {/* Contact Button */}
        <button className="mb-[4em] cursor-pointer border border-transparent bg-[#1c0b0c] px-5 py-2 text-base font-medium text-white transition-colors duration-300 hover:bg-[#f38e8c]">
          Contact Us
        </button>
        <div>
        <span className="text-[#1c0b0c]">🙶</span>
        </div>
        <p className="mb-[1.8em] pl-6 text-lg">Incredible Glow Boost</p>
      </div>
    </div>
  );
};

export default Home;
