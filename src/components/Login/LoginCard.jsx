import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function LoginCard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    const loginInfo = {
      username: username,
      password: password,
    };

    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((response) => response.text())
      .then((data) => {
        if (data.includes("Login successful.")) {
          toast.success("Login successful!");
          navigate("/dashboard");
        } else if (data.includes("Cannot find user.")) {
          toast.error("Cannot find user.");
        } else if (data.includes("Password incorrect.")) {
          toast.error("Password incorrect.");
        } else {
          toast.error("An error occurred.");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("An error occurred.");
      });
  };

  const clearInput = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center p-6 w-[260px] sm:w-[310px] lg:w-[350px] bg-[#171B21] text-white border border-[#404040] rounded-2xl">
        <p className="text-xl sm:text-2xl lg:text-3xl mt-2 sm:mt-3 lg:mt-5">
          Log in
        </p>
        <div className="w-11/12">
          <form className="mt-6 lg:mt-8" onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="username" className="block text-xs lg:text-md">
                Username
              </label>
              <input
                type="string"
                onChange={(e) => setUsername(e.currentTarget.value)}
                value={username}
                placeholder="qissa"
                className="block w-full placeholder-[#4E5A6E] placeholder:text-sm md:placeholder:p-1 bg-transparent border border-[#404040] rounded-md mt-1 p-1"
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
                className="block w-full placeholder-[#4E5A6E] placeholder:text-sm md:placeholder:p-1 bg-transparent border border-[#404040] rounded-md mt-1 p-1"
              />
            </div>

            <div className="mt-4 lg:mt-6 text-center">
              <button
                type="submit"
                className="px-3 py-1 sm:px-5 text-md sm:text-lg text-white bg-gradient-to-b from-[#C44054] to-[#DB77A5] rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:scale-105 duration-300"
              >
                Login
              </button>
            </div>

            <div className="mt-4 lg:mt-6 w-full text-center">
              <span className="text-xs lg:text-sm">
                New to Gatherly?{" "}
                <a href="/register" className="text-[#03B3D7] hover:underline">
                  Sign up
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
