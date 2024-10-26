"use client";

export const SearchBox = () => {
  return (
    <form className="absolute top-full right-0 z-[99] w-[280px] bg-white p-[25px] shadow">
      <input
        type="text"
        placeholder="এখানে লিখুন..."
        className="block w-full p-[10px] border text-sm outline-none"
      />
      <button
        type="submit"
        className="w-full block p-[10px] bg-primary-500 hover:bg-primary-700 duration-300 text-sm text-white mt-2 font-bold hover:shadow"
      >
        সার্চ করুন
      </button>
    </form>
  );
};
