import DropdownProfile from "../UI/Commons/DropdownProfile";
import Table from "./Table";

function TableCard() {
  return (
    <div className="h-full w-full rounded-xl border border-solid border-[#404040] bg-[#1A1E23]">
      <div className="flex flex-row items-center">
        <b className="relative flex items-center text-[20px] lg:text-[40px] p-4 ml-6 text-white">
          Tasks
        </b>
        <div className="ml-auto">
          <DropdownProfile name="Daffa" />
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
