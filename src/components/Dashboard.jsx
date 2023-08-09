import Index from "./Dashboard/Index";
import Navbar from "./Dashboard/Navbar";

function Dashboard() {
    return (
        <>
            <div className="flex w-full min-h-screen p-36 0 flex-col justify-center items-center gap-10 rounded-10 bg-[#030C14]">
                <div className="flex flex-row items-center justify-center gap-[26px] text-[30px]">
                    <Navbar />
                    <Index />
                </div>
            </div>
        </>
    );
}

export default Dashboard;
