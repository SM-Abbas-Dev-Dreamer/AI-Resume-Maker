import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import SignInPage from "./auth/sign-in/signin.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./components/dashbord/dashbord.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import Header from "./components/header.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// const router = createBrowserRouter([
//   {
//     element: <App />,
//     children: [
//       { path: "/dashboard", element: <Dashboard /> },
//     ],
//   },
//   { path: "/", element: <Home /> },
//   { path: "/auth/signin", element: <SignInPage /> },
//   { path: "/header", element: <Header /> },
// ]);
const router = createBrowserRouter([
  {
    path: "/",        
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
  {
    path: "/auth/signin", // Auth alag rakha hai (yahan Header nahi chahiye to alag hi rahega)
    element: <SignInPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
