import { useState } from "react";
import toast from "react-hot-toast";

function CreateEventCard() {

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col w-[260px] sm:w-1/3 bg-[#171B21] text-white border border-[#404040] rounded-2xl">
        <div className="flex flex-row p-6 items-center justify-between">
          <div className="flex flex-row">
            <img
              src="assets\event 1.png"
              className="w-[30px] sm:w-[50px]"
            ></img>
            <h1 className="text-[15px] mx-[10px] sm:text-[30px] sm:mx-[30px] m-auto">Create Event</h1>
          </div>
          <button>
            <img
              src="assets\Close.png"
            ></img>
          </button>
        </div>
        <hr className="border border-[#404040]"></hr>

        <form>
          <div className="flex flex-row px-6 pt-3">
            <div className="flex flex-col w-full">
              <label for="event">Event Name</label>
              <input type="text" id="event" placeholder="Enter your event name..."
                className="block text-black p-3 border rounded focus:outline-none focus:ring focus:ring-sky-500"></input>
            </div>
          </div>

          <div className="flex flex-row px-6 pt-3">
            <div className="flex flex-col w-full">
              <label for="event">Description</label>

              <input type="text" id="event" placeholder="What's this event about?"
                className="pb-36 p-3 text-black border rounded focus:outline-none focus:ring focus:ring-sky-500"></input>
            </div>
          </div>

          <div className="flex flex-row px-6 pt-3">
            <div className="flex flex-col w-full">
              <label for="event">Invite Members</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  className="text-md text-black bg-white rounded-lg hover:scale-105 duration-300"
                >

                  <div className="flex flex-row items-center justify-between p-2">
                    <h1>
                      rangga@ristek.cs.ui.ac.id
                    </h1>
                    <img
                      src="assets\Dropdown.png"
                      className="w-5 h-3"
                    ></img>
                  </div>
                </button>

                <button
                  className="text-md text-black bg-white rounded-lg hover:scale-105 duration-300"
                >

                  <div className="flex flex-row items-center justify-between p-2">
                    <h1>
                      Orang Tampan
                    </h1>
                    <img
                      src="assets\Dropdown.png"
                      className="w-5 h-3"
                    ></img>
                  </div>
                </button>
                <button
                  className="text-md text-black bg-white rounded-lg hover:scale-105 duration-300"
                >

                  <div className="flex flex-row items-center justify-between p-2">
                    <h1>
                      qissa@ristek.cs.ui.ac.id
                    </h1>
                    <img
                      src="assets\Dropdown.png"
                      className="w-5 h-3"
                    ></img>
                  </div>
                </button>
                <button
                  className="text-md text-black bg-white rounded-lg hover:scale-105 duration-300"
                >

                  <div className="flex flex-row items-center justify-between p-2">
                    <h1>
                      Project Manager
                    </h1>
                    <img
                      src="assets\Dropdown.png"
                      className="w-5 h-3"
                    ></img>
                  </div>
                </button>
                <button
                  className="text-md text-black bg-white rounded-lg hover:scale-105 duration-300"
                >

                  <div className="flex flex-row items-center justify-between p-2">
                    <h1>
                      icha@ristek.cs.ui.ac.id
                    </h1>
                    <img
                      src="assets\Dropdown.png"
                      className="w-5 h-3"
                    ></img>
                  </div>
                </button>
                <button
                  className="text-md text-black bg-white rounded-lg hover:scale-105 duration-300"
                >

                  <div className="flex flex-row items-center justify-between p-2">
                    <h1>
                      Member
                    </h1>
                    <img
                      src="assets\Dropdown.png"
                      className="w-5 h-3"
                    ></img>
                  </div>
                </button>

              </div>

              <button
                className="w-auto m-4 mx-36 px-3 py-1 sm:px-5 text-md sm:text-lg text-white bg-gradient-to-b from-[#C44054] to-[#DB77A5] rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:scale-105 duration-300"
              >
                Create Event
              </button>

            </div>
          </div>
        </form>
      </div>
    </div>
  )

}

export default CreateEventCard;
