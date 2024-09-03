import React from "react";

const Home = () => {
  return (
    <div>
      {/* //this div is for the whole first page */}
      <div className="bg-black text-white h-[100vh]  ">
        {/* //the next div is for the title */}
        <div className="flex justify-center text-6xl font-[] ">
          <h1>Unlock your vault</h1>
        </div>
        {/* the next div is for the image */}
        <div className="w-[50%] flex">
          <img src={gringotts} alt="gringotts bank" />

          {/* this next div is for the login funtionality */}
          <div className="flex justify-center ali">
            <form>
              <label>
                Username
                <input type="text" className="rounded-lg" />
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
