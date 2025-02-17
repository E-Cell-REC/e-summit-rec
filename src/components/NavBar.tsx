import { useState } from "react";
import { useNavigate /*useSearchParams*/ } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/navlogo-dark.png";

const NavBar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="backdrop-blur-lg bg-gray-800 bg-opacity-25 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-2 lg:px-4">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div
              onClick={() => navigate("/")}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <img src={Logo} width={160} height={120} alt="logo" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="/about"
                className="text-white hover:text-purple-600 px-3 py-2 rounded-md text-lg font-medium"
              >
                About
              </a>
              <a
                href="/events"
                className="text-white hover:text-purple-600 px-3 py-2 rounded-md text-lg font-medium"
              >
                Events
              </a>
              <a
                href="/agenda"
                className="text-white hover:text-purple-600 px-3 py-2 rounded-md text-lg font-medium"
              >
                Agenda
              </a>
              <a
                href="/Speakers"
                className="text-white hover:text-purple-600 px-3 py-2 rounded-md text-lg font-medium"
              >
                Speakers
              </a>
              <a
                href="/sponsors"
                className="text-white hover:text-purple-600 px-3 py-2 rounded-md text-lg font-medium"
              >
                Sponsors
              </a>
              <a
                href="/contact"
                className="text-white hover:text-purple-600 px-3 py-2 rounded-md text-lg font-medium"
              >
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-purple-600"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen &&
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <>
                <div className="flex flex-col space-y-2" >
                  <a
                    href="/about"
                    className="text-white hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>
                  <a
                    href="/events"
                    className="text-white hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Events
                  </a>
                  <a
                    href="/agenda"
                    className="text-white hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Agenda
                  </a>
                  <a
                    href="/Speakers"
                    className="text-white hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Speakers
                  </a>
                  <a
                    href="/sponsors"
                    className="text-white hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sponsors
                  </a>
                  <a
                    href="/contact"
                    className="text-white hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </a>
                  </div>
                </>
            </div>
          </div>
        }
      </nav>
    </>
  );
};

export default NavBar;
