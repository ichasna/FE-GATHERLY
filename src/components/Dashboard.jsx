import Index from "./Dashboard/Index";
import Navbar from "./UI/Commons/Navbar";

function Dashboard() {
  return (
    <>
      <div className="bg-blue-200">
        <Navbar />
      </div>
      <div className="bg-purple-200">
        <Index />
      </div>
    </>
  );
}

export default Dashboard;
