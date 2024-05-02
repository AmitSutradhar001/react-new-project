const Header = () => {
  return (
    <>
      <div
        id="Head"
        className="flex w-full justify-center bg-[#F5F7FA] items-center gap-10 h-[599px]"
      >
        <div className=" w-[700px] flex flex-col justify-start items-center text-center lg:text-left lg:items-start pl-3">
          <h1 className="text-7xl w-xl font-semibold  text-[#4D4D4D]">
            Lessons and insights
            <span className="text-[#4CAF4F]"> from 8 years</span>
          </h1>
          <p className="pt-5 text-[#717171]">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="bg-[#4CAF4F] text-white font-medium w-32 h-14 mt-5 rounded-md">
            Register
          </button>
        </div>
        <div className="hidden lg:block">
          <img src="/secondImg.png" width={391} height={407} />
        </div>
      </div>

      <div
        id="client"
        className="flex flex-col text-center justify-center items-center"
      >
        <h1 className="text-[#4D4D4D] pt-5 text-5xl font-semibold">
          Our Clients
        </h1>
        <p className="text-[#717171] pt-3">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="flex flex-wrap pt-9 pb-9   justify-between items-center gap-24">
          <img src="/clients/img1.png" width="48px" height="48px" />
          <img src="/clients/img2.png" width="48px" height="48px" />
          <img src="/clients/img3.png" width="48px" height="48px" />
          <img src="/clients/img4.png" width="48px" height="48px" />
          <img src="/clients/img5.png" width="48px" height="48px" />
          <img src="/clients/img6.png" width="48px" height="48px" />
          <img src="/clients/img3.png" width="48px" height="48px" />
        </div>
      </div>

      <div
        id="Community"
        className="flex flex-col text-center justify-center items-center"
      >
        <div className="w-[512] h-[88] pt-5">
          <h1 className="text-5xl text-[#4D4D4D] font-semibold">
            Manage your entire community
          </h1>
          <h1 className="text-5xl text-[#4D4D4D] font-semibold">
            in a single system
          </h1>
          <p className="text-[#717171] pt-5 font-normal">
            Who is Nextcent suitable for?
          </p>
        </div>
        <div className="flex mt-10 flex-wrap justify-center items-center gap-24">
          <div className="flex flex-col justify-center items-center max-w-[299px] flex-wrap">
            <img src="/mambarship.png" width={65} height={56} />
            <h2 className="text-3xl text-[#4D4D4D] bold px-10 font-semibold py-2 pb-0">
              Membership Organisations
            </h2>
            <p className="p-5 text-[#717171]">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="flex flex-col justify-center items-center max-w-[299px] flex-wrap">
            <img src="/national.png" width={65} height={56} />
            <h2 className="text-3xl text-[#4D4D4D] bold px-10 font-semibold py-2 pb-0">
              National Associations
            </h2>
            <p className="p-5 text-[#717171]">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="flex flex-col justify-center items-center max-w-[299px] flex-wrap">
            <img src="/club.png" width={65} height={56} />
            <h2 className="text-3xl text-[#4D4D4D] bold px-10 font-semibold py-2 pb-0">
              Clubs And Groups
            </h2>
            <p className="p-5 text-[#717171]">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
