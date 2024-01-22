import React from "react";
export default function Login() {
  return (
    <div
      className="register flex w-full h-screen  justify-center items-center "
    >
      <div className="w-11/12 lg:w-4/12 bg-white p-4  flex justify-center items-start ">
        <div className="w-3/4">
          <img src="/img/Group.svg" className='h-14' alt="logo" />
          <div className="text-left pt-2  font-bold text-[#007460] text-[48px]  tracking-[0] leading-[62.4px] whitespace-nowrap">
            Hello
          </div>
          <div className="text-3xl pb-2 font-bold text-[#070606]  text-left  leading-8 ">
            Let`s get started
          </div>
          <div>
            <p className="dis text-left pb-2">
              Log in by entering your Mobile Number or your Email or Create new
              account if you are new user.
            </p>
          </div>
          <div className="mb-2">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-bold text-gray-900 text-left"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>

          <div className="Group11557 w-full flex flex-row justify-center items-center">
            <div
              className="Line45"
              style={{
                width: 180,
                height: 0,
                border: "0.50px #FF4300 solid",
              }}
            ></div>
            <div
              className="Or px-2  "
              style={{
                color: "#FF4300",
                fontSize: 16,
                fontFamily: "Quicksand",
                fontWeight: "700",
                wordWrap: "break-word",
              }}
            >
              Or
            </div>
            <div
              className="Line46"
              style={{
                width: 186,
                height: 0,
                border: "0.50px #FF4300 solid",
              }}
            ></div>
          </div>
          <div className="my-4">
            <label
              htmlFor="email"
              className="block  text-sm font-bold text-gray-900 text-left"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <button
            type="button"
            className="text-white bg-[#FF4300] w-full hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center dark:focus:ring-[#3b5998]/55 "
          >
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
}
