function Intro() {
  return (
    <>
      <div className="lg:flex lg:flex-col lg:justify-center lg:h-screen w-full">
        <div className="mt-5">
          <p className="text-xl md:text-3xl lg:text-4xl 2xl:text-5xl text-white font-bold">
            Unleash the Power of Seamless Event Management!
          </p>
          <p className="text-white text-justify font-thin lg:text-xl md:text-2xl 2xl:text-3xl mt-3 mb-6">
            Tired of juggling multiple platforms and struggling to bring your
            virtual events to life? Look no further! Gatherly is here to
            revolutionize your event management experience.
          </p>
        </div>
        <div className="flex flex-row">
          <a
            href="/login"
            className="flex flex-col justify-center items-center text-center w-24 h-9 md:w-36 md:h-11 text-white text-md md:text-lg bg-gradient-to-b from-[#F04E98] to-[#F68FBE] hover:from-pink-500 hover:to-yellow-500 hover:scale-105 duration-300 rounded-md"
          >
            Login
          </a>
          <a
            href="/register"
            className="flex flex-col justify-center items-center text-center w-24 h-9 md:w-36 md:h-11 ml-10 md:ml-14 text-white text-md md:text-lg bg-gradient-to-b from-[#5D5FEF] to-[#A5A6F6] hover:from-[#5D5FEF] hover:to-[#A5A6F6] hover:scale-105 duration-300 rounded-md"
          >
            Sign up
          </a>
        </div>
      </div>
    </>
  );
}

export default Intro;
