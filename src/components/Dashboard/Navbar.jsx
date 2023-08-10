function Navbar() {
  return (
    <div className="rounded-xl bg-white w-[260px] h-[760px] flex flex-row py-[25px] px-[20px] box-border items-start justify-center">
      <div className="flex flex-col w-full items-center justify-center gap-[38px]">
        <img
          className="relative w-[42px] h-[46px]"
          alt=""
          src="assets/Navbar-Logo.svg"
        />
        <div className="rounded-xl w-[225px] h-[56px] bg-aliceblue shadow-[3px_3px_3px_1px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-row items-center justify-left gap-[18px] border-[1px] border-solid border-[#404040] border-opacity-30">
          <img
            className="w-[30px] h-[30px] overflow-hidden shrink-0 ml-3"
            alt=""
            src="assets/Navbar-Dashboard.svg"
          />
          <div className="w-[102px] flex flex-col justify-center text-black font-dm-sans text-20 font-normal">
            Dashboard
          </div>
        </div>

        <div className="rounded-xl w-[225px] h-[56px] bg-aliceblue shadow-[3px_3px_3px_1px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-row items-center justify-left gap-[18px] border-[1px] border-solid border-[#404040] border-opacity-30">
          <img
            className="w-[30px] h-[30px] overflow-hidden shrink-0 ml-3"
            alt=""
            src="assets/Navbar-Tasks.svg"
          />
          <div className="w-[102px] flex flex-col justify-center text-black font-dm-sans text-20 font-normal">
            Tasks
          </div>
        </div>

        <div className="rounded-xl w-[225px] h-[56px] bg-aliceblue shadow-[3px_3px_3px_1px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-row items-center justify-left gap-[18px] border-[1px] border-solid border-[#404040] border-opacity-30">
          <img
            className="w-[30px] h-[30px] overflow-hidden shrink-0 ml-3"
            alt=""
            src="assets/Navbar-Budgeting.svg"
          />
          <div className="w-[102px] flex flex-col justify-center text-black font-dm-sans text-20 font-normal">
            Budgeting
          </div>
        </div>
        <div className="relative box-border w-[197px] h-px border-t-[2px] border-solid border-[#B5B2B2]" />
        <div className="rounded-xl w-[225px] h-[56px] bg-aliceblue shadow-[3px_3px_3px_1px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-row items-center justify-left gap-[18px] border-[1px] border-solid border-[#404040] border-opacity-30">
          <img
            className="w-[30px] h-[30px] overflow-hidden shrink-0 ml-3"
            alt=""
            src="assets/Navbar-Events.svg"
          />
          <div className="w-[102px] flex flex-col justify-center text-black font-dm-sans text-20 font-normal">
            Events
          </div>
          <img className="relative w-4 h-[9px]" alt="" src="assets/Drop.svg" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
