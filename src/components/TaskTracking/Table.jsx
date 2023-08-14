import Dropdown from "../UI/Utilities/Dropdown";

function Table() {
  return (
    <table className="table-fixed w-full border-collapse border border-[#404040]">
      <thead>
        <tr>
          <th className="p-3 border border-[#404040]" colSpan={2}>
            <p className="text-white text-[15px] font-normal">Task</p>
          </th>
          <th className="p-3 border border-[#404040]" colSpan={1}>
            <p className="text-white text-[15px] font-normal">Due Date</p>
          </th>
          <th className="p-3 border border-[#404040]" colSpan={1}>
            <p className="text-white text-[15px] font-normal">PIC</p>
          </th>
          <th className="p-3 border border-[#404040]" colSpan={2}>
            <p className="text-white text-[15px] font-normal">Description</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border border-[#404040]">
          <div className="flex flex-row justify-start items-center p-4">
            <Dropdown />
            <span className="text-[20px] text-[#919191] font-bold ml-3">
              Planning
            </span>
          </div>
        </tr>
        <tr className="border border-[#404040]">
          <div className="flex flex-row justify-start items-center p-4">
            <Dropdown />
            <span className="text-[20px] text-[#919191] font-bold ml-3">
              Execution
            </span>
          </div>
        </tr>
        <tr className="border border-[#404040]">
          <div className="flex flex-row justify-start items-center p-4">
            <Dropdown />
            <span className="text-[20px] text-[#919191] font-bold ml-3">
              Post Event
            </span>
          </div>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
