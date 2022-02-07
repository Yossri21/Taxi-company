import { FaHashtag } from "react-icons/fa";
const Contents = () => {
  return (
    <div className="container mx-auto py-24 px-12 space-y-20">
      <div className=" flex flex-row justify-center">
        <div>
          <img src="/image_01-5.jpg" />
        </div>
        <div className="mt-12">
          <img src="/image_04-5.jpg" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center space-y-6">
        <FaHashtag className="w-12 h-12 text-amber-600  p-1" />
        <p className="text-3xl font-light text-gray-600">
          I invite you to try our service and I personally guarantee you will
          <br />
          have a fully satisfied experience.
        </p>
        <p className="text-xl text-gray-500">ANNA CRIADO - CHAIRMAN & CEO</p>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="col-span-1 space-y-6 py-12 text-center px-8">
          <p className="text-3xl font-medium text-gray-600">
            Exceptional Customer Service
          </p>
          <p className="text-2xl font-light text-gray-500">
            By offering exceptional service with no detail unattended, we have
            been fortunate enough to have developed into the leading provider of
            ground transportation in the area. Our goal is to make your travels
            safe, effortless and on schedule.
          </p>
          <button
            type="button"
            className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
          >
            CONTACT US
          </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          <div className="col-span-1 row-span-2">
            <img src="/image_10-1.jpg" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/image_10-2.jpg" />
          </div>
          <div className="col-span-1 row-span-1">
            <img src="/image_03-2.jpg" />
          </div>
        </div>
      </div>
      <div className="text-center space-y-3">
        <p className="text-xl font-medium text-amber-600">WHAT WE OFFER</p>
        <p className="text-4xl font-light text-gray-600">
          See What We Can Do for You
        </p>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        <div
          className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
          style={{
            backgroundImage: `url(/image_01-4.jpg)`,
          }}
        >
          <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
            <p className="text-white text-2xl font-medium p-8">
              AIRPORT TRANSFER
            </p>
          </div>
        </div>
        <div
          className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
          style={{
            backgroundImage: `url(/image_02-4.jpg)`,
          }}
        >
          <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
            <p className="text-white text-2xl font-medium p-8">
              WORLDWIDE TRANSPORTATION
            </p>
          </div>
        </div>
        <div
          className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
          style={{
            backgroundImage: `url(/image_02-4.jpg)`,
          }}
        >
          <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
            <p className="text-white text-2xl font-medium p-8">
              CORPORATE TRAVEL
            </p>
          </div>
        </div>
        <div
          className="col-span-1 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
          style={{
            backgroundImage: `url(/image_04-4.jpg)`,
          }}
        >
          <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
            <p className="text-white text-2xl font-medium p-8">
              CHARTER SERVICE
            </p>
          </div>
        </div>
        <div
          className="col-span-1 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
          style={{
            backgroundImage: `url(/image_05-2.jpg)`,
          }}
        >
          <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
            <p className="text-white text-2xl font-medium p-8">
              SPECIAL EVENT LIMOUSINE
            </p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className=" text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
      >
        CONTACT US
      </button>
    </div>
  );
};
export default Contents;
