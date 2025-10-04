import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import SignInPage from "./auth/sign-in/signin.jsx";
import Home from "./pages/home.jsx";
import Dashboard from "./components/dashbord/dashbord.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import Header from "./components/header.jsx";

// 👇 Clerk publishable key from .env file
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
console.log("PUBLISHABLE_KEY:", PUBLISHABLE_KEY);
if (!PUBLISHABLE_KEY) {
  throw new Error(
    "Missing Clerk Publishable Key! Please add VITE_CLERK_PUBLISHABLE_KEY in your .env file."
  );
}

// 👇 Define routes
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
    path: "/auth/signin",
    element: <SignInPage />,
  },
  {
    path: "/header",
    element: <Header />,
  },
]);

// 👇 Render App with ClerkProvider
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
