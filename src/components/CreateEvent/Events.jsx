import ListEvent from "./listEvent";

function Events(props) {
  return (
    <div className="flex flex-col mt-8 w-[420px] sm:w-max lg:w-1/2 bg-[#171B21] text-white border border-[#404040] rounded-2xl">
      <ListEvent event={props.event} members={props.members} />
    </div>
  );
}

export default Events;
