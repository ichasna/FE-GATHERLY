function HeaderCreateEvent() {
  return (
    <div className="flex flex-row p-6 items-center justify-between">
      <div className="flex flex-row">
        <img src="assets\event 1.png" className="w-[30px] sm:w-[50px]"></img>
        <h1 className="text-[px] mx-[10px] sm:text-[30px] sm:mx-[30px] m-auto">
          Create Event
        </h1>
      </div>
      <button>
        <img src="assets\Close.png"></img>
      </button>
    </div>
  );
}

export default HeaderCreateEvent;
