import TableRow from "./TableRow";

function Table() {
  const dummyData = [
    {
      task: "Create an event plan and define roles",
      dueDate: "15/05/2023",
      PIC: "Amira Nisrina",
      description: ""
    }
  ];
  return (
    <div className="rounded-lg overflow-hidden border-2 border-[#404040]">
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th className="p-2 lg:p-3 border-r border-[#404040] col-span-4" colSpan={4}>
              <p className="text-white text-[12px] lg:text-[15px] font-light">Task</p>
            </th>
            <th className="p-2 lg:p-3  border-r border-[#404040]" colSpan={2}>
              <p className="text-white text-[12px] lg:text-[15px] font-light">Due Date</p>
            </th>
            <th className="p-2 lg:p-3  border-r border-[#404040]" colSpan={2}>
              <p className="text-white text-[12px] lg:text-[15px] font-light">PIC</p>
            </th>
            <th className="p-2 lg:p-3  border-r border-[#404040]" colSpan={4}>
              <p className="text-white text-[12px] lg:text-[15px] font-light">Description</p>
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
