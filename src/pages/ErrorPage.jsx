import { useRouteError, NavLink, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const handleNavigate = () =>{
    navigate(-1);
  }

  if (error.status === 404) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-gradient-to-b from-black to-gray-900">
        
        <div className="max-w-2xl space-y-6">
          
          <figure className="flex justify-center">
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 Error"
              className="w-full max-w-lg rounded-xl"
            />
          </figure>

          <h1 className="text-4xl font-bold text-white">
            Oops! Page Not Found 🚫
          </h1>

          <p className="text-gray-600 text-lg">
            The page you’re looking for doesn’t exist or may have been removed.
          </p>

          {/* <NavLink
            to="/"
            className="inline-block mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl shadow-md hover:bg-red-700 transition-all duration-300 hover:scale-105"
          >
            Go Back Home
          </NavLink> */}

          <button onClick={handleNavigate} className="inline-block mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl shadow-md hover:bg-red-700 transition-all duration-300" >
            Go Back 
          </button>

        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center text-2xl font-semibold">
      Something went wrong...
    </div>
  );
};

export default ErrorPage;
