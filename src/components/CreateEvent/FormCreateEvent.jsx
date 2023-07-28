import { useState } from "react";

function FormCreateEvent(props) {
    const [enteredEvent, setEnteredEvent] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
    const [enteredMember, setEnteredMember] = useState('');

    function eventChangeHandler(event) {
        setEnteredEvent(event.target.value);
    }
    function descriptionChangeHandler(event) {
        setEnteredDescription(event.target.value);
    }
    function memberChangeHandler(event) {
        setEnteredMember(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();

        const eventData = {
            id: Math.random().toString(),
            eventName: enteredEvent,
            eventDesc: enteredDescription,
            eventMember: enteredMember
        }
        props.onSaveEventData(eventData);
        
        setEnteredEvent('');
        setEnteredDescription('');
        setEnteredMember('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="flex flex-row px-6 pt-3">
                <div className="flex flex-col w-full">
                    <label >Event Name</label>
                    <input type="text" value={enteredEvent} placeholder="Enter your event name..."
                        className="block text-black p-3 border rounded focus:outline-none focus:ring focus:ring-sky-500"
                        onChange={eventChangeHandler} />
                </div>
            </div>

            <div className="flex flex-row px-6 pt-3">
                <div className="flex flex-col w-full">
                    <label >Description</label>
                    <input type="text" value={enteredDescription} placeholder="What's your event about?"
                        className="block text-black p-3 border rounded focus:outline-none focus:ring focus:ring-sky-500"
                        onChange={descriptionChangeHandler} />
                </div>
            </div>

            <div className="flex flex-row px-6 pt-3">
                <div className="flex flex-col w-full">
                    <label >Invite Members</label>
                    <input type="text" value={enteredMember} placeholder="Type your member team username here"
                        className="block text-black p-3 border rounded focus:outline-none focus:ring focus:ring-sky-500"
                        onChange={memberChangeHandler} />
                    <button
                        className="w-auto m-4 mx-36 px-3 py-1 sm:px-5 text-md sm:text-lg text-white bg-gradient-to-b from-[#C44054] to-[#DB77A5] rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:scale-105 duration-300"
                    >
                        Create Event
                    </button>
                </div>

            </div>

        </form>
    )
}

export default FormCreateEvent;