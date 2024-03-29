import React from "react";

const CategoryCard = () => {
  return (
    <div>
      <div className="max-w-9/12 flex flex-col items-center text-center py-[5rem]">
        <div className="mb-12">
          <h2 className="font-montserrat text-2xl mb-2.5">EDITOR’S PICK</h2>
          <p className="font-montserrat text-sm text-[#737373]">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        <div className="flex gap-7 justify-between sm:justify-center flex-wrap sm:w-10/12">
          <div className="relative sm:w-10/12 sm:h-10/12 hover:shadow-lg object-fill">
            <img
              className="w-full h-full object-fill"
              src="/assets/home/editor-men.png"
            />
            <button className="absolute left-3 bottom-0 mb-4 px-16 py-3 font-bold tracking-normal bg-white text-black shadow-xl   hover:opacity-75 ">
              MEN
            </button>
          </div>
          <div className="w-[15rem] sm:w-10/12 sm:h-10/12 relative hover:shadow-lg">
            <img
              className="w-full h-full object-cover"
              src="/assets/home/editor-women.png"
            />
            <button className="absolute left-3 bottom-0 mb-4 px-16 py-3 font-bold tracking-normal bg-white text-black shadow-xl   hover:opacity-75 ">
              WOMEN
            </button>
          </div>

          <div className="flex flex-col gap-5 justify-between">
            <div className="relative hover:shadow-lg sm:size-[20rem]">
              <img
                className="sm:w-[20rem] sm:h-[20rem] w-[15rem] h-[15rem] object-cover sm:object-fill"
                src="/assets/home/editor-access.png"
              />
              <button className="absolute left-3 bottom-0 mb-4 px-6 py-3 font-bold tracking-normal bg-white text-black shadow-xl   hover:opacity-75 ">
                ACCESSORIES
              </button>
            </div>
            <div className="relative hover:shadow-lg sm:size-[20rem]">
              <img
                className="sm:w-[20rem] sm:h-[20rem] w-[15rem] h-[15rem] object-cover sm:object-fill"
                src="/assets/home/editor-kids.png"
              />
              <button className="absolute left-3 bottom-0 mb-4 px-6 py-3 font-bold tracking-normal bg-white text-black shadow-xl   hover:opacity-75 ">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
