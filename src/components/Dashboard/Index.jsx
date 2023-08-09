import EventDetails from "./EventDetails";
import Team from "./Team";
import Notes from "./Notes";
import Resources from "./Resources";

function Index() {
    return (
        <>
            <div className="h-[760px] flex flex-col items-start justify-between text-6xl text-white">
                <EventDetails />
                <Team />
                <Notes />
                <Resources />
            </div>
        </>
    );
}

export default Index;
