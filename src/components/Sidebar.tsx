import {
  FaHome,
  FaUser,
  FaUsers,
  FaSearch,
  FaTrophy,
  FaRocket,
  FaCog,
  FaSignOutAlt,
  FaImages,
} from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { BiCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <aside className="sidebar" style={{ background: "#fff" }}>
      <div className="sidebar-logo">
        <span className="logo-text">μLearn</span>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li onClick={() => navigate("/")}>
            <FaHome />
            <span>Home</span>
          </li>
          <li onClick={() => navigate("/profile")}>
            <FaUser />
            <span>Profile</span>
          </li>
          <li onClick={() => navigate("/journey")}>
            <MdGroups />
            <span>μJourney</span>
          </li>
          <li onClick={() => navigate("/interest-groups")}>
            <FaUsers />
            <span>Interest Groups</span>
          </li>
          <li onClick={() => navigate("/learning-circle")}>
            <BiCircle />
            <span>Learning Circle</span>
          </li>
          <li onClick={() => navigate("/search")}>
            <FaSearch />
            <span>Search</span>
          </li>
          <li onClick={() => navigate("/leaderboard")}>
            <FaTrophy />
            <span>Leaderboard</span>
          </li>
          <li onClick={() => navigate("/launchpad")}>
            <FaRocket />
            <span>Launchpad</span>
          </li>
          <li onClick={() => navigate("/")}>
            <BiCircle />
            <span>Special Events</span>
          </li>
          <li onClick={() => navigate("/account-setting")}>
            <FaCog />
            <span>Account Setting</span>
          </li>
          <li onClick={() => navigate("/gallery")}>
            <FaImages />
            <span>Gallery</span>
          </li>
        </ul>
      </nav>
      <div className="sidebar-logout">
        <button>
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
      <footer className="sidebar-footer">
        <small>All Rights Reserved © μLearn Foundation 2025</small>
      </footer>
    </aside>
  );
}
