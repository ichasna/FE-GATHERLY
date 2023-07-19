import { useState } from "react";
import toast from "react-hot-toast";

function RegisterCard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const registerInfo = {
      username: username,
      password: password,
    };
    console.log(registerInfo);
    fetch(`http://localhost:5000/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerInfo),
    })
      .then((response) => console.log(response))
      .catch((error) => {
        console.error(error);
        toast.error("Error!");
      });
    toast.success("User added!");
  };

  const clearInput = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center p-4 w-[280px] sm:w-[380px] lg:w-[400px] bg-[#171B21] text-white border border-[#404040] rounded-2xl">
        <p className="text-xl sm:text-2xl lg:text-3xl mt-5">
          Create your account
        </p>
        <div className="w-10/12">
          <form className="mt-10">
            <div className="">
              <label htmlFor="email" className="block text-xs lg:text-md">
                Email address
              </label>
              <input
                type="email"
                // onChange={(e) => setEmail(e.currentTarget.value)}
                placeholder="qissa@ristek.cs.ui.ac.id"
                className="block w-full placeholder-[#4E5A6E] placeholder:text-sm sm:placeholder:p-1 bg-transparent border border-[#404040] rounded-md mt-1 p-1"
              />
            </div>

            <div className="mt-3">
              <label htmlFor="text" className="block text-xs lg:text-md">
                Username
              </label>
              <input
                type="text"
                onChange={(e) => setUsername(e.currentTarget.value)}
                value={username}
                placeholder="caralmira"
                className="block w-full placeholder-[#4E5A6E] placeholder:text-sm sm:placeholder:p-1 bg-transparent border border-[#404040] rounded-md mt-1 p-1"
              />
            </div>

            <div className="mt-3">
              <label htmlFor="password" className="block text-xs lg:text-md">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => setPassword(e.currentTarget.value)}
                value={password}
                placeholder="*****"
                className="block w-full placeholder-[#4E5A6E] placeholder:text-sm sm:placeholder:p-1 bg-transparent border border-[#404040] rounded-md mt-1 p-1"
              />
            </div>

            <div className="mt-8 lg:mt-10 text-center">
              <button
                type="button"
                onClick={() => {
                  handleSubmit()
                  clearInput()
                }}
                className="px-3 py-2 sm:px-5 text-white text-md sm:text-lg lg:text-xl bg-gradient-to-b from-[#C44054] to-[#DB77A5] hover:from-pink-500 hover:to-yellow-500 hover:scale-105 duration-300 rounded-md"
              >
                Sign up
              </button>
            </div>

            <div className="w-full text-center mt-8 lg:mt-10">
              <span className="text-xs lg:text-sm">
                Have an account?{" "}
                <a href="/login" className="text-[#03B3D7] hover:underline">
                  Login
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterCard;
