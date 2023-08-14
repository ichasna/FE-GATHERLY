import { useState } from "react";
import Dropdown from "./util/Dropdown";

function TableRow({ title }) {
  const dummyData = ["test", "haha"];
  const [showRow, setShowRow] = useState(false);
  return (
    <>
      <tr className="border border-[#404040]">
        <div className="flex flex-row justify-start items-center p-4">
          <Dropdown setShowRow={setShowRow} showRow={showRow} />
          <span className="text-[20px] text-[#919191] font-bold ml-3">
            {title}
          </span>
        </div>
      </tr>
      {showRow && (
        <>
          {dummyData.map((item) => (
            <tr className="border border-[#404040]">
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
