import { useState } from "react";
import toast from "react-hot-toast";
import FormCreateEvent from "./formCreateEvent";
import HeaderCreateEvent from "./headerCreateEvent";
import Events from "./Events";

function CreateEventCard() {

  const DUMMY_DATA = [
    {
      id: 'e1',
      eventName: 'Compfest',
      eventDesc: 'Sebuah acara yang diselenggarakan oleh anak IT',
      eventMember: ["carissa", "SYARIFAH", "hasna"],
    },
  ];

  const [event, setEvent] = useState(DUMMY_DATA);

  function addEventHandler(event) {
    
    setEvent((prevEvent) => {
      return [event, ...prevEvent]
    });
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col w-[420px] sm:w-max lg:w-1/2 bg-[#171B21] text-white border border-[#404040] rounded-2xl">
        
        <HeaderCreateEvent/>

        <hr className="border border-[#404040]"></hr>

        <FormCreateEvent onSaveEventData={addEventHandler}/>

      </div>
      <Events event={event}/>
    </div>
  )

}

export default CreateEventCard;
