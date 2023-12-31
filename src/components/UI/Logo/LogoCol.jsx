function Logo() {
  return (
    <div className="flex flex-col justify-center items-center -mt-20 mb-10 lg:mt-0 lg:mb-0 xl:-mr-10">
      <a href="/home">
        <img
          src="assets\Vector.png"
          className="w-36 h-36 md:w-36 lg:w-96 lg:h-96"
        ></img>
      </a>
      <a href="/home">
        <img src="assets\Logo.png" className="w-auto h-12 lg:h-16"></img>
      </a>
    </div>
  );
}

export default Logo;
