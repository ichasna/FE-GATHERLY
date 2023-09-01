function Team() {
  const AddMemberButton = () => {
    console.log('Test')
  }

  const Member1Button = () => {
    console.log('Test')
  }

  const Member2Button = () => {
    console.log('Test')
  }

  const Member3Button = () => {
    console.log('Test')
  }

  return (
    <div className="flex w-[918px] h-[135px] py-[19px] px-[25px] flex-col justify-center items-start gap-[5px] flex-shrink-0 rounded-xl border border-solid border-[#404040] bg-[#1A1E23]">
      <div className="flex w-[867px] h-[42px] flex-col justify-center flex-shrink-0 text-white font-dm-sans text-[25px] font-semibold">
        Team Members
      </div>
      <div className="flex w-[859px] items-end gap-[71px]">
        <button onClick={AddMemberButton} className="hover:scale-110 duration-300 flex justify-center items-center gap-[10px]">
          <img
            className="flex items-start gap-10"
            src="assets/Add.svg"
            alt="Your Alt Text"
          />
          <div className="flex w-[100px] h-[26px] flex-col justify-center text-white font-dm-sans text-[15px] font-normal">
            Add Members
          </div>
        </button>
        <button onClick={AddMemberButton} className="hover:scale-110 duration-300 flex justify-center items-center gap-[10px]">
          <img
            className="flex items-start gap-10"
            src="assets/Member-1.svg"
            alt="Your Alt Text"
          />
          <div className="flex h-[39px] flex-col items-start gap-neg-9">
            <div className="flex w-[100px] h-[26px] items-start flex-col justify-center flex-shrink-0 text-white font-dm-sans text-[15px] font-normal">
              Abby Marvel
            </div>
            <div className="flex w-100 h-26 flex-col justify-center flex-shrink-0 text-gray-600 font-dm-sans text-xs font-normal">
              Programmer
            </div>
          </div>
        </button>
        <button onClick={AddMemberButton} className="hover:scale-110 duration-300 flex justify-center items-center gap-[10px]">
          <img
            className="flex items-start gap-10"
            src="assets/Member-2.svg"
            alt="Your Alt Text"
          />
          <div className="flex h-[39px] flex-col items-start gap-neg-9">
            <div className="flex w-[100px] h-[26px] items-start flex-col justify-center flex-shrink-0 text-white font-dm-sans text-[15px] font-normal">
              Carissa Almira
            </div>
            <div className="flex w-100 h-26 flex-col justify-center flex-shrink-0 text-gray-600 font-dm-sans text-xs font-normal">
              Designer
            </div>
          </div>
        </button>
        <button onClick={AddMemberButton} className="hover:scale-110 duration-300 flex justify-center items-center gap-[10px]">
          <img
            className="flex items-start gap-10"
            src="assets/Member-1.svg"
            alt="Your Alt Text"
          />
          <div className="flex h-[39px] flex-col items-start gap-neg-9">
            <div className="flex w-[100px] h-[26px] items-start flex-col justify-center flex-shrink-0 text-white font-dm-sans text-[15px] font-normal">
              Bang dap
            </div>
            <div className="flex w-100 h-26 flex-col justify-center flex-shrink-0 text-gray-600 font-dm-sans text-xs font-normal">
              Programmer
            </div>
          </div>
        </button>
      </div>
    </div >
  );
}

export default Team;
