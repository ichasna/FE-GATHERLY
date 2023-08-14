import TableRow from "./TableRow";

function Table() {
  const dummyData = ["test", "haha"];
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
        <TableRow title="Planning" data={dummyData} />
        <TableRow title="Execution" data={dummyData} />
        <TableRow title="Post Event" data={dummyData} />
      </tbody>
    </table>
  );
}

export default Table;
