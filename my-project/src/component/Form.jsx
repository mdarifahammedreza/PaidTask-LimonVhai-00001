import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Form = () => {
  return (
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
                  First Name
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
                  htmlFor="lastName"
                  className="block text-white text-sm font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="input input-bordered input-error w-full border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-white text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input input-bordered input-error w-full border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-white text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="input input-bordered input-error w-full border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-white text-sm font-medium mb-2 ">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="input input-bordered input-error border-gray-300 w-full rounded-md p-2"
                  required
                />
              </div>
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
  );
};

export default Form;
