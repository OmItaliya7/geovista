import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Country from "./pages/Country";
import Contact from "./pages/Contact";
import { RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import CountryIndv from "./components/UI/CountryIndv";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();


const App = () =>{


  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/country",
          element: <Country />
        },
        {
          path: "/country/:name",
          element: <CountryIndv />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ]
    }
  ])



  

  return(
    <QueryClientProvider client={queryClient}>
      <div className="bg-black min-h-screen font-urbanist">
      <RouterProvider router={router} /> 
      </div>
    </QueryClientProvider>
    
  )
}

export default App;