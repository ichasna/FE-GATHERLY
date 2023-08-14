import { useState } from "react";
import Dropdown from "./util/Dropdown";

function TableRow({ title, data }) {
  const [showRow, setShowRow] = useState(false);
  return (
    <>
      <tr className="border-t border-[#404040]">
        <td colSpan={12}>
          <div className="flex flex-row justify-start items-center p-2 lg:p-4">
            <Dropdown setShowRow={setShowRow} showRow={showRow} />
            <span className="text-[15px] lg:text-[20px] text-[#919191] font-bold ml-3">
              {title}
            </span>
          </div>
        </td>
      </tr>
      {showRow && (
        <>
          {data.map((item, index) => (
            <tr key={index} className="border-t border-[#404040] text-[11px] lg:text-[16px]">
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
                  <span className="bg-white lg:py-3 lg:px-5 lg:my-3 py-1 px-2 my-2 rounded-xl font-bold">{item.dueDate}</span>
                </div>
              </td>
              <td colSpan={2}>
                <div className="flex flex-row justify-center items-center">
                  <span className="bg-white lg:py-3 lg:px-5 lg:my-3 py-1 px-2 my-2 rounded-xl font-bold text-[#787486] whitespace-nowrap">{item.PIC}</span>
                </div>
              </td>
              <td colSpan={4}>
                <div className="flex flex-row justify-start items-center">
                  {item.description}
                </div>
              </td>
            </tr>
          ))}
        </>
      )}
    </>
  );
}

export default TableRow;
