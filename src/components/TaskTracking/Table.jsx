import TableRow from "./TableRow";

function Table() {
  const dummyData = ["test", "haha"];
  return (
    <div className="rounded-lg overflow-hidden border-2 border-[#404040]">
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th className="p-3 border-r border-[#404040]" colSpan={2}>
              <p className="text-white text-[15px] font-light">Task</p>
            </th>
            <th className="p-3 border-r border-[#404040]" colSpan={1}>
              <p className="text-white text-[15px] font-light">Due Date</p>
            </th>
            <th className="p-3 border-r border-[#404040]" colSpan={1}>
              <p className="text-white text-[15px] font-light">PIC</p>
            </th>
            <th className="" colSpan={2}>
              <p className="text-white text-[15px] font-light">Description</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRow title="Planning" data={dummyData} />
          <TableRow title="Execution" data={dummyData} />
          <TableRow title="Post Event" data={dummyData} />
        </tbody>
      </table>
    </div>
  );
}

export default Table;
