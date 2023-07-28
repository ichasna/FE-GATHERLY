import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function FormCreateEvent(props) {
    const [enteredEvent, setEnteredEvent] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');

    const [newMembers, setNewMembers] = useState([])

    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), eventMember: '' },
    ]);

    const handleAddFields = () => {
        setInputFields([...inputFields, { id: uuidv4(), eventMember: '' }])
    }

    const handleRemoveFields = id => {
        const values = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }

    function eventChangeHandler(event) {
        setEnteredEvent(event.target.value);
    }
    function descriptionChangeHandler(event) {
        setEnteredDescription(event.target.value);
    }

    function memberChangeHandler(id, rarara) {
        const newMember = inputFields.map(i => {
            if (id === i.id) {
                i[rarara.target.name] = rarara.target.value
            }
            return i;
        })

        const newArr = newMember.map((i) => { return i.eventMember })
        setNewMembers(newArr);
    }

    function submitHandler(event) {
        event.preventDefault();



        const eventData = {
            id: Math.random().toString(),
            eventName: enteredEvent,
            eventDesc: enteredDescription,
            eventMember: newMembers
        }
        props.onSaveEventData(eventData);

        setEnteredEvent('');
        setEnteredDescription('');
        setInputFields([
            { id: uuidv4(), eventMember: '' },
        ]);

        console.log(newMembers);
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

                    {inputFields.map(inputField =>
                    (
                        <div key={inputField.id} className="flex flex-col w-full">
                            <input name="eventMember" type="text" value={inputField.eventMember} placeholder="Type your member team username here"
                                className="block text-black p-3 border rounded focus:outline-none focus:ring focus:ring-sky-500 mb-5"
                                onChange={event => memberChangeHandler(inputField.id, event)} />


                        </div>

                    )
                    )}
                    <div className="flex flex-row justify-center">
                        <button type="button" onClick={handleRemoveFields} className="border border-teal-500 mx-2 p-2 rounded-lg hover:scale-105 duration-300"> Remove New Member</button>

                        <button type="button" onClick={handleAddFields} className="border border-teal-500 mx-2 p-2 bg-rose-500 hover:scale-105 duration-300 rounded-lg "> Add New Member</button>
                    </div>

                    <button
                        className="w-auto m-4 mt-8 mx-36 px-3 py-1 sm:px-5 text-md sm:text-lg text-white bg-gradient-to-b from-[#C44054] to-[#DB77A5] rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:scale-105 duration-300"
                    >
                        Create Event
                    </button>
                </div>

            </div>

        </form>
    )
}

export default FormCreateEvent;