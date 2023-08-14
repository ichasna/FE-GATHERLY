import TableCard from "./TaskTracking/TableCard";
import Navbar from "./UI/Commons/Navbar";

function TaskTracking() {
  return (
    <>
      <div className="hidden lg:flex lg:justify-center lg:items-center p-4 h-full">
        <Navbar />
      </div>
      <div className="h-full w-full p-4 flex justify-center items-center">
        <TableCard />
      </div>
    </>
  );
}

export default TaskTracking;
