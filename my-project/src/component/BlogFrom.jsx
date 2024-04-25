import 
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const BlogFrom = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <div>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 ">
          <div className="bg-transparent p-8 shadow-md rounded-md  shadow-white flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-white mb-6">
              Registration Form
            </h1>
            <div className="divider divider-info"></div>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-white text-sm font-medium mb-2">
                    Input Blog Title :
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="input input-bordered input-error w-full border-gray-300 rounded-md p-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="datepicker"
                    className="block text-white text-sm font-medium mb-2">
                    Input Date of publish:
                  </label>
                  <DatePicker
                    id="datepicker"
                    className="input input-bordered input-error w-full border-gray-300 rounded-md p-2"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="tag"
                    className="block text-white text-sm font-medium mb-2">
                    Input Blog Tag :
                  </label>
                  <input
                    type="text"
                    id="Tag"
                    name="tag"
                    className="input input-bordered input-error w-full border-gray-300 rounded-md p-2"
                    required
                  />
                </div>

                {/* <div>
                  <PlateJS />
                </div> */}
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogFrom;
