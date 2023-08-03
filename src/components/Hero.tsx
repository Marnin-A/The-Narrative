import React from "react";
// interface heroProps{hero}

export default function Hero(props: { heroImg: string }) {
  return (
    <section className=" w-full mb-4 relative">
      <div
        className="absolute z-50 text-white"
        style={{ top: "30%", left: "42%", transform: "translate(-50% -50%)" }}
      >
        <h1>ALWAYS INFORMED </h1>
        <h1>ALWAYS INSPIRED </h1>
        <hr />
        <h3>Stories Curated For You</h3>
        <button>Sign up</button>
      </div>
      <img className="w-full min-h-screen z-10" src={props.heroImg} alt="" />
    </section>
  );
}
