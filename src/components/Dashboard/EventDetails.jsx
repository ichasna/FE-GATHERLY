function EventDetails() {
  const user = localStorage.getItem("user");
  return (
    <>
      <div className="flex flex-row w-[918px] items-start justify-between gap-[26px] text-[30px]">
        <div className="flex h-[195px] flex-col justify-start items-start gap-12px rounded-xl border border-solid border-[#404040] bg-[#1A1E23]">
          <b className="relative flex items-center m-4 w-[242px] h-[45px] shrink-0">
            COMPFEST 13
          </b>
          <div class="relative w-[650px] h-[1.5px] bg-[#404040] mx-auto"></div>
          <div className="relative text-[14px] flex items-center w-[684px] mt-2 p-4 h-[84px] shrink-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="flex h-[195px] p-[17px] flex-col justify-center items-center gap-14px rounded-xl border border-solid border-[#404040] bg-[#1A1E23]">
          <img
            className="w-106px h-106px flex-shrink-0 filter drop-shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
            alt=""
            src="assets/Profile.svg"
          />
          <div className="flex w-[154px] h-[195px] justify-center items-center ">
            <div className="flex w-[120px] h-[40px] p-0px 2px justify-center items-center rounded-10px border border-solid border-[#404040] bg-[#1A1E23] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] rounded-xl">
              <div className="flex w-[82px] h-[40px] flex-col justify-center flex-shrink-0 text-white text-center font-dm-sans text-20 font-normal">
                {user}
              </div>
              <img
                className="relative w-[26px] h-[26px] overflow-hidden shrink-0"
                alt=""
                src="assets/Drop-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventDetails;
