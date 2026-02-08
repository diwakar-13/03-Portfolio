import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-6xl font-bold mb-4 text-[#30BCED]">404</h1>

      <h2 className="text-2xl font-semibold mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-400 mb-6 text-center">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-white text-black rounded-full font-semibold
                   hover:shadow-[0_0_25px_#ffffff] transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
