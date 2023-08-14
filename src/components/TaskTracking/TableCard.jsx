import Table from "./Table";

function TableCard() {
  return (
    <div className="h-full w-full rounded-xl border border-solid border-[#404040] bg-[#1A1E23]">
      <div className="flex flex-row items-center">
        <b className="relative flex items-center text-[20px] lg:text-[40px] p-4 ml-6 text-white">
          Tasks
        </b>
        <div className="flex w-[120px] h-[40px] p-0px 2px justify-center items-center ml-auto mr-6 rounded-10px border border-solid border-[#404040] bg-[#1A1E23] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] rounded-xl">
          <div className="flex w-[82px] h-[40px] flex-col justify-center flex-shrink-0 text-white text-center font-dm-sans text-20 font-normal">
            Abby
          </div>
          <img
            className="relative w-[26px] h-[26px] overflow-hidden shrink-0"
            alt=""
            src="assets/Drop-1.svg"
          />
        </div>
      </div>

      <div class="relative w-full h-[1.5px] bg-[#404040]"></div>
      <div className="p-4 lg:p-8">
        <Table />
      </div>
    </div>
  );
}

export default TableCard;
