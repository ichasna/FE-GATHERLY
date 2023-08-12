function Table() {
  return (
    <table className="w-full border border-separate border-[#404040] rounded-xl text-[15px] text-white table-fixed">
      <thead>
        <tr>
          <th className="p-3" colSpan={2}>Task</th>
          <th className="p-3" colSpan={1}>Due Date</th>
          <th className="p-3" colSpan={1}>PIC</th>
          <th className="p-3" colSpan={2}>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>Planning</tr>
        <tr>Execution</tr>
        <tr>Post Event</tr>
      </tbody>
    </table>
  );
}

export default Table;
