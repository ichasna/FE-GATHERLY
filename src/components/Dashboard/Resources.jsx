function Resources() {
  return (
    <div className="flex w-[918px] h-[175px] p-[20px] md:p-[27px] flex-col justify-center items-start gap-[13px] flex-shrink-0 rounded-xl border border-solid border-[#404040] bg-[#1A1E23]">
      <div className="flex w-[231px] h-[42px] flex-col justify-center items-start flex-shrink-0 text-white font-dm-sans text-[25px] font-semibold">
        Resources
      </div>
      <div className="flex items-start gap-[21px]">
        <img src="assets/Add-1.svg" alt="Image" className="w-68 h-62" />
        <div className="flex h-[62px] py-[12px] px-[16px] justify-center items-center gap-[6px] rounded-xl bg-[#FFF]">
          <img src="assets/Clip.svg" alt="Image" className="w-26 h-26" />
          <div className="flex flex-col w-[101px] h-[33px] justify-center text-black text-center font-dm-sans text-[18px] font-normal underline">
            Team Data
          </div>
        </div>
        <div className="flex h-[62px] py-[12px] px-[16px] justify-center items-center gap-[6px] rounded-xl bg-[#FFF]">
          <img src="assets/Clip.svg" alt="Image" className="w-26 h-26" />
          <div className="flex flex-col w-[101px] h-[33px] justify-center text-black text-center font-dm-sans text-[18px] font-normal underline">
            Audit
          </div>
        </div>
        <div className="flex h-[62px] py-[12px] px-[16px] justify-center items-center gap-[6px] rounded-xl bg-[#FFF]">
          <img src="assets/Clip.svg" alt="Image" className="w-26 h-26" />
          <div className="flex flex-col w-[101px] h-[33px] justify-center text-black text-center font-dm-sans text-[18px] font-normal underline">
            Project 3
          </div>
        </div>
        <div className="flex h-[62px] py-[12px] px-[16px] justify-center items-center gap-[6px] rounded-xl bg-[#FFF]">
          <img src="assets/Clip.svg" alt="Image" className="w-26 h-26" />
          <div className="flex flex-col w-[101px] h-[33px] justify-center text-black text-center font-dm-sans text-[18px] font-normal underline">
            Our Drive
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
