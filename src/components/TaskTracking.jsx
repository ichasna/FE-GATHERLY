import Navbar from "./UI/Commons/Navbar";

function TaskTracking() {
  return (
    <>
      <div className="hidden lg:flex lg:justify-center lg:items-center bg-blue-200 h-full">
        <Navbar />
      </div>
      <div className="bg-purple-200 h-full w-full flex justify-center items-center">
        <p>Table</p>
      </div>
    </>
  );
}

export default TaskTracking;
