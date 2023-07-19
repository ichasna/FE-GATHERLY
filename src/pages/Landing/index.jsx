import Landing from "../../components/Landing";

function LandingPage() {
  return (
    <div className="flex flex-col lg:flex lg:flex-row-reverse lg:gap-16 justify-center items-center min-h-screen h-screen p-8 lg:p-16 bg-[#030C14] font-dm">
      <Landing />
    </div>
  );
}

export default LandingPage;
