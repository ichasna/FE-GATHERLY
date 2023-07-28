
import ItemEvent from "./ItemEvent";

function ListEvent(props) {
    return (


        <div>
            {props.event.map((events) =>
                <ItemEvent
                    key={events.id}
                    eventName={events.eventName}
                    eventDesc={events.eventDesc}
                    eventMember={events.eventMember}
                />
            )}
        </div>


    )
}

export default ListEvent;;