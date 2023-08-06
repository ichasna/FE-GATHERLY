import { useState } from "react";
import toast from "react-hot-toast";
import FormCreateEvent from "./FormCreateEvent";
import HeaderCreateEvent from "./headerCreateEvent";
import Events from "./Events";
import axios from "axios";

function CreateEventCard() {
  const [event, setEvent] = useState();
  const [members, setMembers] = useState([]);
  const [listEvents, setListEvents] = useState([])
  const [eventId, setEventId] = useState();

  function addEventHandler(event) {
    fetch(`http://localhost:5000/events/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    })
    .then(getEventID)
    .then(setEventId(listEvents.filter(pastEvent => pastEvent.eventName === event.eventName).id))
    .catch((error) => console.error(error));

    setEvent((prevEvent) => {
      return [event, ...prevEvent];
    });
  }

  function addMembersHandler(members, eventId) {
    fetch(`http://localhost:5000/members/addmember/${eventId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(members),
    }).catch((error) => console.error(error));
    
    setMembers((prevMembers) => {
      return [members, ...prevMembers];
    });
  }

  function getEventID() {
    axios
      .get(`http://localhost:5000/events`)
      .then(function (response) {
        setListEvents(response.data);
      });
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col w-[420px] sm:w-max lg:w-1/2 bg-[#171B21] text-white border border-[#404040] rounded-2xl">
        <HeaderCreateEvent />

        <hr className="border border-[#404040]"></hr>

        <FormCreateEvent
          onSaveEventData={addEventHandler}
          onSaveMembersData={addMembersHandler}
        />
      </div>
      <Events event={event} members={members} />
    </div>
  );
}

export default CreateEventCard;
