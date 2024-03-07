import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">DashBoard</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item active">
              <LineStyle className="icon" />
              Home
            </li>
            <li className="sidebar-list-item">
              <Timeline className="icon" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <TrendingUp className="icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Quick Menu</h3>
          <ul className="sidebar-list">
            <Link to="/users">
              <li className="sidebar-list-item ">
                <PermIdentity className="icon" />
                Users
              </li>
            </Link>
            <li className="sidebar-list-item ">
              <Storefront className="icon" />
              Products
            </li>
            <li className="sidebar-list-item">
              <AttachMoney className="icon" />
              transactions
            </li>
            <li className="sidebar-list-item">
              <BarChart className="icon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Notifications</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <MailOutline className="icon" />
              Mail
            </li>
            <li className="sidebar-list-item">
              <DynamicFeed className="icon" />
              Feedback
            </li>
            <li className="sidebar-list-item">
              <ChatBubbleOutline className="icon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Staff</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <WorkOutline className="icon" />
              Manage
            </li>
            <li className="sidebar-list-item">
              <Timeline className="icon" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <Report className="icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
