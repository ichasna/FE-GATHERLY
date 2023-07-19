import Logo from "./UI/Logo/LogoRow";

function ErrorContent() {
  return (
    <>
      <Logo />
      <div className="flex flex-col justify-center items-center">
        <p className="text-9xl text-white tracking-widest font-bold mb-3">
          404
        </p>
        <p className="text-lg text-white">Page Not Found!</p>
        <div className="mt-5 lg:mt-7 text-center">
          <a
            href="/home"
            className="px-3 py-1 sm:px-5 text-md sm:text-lg text-white bg-gradient-to-b from-[#C44054] to-[#DB77A5] rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:scale-105 duration-300"
          >
            Go Home
          </a>
        </div>
      </div>
    </>
  );
}

export default ErrorContent;
