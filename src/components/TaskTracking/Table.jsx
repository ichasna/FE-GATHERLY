function Table() {
  return (
    <table className="table-fixed w-full border-collapse border border-[#404040]">
      <thead>
        <tr>
          <th className="p-3 border border-[#404040]" colSpan={2}>
            <p className="text-white text-[15px] font-normal">Task</p>
          </th>
          <th className="p-3 border border-[#404040]" colSpan={1}>
            <p className="text-white text-[15px] font-normal">Due Date</p>
          </th>
          <th className="p-3 border border-[#404040]" colSpan={1}>
            <p className="text-white text-[15px] font-normal">PIC</p>
          </th>
          <th className="p-3 border border-[#404040]" colSpan={2}>
            <p className="text-white text-[15px] font-normal">Description</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border border-[#404040] col-span-2">
          <div className="flex flex-row justify-start items-center p-4">
            <svg
              className="w-5 h-5 flex-shrink-0"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C15.51 0 20 4.48 20 10C20 15.51 15.51 20 10 20C4.48 20 0 15.51 0 10C0 4.48 4.48 0 10 0ZM7.06 8.03C6.77 7.73 6.29 7.73 6 8.02C5.7 8.32 5.7 8.79 6 9.08L9.47 12.57C9.61 12.71 9.8 12.79 10 12.79C10.2 12.79 10.39 12.71 10.53 12.57L14 9.08C14.15 8.94 14.22 8.75 14.22 8.56C14.22 8.36 14.15 8.17 14 8.02C13.7 7.73 13.23 7.73 12.94 8.03L10 10.98L7.06 8.03Z"
                fill="#F7B500"
              />
            </svg>
            <span className="text-[20px] text-[#919191] font-bold ml-3">
              Planning
            </span>
          </div>
        </tr>
        <tr className="border border-[#404040]">
          <div className="flex flex-row justify-start items-center p-4">
            <svg
              className="w-5 h-5 flex-shrink-0"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C15.52 0 20 4.49 20 10L19.9962 10.2798C19.8478 15.6706 15.4264 20 10 20C4.49 20 0 15.52 0 10C0 4.49 4.49 0 10 0ZM10 7.21C9.8 7.21 9.61 7.29 9.47 7.43L6 10.92C5.85 11.06 5.78 11.25 5.78 11.44C5.78 11.64 5.85 11.83 6 11.98C6.3 12.27 6.77 12.27 7.06 11.97L10 9.02L12.94 11.97C13.23 12.27 13.71 12.27 14 11.98C14.3 11.68 14.3 11.21 14 10.92L10.53 7.43C10.39 7.29 10.2 7.21 10 7.21Z"
                fill="#F7B500"
              />
            </svg>
            <span className="text-[20px] text-[#919191] font-bold ml-3">
              Execution
            </span>
          </div>
        </tr>
        <tr className="border border-[#404040]">
          <div className="flex flex-row justify-start items-center p-4">
            <svg
              className="w-5 h-5 flex-shrink-0"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C15.52 0 20 4.49 20 10L19.9962 10.2798C19.8478 15.6706 15.4264 20 10 20C4.49 20 0 15.52 0 10C0 4.49 4.49 0 10 0ZM10 7.21C9.8 7.21 9.61 7.29 9.47 7.43L6 10.92C5.85 11.06 5.78 11.25 5.78 11.44C5.78 11.64 5.85 11.83 6 11.98C6.3 12.27 6.77 12.27 7.06 11.97L10 9.02L12.94 11.97C13.23 12.27 13.71 12.27 14 11.98C14.3 11.68 14.3 11.21 14 10.92L10.53 7.43C10.39 7.29 10.2 7.21 10 7.21Z"
                fill="#F7B500"
              />
            </svg>
            <span className="text-[20px] text-[#919191] font-bold ml-3">
              Post Event
            </span>
          </div>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
