import { useState } from "react";

function DropdownProfile({ name }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen ? (
        <>
          <button
            onClick={() => {
              toggleDropdown();
            }}
          >
            <div className="flex w-[120px] h-[40px] p-0px 2px justify-center items-center ml-auto mr-6 rounded-10px border border-solid border-[#404040] bg-[#1A1E23] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] rounded-xl">
              <div className="flex w-[82px] h-[40px] flex-col justify-center flex-shrink-0 text-white text-center font-dm-sans text-20 font-normal">
                Opened
              </div>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.1192 16.5193C18.6116 17.027 17.7884 17.027 17.2808 16.5193L13 12.2386L8.71924 16.5193C8.21156 17.027 7.38844 17.027 6.88076 16.5193C6.37308 16.0117 6.37308 15.1885 6.88076 14.6809L12.0808 9.48086C12.5884 8.97318 13.4116 8.97318 13.9192 9.48086L19.1192 14.6809C19.6269 15.1885 19.6269 16.0117 19.1192 16.5193Z"
                  fill="#767676"
                />
              </svg>
            </div>
          </button>
          <div className="bg-white">
            <li>Profile</li>
            <li>Logout</li>
          </div>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              toggleDropdown();
            }}
          >
            <div className="flex w-[120px] h-[40px] p-0px 2px justify-center items-center ml-auto mr-6 rounded-10px border border-solid border-[#404040] bg-[#1A1E23] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] rounded-xl">
              <div className="flex w-[82px] h-[40px] flex-col justify-center flex-shrink-0 text-white text-center font-dm-sans text-20 font-normal">
                {name}
              </div>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.88076 9.48086C7.38844 8.97318 8.21156 8.97318 8.71924 9.48086L13 13.7616L17.2808 9.48086C17.7884 8.97318 18.6116 8.97318 19.1192 9.48086C19.6269 9.98854 19.6269 10.8117 19.1192 11.3193L13.9192 16.5193C13.4116 17.027 12.5884 17.027 12.0808 16.5193L6.88076 11.3193C6.37308 10.8117 6.37308 9.98854 6.88076 9.48086Z"
                  fill="#767676"
                />
              </svg>
            </div>
          </button>
        </>
      )}
    </>
  );
}

export default DropdownProfile;
