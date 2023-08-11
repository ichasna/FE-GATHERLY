import ItemEvent from "./ItemEvent";
import { useEffect } from "react";

function ListEvent(props) {
  useEffect(() => {
    console.log(props.members);
  }, []);
  return (
    <div>
      {props.event.map((events) => {
        props.members.map((members) => (
          <ItemEvent
            key={events.id}
            eventName={events.eventName}
            eventDesc={events.eventDesc}
            eventMember={members.eventMember}
          />
        ));
      })}
    </div>
  );
}

export default ListEvent;
