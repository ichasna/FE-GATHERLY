import Table from "./TaskTracking/Table";
import Navbar from "./UI/Commons/Navbar";

function TaskTracking() {
  return (
    <>
      {/* <div className="hidden lg:flex lg:justify-center lg:items-center bg-blue-200 h-full">
        <Navbar />
      </div> */}
      <div className="h-full w-full p-4 flex justify-center items-center">
        <Table />
      </div>
    </>
  );
}

export default TaskTracking;
