import { useState } from "react";
import TableRow from "./TableRow";

function Table() {
  const [newSection, setNewSection] = useState("");
  const [dummyData, setDummyData] = useState([
    {
      title: "Planning",
      data: [
        {
          task: "Create an event plan and define roles",
          dueDate: "15/05/2023",
          PIC: "Amira Nisrina",
          description: "",
        },
      ],
    },
    {
      title: "Execution",
      data: [
        {
          task: "Create an event plan",
          dueDate: "20/05/2023",
          PIC: "Daffa",
          description: "",
        },
      ],
    },
    {
      title: "Post Event",
      data: [
        {
          task: "Define roles",
          dueDate: "21/05/2023",
          PIC: "Rangga",
          description: "",
        },
      ],
    },
  ]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newSection) {
      setDummyData([
        ...dummyData,
        {
          title: newSection,
          data: [],
        },
      ]);
      setNewSection("");
    }
  };
  return (
    <div className="rounded-lg overflow-hidden border-2 border-[#404040] shadow-md">
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th
              className="p-2 lg:p-3 border-r border-[#404040] col-span-4"
              colSpan={4}
            >
              <p className="text-white text-[12px] lg:text-[15px] font-light">
                Task
              </p>
            </th>
            <th className="p-2 lg:p-3  border-r border-[#404040]" colSpan={2}>
              <p className="text-white text-[12px] lg:text-[15px] font-light">
                Due Date
              </p>
            </th>
            <th className="p-2 lg:p-3  border-r border-[#404040]" colSpan={2}>
              <p className="text-white text-[12px] lg:text-[15px] font-light">
                PIC
              </p>
            </th>
            <th className="p-2 lg:p-3  border-[#404040]" colSpan={4}>
              <p className="text-white text-[12px] lg:text-[15px] font-light">
                Description
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((data) => (
            <TableRow title={data.title} data={data.data} />
          ))}
          <tr className="border-t border-[#404040]">
            <td colSpan={12}>
              <form
                onSubmit={handleFormSubmit}
                className="flex flex-row justify-start items-center p-2 lg:p-4"
              >
                <button type="submit">
                  <svg
                    className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 hover:brightness-75 duration-300"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.66 0C18.06 0 20 1.92 20 5.33V14.67C20 18.06 18.07 20 14.67 20H5.33C1.92 20 0 18.06 0 14.67V5.33C0 1.92 1.92 0 5.33 0H14.66ZM9.99 5.51C9.53 5.51 9.16 5.88 9.16 6.34V9.16H6.33C6.11 9.16 5.9 9.25 5.74 9.4C5.59 9.56 5.5 9.769 5.5 9.99C5.5 10.45 5.87 10.82 6.33 10.83H9.16V13.66C9.16 14.12 9.53 14.49 9.99 14.49C10.45 14.49 10.82 14.12 10.82 13.66V10.83H13.66C14.12 10.82 14.49 10.45 14.49 9.99C14.49 9.53 14.12 9.16 13.66 9.16H10.82V6.34C10.82 5.88 10.45 5.51 9.99 5.51Z"
                      fill="#F7B500"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  value={newSection}
                  onChange={(e) => setNewSection(e.target.value)}
                  placeholder="Add a section..."
                  className="text-[15px] lg:text-[20px] text-[#919191] opacity-50 bg-transparent focus:outline-none focus:ring-0 font-bold ml-3"
                ></input>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
