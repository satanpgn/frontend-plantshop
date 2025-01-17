import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  // get user data from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  // logout function
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand text-danger fw-bold" href="#">
            Bookshop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Products
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Fashion
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Electronics
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Gadgets
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex gap-2" role="search">
              {user ? (
                <>
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Welcome,{user.firstName}!
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <Link class="dropdown-item" to="/profile">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item" to="/changepassword">
                          Change password
                        </Link>
                      </li>
                      <li>
                        <button onClick={handleLogout} class="dropdown-item">
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-outline-danger"
                    type="submit"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                  <button
                    className="btn btn-outline-success"
                    type="submit"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
