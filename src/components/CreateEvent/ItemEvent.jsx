function ItemEvent(props) {
  return (
    <div className="flex flex-col mt-8 w-[420px] sm:w-max lg:w-1/2 bg-[#171B21] text-white border border-[#404040] rounded-2xl">
      <h1>Nama event: {props.eventName}</h1>

      <h1>Deskripsi event: {props.eventDesc}</h1>

      <h1>Member team: {props.eventMember}</h1>
    </div>
  );
}

export default ItemEvent;
