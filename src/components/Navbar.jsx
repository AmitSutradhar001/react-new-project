const Navbar = () => {
  return (
    <div className=" flex h-[84px] bg-[#F5F7FA] text-center items-center justify-between w-auto  ">
      <div className=" flex justify-center ml-14">
        <img src="/navbarLogo.png" width={35} height={24} />
        <h2 className="font-bold text-black">CodeHomies</h2>
      </div>
      <div className=" md:flex justify-between gap-7 hidden">
        <p>Home</p>
        <p>Service</p>
        <p>Feature</p>
        <p>Product</p>
        <p>Testimonial</p>
        <p>FAQ</p>
      </div>
      <div className="flex justify-center gap-3 mr-14">
        <button className="px-7 py-2 text-[#4CAF4F] font-semibold  rounded-md hover:bg-[#4CAF4F] hover:text-white focus:bg-[#4CAF4F] focus:text-white">
          Login
        </button>
        <button
          autoFocus
          className="px-7 py-2 text-[#4CAF4F] font-semibold  rounded-md hover:bg-[#4CAF4F] hover:text-white focus:bg-[#4CAF4F] focus:text-white outline-none"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
