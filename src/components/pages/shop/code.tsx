import Image from "next/image";
import React from "react";

const code = () => {
  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      style={{ opacity: 1 }}
    >
      <div className="bg-white rounded-2x1 w-full max-w-lg shadow-2x1 overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-gray-50 to-white">
          <h3 className="text-xl font-semibold text-gray-900">
            Customize Your Order
          </h3>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-x w-5 h-5 text-gray-600"
              aria-hidden="true"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          <div className="flex gap-4 items-start">
            <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100 shadow-sm">
              <Image
                alt="Sukoon"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover transition-transform duration-300 hover: scale-105"
                sizes="100vw"
                srcset="/ next/image?url=https%3A%2F%2Fserver.vlada.store%2Fuploads%2Fimage- 1771193257636-561398867.jpg&w=640&q=75 640w, / next/image?url=https%3A%2F%2Fserver.vlada.store%2Fuploads%2Fimage-1771193257636-561398867.jpg&w=750&q=75 750w, / next/image?url=https%3A%2F%2Fserver.vlada.store%2Fuploads%2Fimage-177 1193257636-561398867.jpg&w=828&q=75 828w, next/image?url=https%3A%2F%2Fserver.vlada.store%%2Fuploads%2Fimage-1771193257636-561398867.jpg&w=1080&q=75 1080w, / next/image?url=https%3A%2F%2Fserver.vlada.store%2Fuploads%2Fimage-1771 193257636-561398867.jpg&w=1200&q=75 1200w, / next/image?url=https%3A%2F%2Fserver.vlada.store%2Fuploads%2Fimage-1771193257636-561398867.jpg&w=1920&q=75 1920w, / next/image?url=https%3A%2F%2Fserver.vlada.store%2Fuploads%2Fimage-177 1193257636-561398867.jpg&w=2048&q=75 2048w, next/image?url=https%3A%2F%2Fserver.vlada.store%２Fuploads%２Fimage-１７７１１９３２５７６３６－５６１３９８８６７．jpg&w=３８４０&q=７５ ３８４０w"
                src="/ next/image?url=https%3A%２Ｆ％２Ｆserver．vlada．store％２Ｆuploads％２Ｆimage－１７７１１９３２５７６３６－５６１３９８８６７．jpg&w=３８４０&q=７５"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent",
                }}
              />
            </div>
            <div className="flex-1 space-y-2">
              <h4 className="font-semibold text-lg text-gray-900 line-clamp-2">
                Sukoon
              </h4>
              <p className="text-sm text-gray-500 capitalize">two piece</p>
              <div className="flex gap-2 items-center">
                <p className="text-xl font-bold text-gray-900">3,200</p>
                <s className="text-sm text-gray-500" />
                3200 TK
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="font-medium text-gray-900">Select Options</h5>
            <div className="space-y-2">
              <p className="text-sm font-medium capitalize text-gray-700">
                {" "}
                Select size
              </p>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 text-sm rounded-full border transition-all duration-200 capitalize border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700">
                  XS
                </button>{" "}
                <button className="px-4 py-2 text-sm rounded-full border transition-all duration-200 capitalize border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700">
                  S
                </button>{" "}
                <button className="px-4 py-2 text-sm rounded-full border transition-all duration-200 capitalize border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700">
                  M
                </button>{" "}
                <button className="px-4 py-2 text-sm rounded-full border transition-all duration-200 capitalize border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700">
                  L
                </button>{" "}
                <button className="px-4 py-2 text-sm rounded-full border transition-all duration-200 capitalize border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700">
                  XL
                </button>{" "}
                <button className="px-4 py-2 text-sm rounded-full border transition-all duration-200 capitalize border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700">
                  2XL
                </button>{" "}
              </div>
              <p className="text-red-600 text-sm min-h-[1.5rem]"></p>
            </div>
          </div>
          <div className="space-y-3">
            <h5 className="font-medium text-gray-900">Quantity</h5>
            <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg w-fit">
              <button
                className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50"
                disabled
              >
                "
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-minus w-4 h-4 text-gray- 600"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                </svg>
              </button>
              <input
                className="w-12 text-center bg-transparent border-none outline-none font-semibold text-lg"
                type="text"
                value="1"
              />
              <button className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-plus w-4 h-4 text-gray-6 00"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-500">41 items available</p>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              disabled
              className="flex-1 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-200 bg-blue-200 text-white cursor-not-allowed"
              tabindex="0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-shopping-bag w-5 h-5"
                aria-hidden="true"
              >
                <path d="M16 10a4 4 0 0 1-8 0"></path>
                <path d="M3.103 6.034h17.794"></path>
                <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.21-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>{" "}
              </svg>
              Add to Cart{" "}
            </button>
            <button
              disabled
              className="px-6 py-3 rounded-1g font-medium flex items-center gap-2 transition-colors duration-200 bg-orange-200 text-white cursor-not-allowed"
              tabindex="0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-zap w-5 h-5"
                aria-hidden="true"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.6319.9-10.2a.5.5 0 0 1 .86.461-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.631-9.9 10.2a.5.5 0 0 1-.86-.4611.92-6.02A1 1 0 0 0 11 14Z"></path>{" "}
              </svg>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default code;
