export default function Hero() {
  return (
    <section className=" mb-4 relative h-[70vh] flex flex-col justify-center items-center">
      <div className="absolute z-50 text-red-500 text-center font-bold flex flex-col items-center gap-4 w-1/2">
        <div className="max-md:text-xl text-5xl">
          <h1>ALWAYS INFORMED </h1>
          <h1>ALWAYS INSPIRED </h1>
        </div>
        <hr className="border-2 border-[#434656] w-full" />
        <h3>Stories Curated For You</h3>
        <button className="bg-[#434656] text-white text-2xl rounded-md py-3 px-8 w-min whitespace-nowrap">
          Sign up
        </button>
      </div>
    </section>
  );
}
