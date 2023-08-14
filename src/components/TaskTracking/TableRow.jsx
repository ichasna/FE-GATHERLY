import { useState } from "react";
import Dropdown from "./util/Dropdown";

function TableRow({ title, data }) {
  const [showRow, setShowRow] = useState(false);
  return (
    <>
      <tr className="border-t border-[#404040]">
        <div className="flex flex-row justify-start items-center p-4">
          <Dropdown setShowRow={setShowRow} showRow={showRow} />
          <span className="text-[20px] text-[#919191] font-bold ml-3">
            {title}
          </span>
        </div>
      </tr>
      {showRow && (
        <>
          {data.map((item, index) => (
            <tr key={index} className="border-t border-[#404040]">
              <div className="flex flex-row justify-start items-center p-4">
                <span className="text-[20px] text-[#919191] font-bold ml-3">
                  {item}
                </span>
              </div>
            </tr>
          ))}
        </>
      )}
    </>
  );
}

export default TableRow;
