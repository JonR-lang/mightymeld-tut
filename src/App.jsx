function App() {
  return (
    <>
      <div className="bg-red-500 text-white">
        I changed my mind about my custom header
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
        <span className="ml-3 text-sm font-medium text-slate-900 ">
          Toggle me
        </span>
      </label>
      <div className="rounded-full w-16 h-16">
        <img
          src="https://i.pravatar.cc/100?img=5"
          alt="avatar"
          className="rounded-full"
        />
      </div>
      <div className="bg-red-500 text-white"></div>
      <div>
        <span id="ProgressLabel" className="sr-only">
          Loading
        </span>
        <span
          role="progressbar"
          aria-labelledby="ProgressLabel"
          aria-valuenow={80}
          className="block rounded-full bg-slate-200"
        >
          <span
            className="block h-4 rounded-full bg-sky-600 text-center text-[10px]/4"
            style={{
              width: "80%",
            }}
          >
            <span className="font-bold text-white"> 80% </span>
          </span>
        </span>
      </div>
    </>
  );
}
export default App;
