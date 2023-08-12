import Table from "./Table";

function TableCard() {
  return (
    <div className="h-full w-full rounded-xl border border-solid border-[#404040] bg-[#1A1E23]">
      <b className="relative flex items-center text-[40px] p-6 text-white">
        Tasks
      </b>
      <div class="relative w-full h-[1.5px] bg-[#404040]"></div>
      <div className="p-8">
        <Table />
      </div>
    </div>
  );
}

export default TableCard;
