function Resources() {
  const AddResourceButton = () => {
    console.log('Test')
  }

  const Resource1Button = () => {
    console.log('Test')
  }

  const Resource2Button = () => {
    console.log('Test')
  }

  const Resource3Button = () => {
    console.log('Test')
  }

  const Resource4Button = () => {
    console.log('Test')
  }

  return (
    <div className="flex w-[918px] h-[175px] p-[20px] md:p-[27px] flex-col justify-center items-start gap-[13px] flex-shrink-0 rounded-xl border border-solid border-[#404040] bg-[#1A1E23]">
      <div className="flex w-[231px] h-[42px] flex-col justify-center items-start flex-shrink-0 text-white font-dm-sans text-[25px] font-semibold">
        Resources
      </div>
      <div className="flex items-start gap-[21px]">
        <button onClick={AddResourceButton} className="hover:scale-110 duration-300">
          <img src="assets/Add-1.svg" alt="Image" className="w-68 h-62" />
        </button>
        <button onClick={Resource1Button} className="hover:scale-110 duration-300 flex h-[62px] py-[12px] px-[16px] justify-center items-center gap-[6px] rounded-xl bg-[#FFF]">
          <img src="assets/Clip.svg" alt="Image" className="w-26 h-26" />
          <div className="flex flex-col w-[101px] h-[33px] justify-center text-black text-center font-dm-sans text-[18px] font-normal underline">
            Team Data
          </div>
        </button>
        <button onClick={Resource2Button} className="hover:scale-110 duration-300 flex h-[62px] py-[12px] px-[16px] justify-center items-center gap-[6px] rounded-xl bg-[#FFF]">
          <img src="assets/Clip.svg" alt="Image" className="w-26 h-26" />
          <div className="flex flex-col w-[101px] h-[33px] justify-center text-black text-center font-dm-sans text-[18px] font-normal underline">
            Audit
          </div>
        </button>
        <button onClick={Resource3Button} className="hover:scale-110 duration-300 flex h-[62px] py-[12px] px-[16px] justify-center items-center gap-[6px] rounded-xl bg-[#FFF]">
          <img src="assets/Clip.svg" alt="Image" className="w-26 h-26" />
          <div className="flex flex-col w-[101px] h-[33px] justify-center text-black text-center font-dm-sans text-[18px] font-normal underline">
            Project 3
          </div>
        </button>
        <button onClick={Resource4Button} className="hover:scale-110 duration-300 flex h-[62px] py-[12px] px-[16px] justify-center items-center gap-[6px] rounded-xl bg-[#FFF]">
          <img src="assets/Clip.svg" alt="Image" className="w-26 h-26" />
          <div className="flex flex-col w-[101px] h-[33px] justify-center text-black text-center font-dm-sans text-[18px] font-normal underline">
            Our Drive
          </div>
        </button>
      </div>
    </div>
  );
}

export default Resources;
