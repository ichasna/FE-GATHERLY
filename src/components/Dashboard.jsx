import Index from "./Dashboard/Index";
import Navbar from "./UI/Commons/Navbar";

function Dashboard() {
  return (
    <>
      <div className="flex justify-center bg-blue-200 col-span-2">
        <Navbar />
      </div>
      <div className="flex justify-center bg-purple-200 col-span-10">
        <Index />
      </div>
    </>
  );
}

export default Dashboard;
