import { UserButton, useUser } from "@clerk/clerk-react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Button } from "./ui/button"


export default function Header() {
  const { isSignedIn } = useUser();

  return (
    <header className="header">
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <div className="user-section">
          {isSignedIn ? <Link to="/dashboard">DashBoard</Link> : null}
        </div>
      </nav>

      <div className="logo">
        <Link to="/">MyLogo</Link>
      </div>

      <div className="user-section">
        {isSignedIn ? (
          <UserButton />
        ) : (
          <div className="">
            <Button >
              <Link to="/auth/signin">Sign in</Link>
            </Button>
            
          </div>
        )}
      </div>
    </header>
  );
}
