import React from "react";

const EditModal = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-10 ">
      <div className="text-white bg-black p-[20px] rounded-md flex flex-col justify-center items-center ">
        <h1 className="m-6 text-5xl">Edit Your Profile Picture</h1>
        <form className="flex justify-center items-center flex-col ">
          <div className="text-3xl justify-center items-center">
            <div className="m-2 flex flex-col">
              <input type="file" id="image" name="image" className="rounded" />
            </div>
          </div>
          <div>
            <button className="rounded-xl bg-[#a79b8e] w-[300px] h-[60px] text-white mt-4 mr-4  text-3xl">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-[#a79b8e] w-[300px] h-[60px] text-white mt-4 mr-4  text-3xl"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
