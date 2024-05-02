const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center lg:justify-start lg:items-start flex-wrap bg-[#263238] text-white">
      <div className="flex flex-col pl-10 py-10 pr-36">
        <img src="/footerImg.png" width={40} height={30} className="ml-16 " />
        <p className="ml-16 pt-5">Copyright © 2020 Nexcent ltd.</p>
        <p className="ml-16 pt-2 ">All rights reserved</p>
        <div className="flex flex-wrap ml-16 pt-5 gap-2">
          <img src="/fImg/1.png" width={35} height={24} />
          <img src="/fImg/2.png" width={35} height={24} />
          <img src="/fImg/3.png" width={35} height={24} />
          <img src="/fImg/4.png" width={35} height={24} />
        </div>
      </div>
      <div className="flex flex-wrap justify-start px-10 py-10 flex-col">
        <h2 className="text-2xl font-semibold pb-1">Company</h2>
        <p className="pt-1">About us</p>
        <p className="pt-1">Blog</p>
        <p className="pt-1">Contact us</p>
        <p className="pt-1">Pricing</p>
        <p className="pt-1">Testimonials</p>
      </div>
      <div className="flex flex-wrap justify-start px-10 py-10 flex-col">
        <h2 className="text-2xl font-semibold pb-1">Support</h2>
        <p className="pt-1">Help center</p>
        <p className="pt-1">Terms of service</p>
        <p className="pt-1">Legal</p>
        <p className="pt-1">Privacy policy</p>
        <p className="pt-1">Status</p>
      </div>
      <div className="flex flex-wrap justify-start px-10 py-10 flex-col">
        <h2 className="text-2xl font-semibold pb-1">Stay up to date</h2>
        <div className="p-2 mt-2 rounded-lg w-60 flex flex-wrap bg-gray-600 justify-center items-center">
          <input
            className="bg-gray-600 placeholder:text-[#D9DBE1]"
            placeholder="Your email address"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="35"
            height="28"
            className=""
          >
            <path
              d="M96 249.6l116.6 51.3L269.8 416 416 96 96 249.6zm132.1 46.9l155.7-166.2-114.6 248.9-41.1-82.7zm153.7-168.2l-165 157.1L134 249l247.8-120.7z"
              fill="#f4f2f2"
              className="color000 svgShape"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
