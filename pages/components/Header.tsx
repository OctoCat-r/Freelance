import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="relative bg-transparent h-16 flex items-center p-5  mt-5 md:justify-between w-full justify-end  ">
      <p className="font-poppins text-xl hidden md:block">Welcome Back!</p>
      <div className="rounded-full bg-gradient-to-t from-black to-[#27A897] p-[0.5] shadow-lg md:w-3/5 w-3/4 ">
        <div className="flex bg-[#0D1719] rounded-full p-3 w-full  gap-3 text-white items-center md:px-10 px-5">
          <Search />
          <input
            type="text"
            className="bg-transparent rounded-full px-4 w-full  font-poppins outline-none"
            placeholder="Search For Character"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
