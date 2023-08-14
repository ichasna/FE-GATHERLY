import { useState } from "react";
import DropdownTask from "./util/DropdownTask";

function TableRow({ title, data }) {
  const [showRow, setShowRow] = useState(false);
  return (
    <>
      <tr className="border-t border-[#404040]">
        <td colSpan={12}>
          <div className="flex flex-row justify-start items-center p-2 lg:p-4">
            <DropdownTask setShowRow={setShowRow} showRow={showRow} />
            <span className="text-[15px] lg:text-[20px] text-[#919191] font-bold ml-3">
              {title}
            </span>
          </div>
        </td>
      </tr>
      {showRow && (
        <>
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-t border-[#404040] text-[11px] lg:text-[16px]"
            >
              <td colSpan={4}>
                <div className="flex flex-row justify-start items-center p-2 lg:p-4">
                  <svg
                    className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 hover:brightness-75 duration-300"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4485 0.75C18.9233 0.75 21.25 3.1895 21.25 6.818V15.1933C21.25 18.8105 18.9233 21.25 15.4485 21.25H6.56175C3.087 21.25 0.75 18.8105 0.75 15.1933V6.818C0.75 3.1895 3.087 0.75 6.56175 0.75H15.4485ZM15.2845 7.925C14.936 7.5765 14.362 7.5765 14.0135 7.925L9.78025 12.1582L7.9865 10.3645C7.638 10.016 7.064 10.016 6.7155 10.3645C6.367 10.713 6.367 11.2767 6.7155 11.6355L9.155 14.0647C9.32925 14.239 9.55475 14.321 9.78025 14.321C10.016 14.321 10.2415 14.239 10.4158 14.0647L15.2845 9.196C15.633 8.8475 15.633 8.28375 15.2845 7.925Z"
                      fill="#404040"
                    />
                  </svg>
                  <span className="text-white font-light ml-3">
                    {item.task}
                  </span>
                </div>
              </td>
              <td colSpan={2}>
                <div className="flex flex-row justify-center items-center">
                  <span className="bg-white lg:py-3 lg:px-5 lg:my-3 py-1 px-2 my-2 rounded-xl font-bold">
                    {item.dueDate}
                  </span>
                </div>
              </td>
              <td colSpan={2}>
                <div className="flex flex-row justify-center items-center">
                  <span className="bg-white lg:py-3 lg:px-5 lg:my-3 py-1 px-2 my-2 rounded-xl font-bold text-[#787486] whitespace-nowrap">
                    {item.PIC}
                  </span>
                </div>
              </td>
              <td colSpan={4}>
                <div className="flex flex-row justify-start items-center">
                  {item.description}
                </div>
              </td>
            </tr>
          ))}
          <tr className="border-t border-[#404040] text-[11px] lg:text-[16px]">
            <td colSpan={12}>
              <div className="flex flex-row justify-start items-center p-2 lg:p-4">
                <svg
                  className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0 hover:brightness-75 duration-300"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.66 0C18.06 0 20 1.92 20 5.33V14.67C20 18.06 18.07 20 14.67 20H5.33C1.92 20 0 18.06 0 14.67V5.33C0 1.92 1.92 0 5.33 0H14.66ZM9.99 5.51C9.53 5.51 9.16 5.88 9.16 6.34V9.16H6.33C6.11 9.16 5.9 9.25 5.74 9.4C5.59 9.56 5.5 9.769 5.5 9.99C5.5 10.45 5.87 10.82 6.33 10.83H9.16V13.66C9.16 14.12 9.53 14.49 9.99 14.49C10.45 14.49 10.82 14.12 10.82 13.66V10.83H13.66C14.12 10.82 14.49 10.45 14.49 9.99C14.49 9.53 14.12 9.16 13.66 9.16H10.82V6.34C10.82 5.88 10.45 5.51 9.99 5.51Z"
                    fill="#404040"
                  />
                </svg>
              </div>
            </td>
          </tr>
        </>
      )}
    </>
  );
}

export default TableRow;
