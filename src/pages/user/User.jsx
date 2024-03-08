import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import "./User.css";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className="user">
      <div className="user-title-container">
        <h1 className="user-title">Edit User </h1>
        <Link to="/new-user">
          <button className="user-add-btn">Create</button>
        </Link>
      </div>
      <div className="user-container">
        <div className="user-show">
          <div className="user-show-top">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="user-show-img"
            />
            <div className="user-show-top-title">
              <span className="user-show-top-username">Anna Becker</span>
              <span className="user-show-top-job-title">Software Engineer</span>
            </div>
          </div>
          <div className="user-show-bottom">
            <span className="user-show-bottom-title">Account Details</span>
            <div className="user-show-info">
              <PermIdentity className="user-show-icon" />
              <span className="user-show-bottom-job">annabeck99</span>
            </div>
            <div className="user-show-info">
              <CalendarToday className="user-show-icon" />
              <span className="user-show-bottom-job">22.08.1998</span>
            </div>
            <span className="user-show-bottom-title">Contact Details</span>
            <div className="user-show-info">
              <PhoneAndroid className="user-show-icon" />
              <span className="user-show-bottom-job">+91 94430 43983</span>
            </div>
            <div className="user-show-info">
              <MailOutline className="user-show-icon" />
              <span className="user-show-bottom-job">annabeck99@gmail.com</span>
            </div>
            <div className="user-show-info">
              <LocationSearching className="user-show-icon" />
              <span className="user-show-bottom-job">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="user-update">
          <span className="user-update-title">Edit</span>
          <form className="user-update-form">
            <div className="user-update-left">
              <div className="user-update-item">
                <label>Username</label>
                <input
                  type="text"
                  className="user-update-input"
                  placeholder="annabeck99"
                />
              </div>
              <div className="user-update-item">
                <label>Fullname</label>
                <input
                  type="text"
                  className="user-update-input"
                  placeholder="Anna Becker"
                />
              </div>
              <div className="user-update-item">
                <label>Email</label>
                <input
                  type="text"
                  className="user-update-input"
                  placeholder="annabeck99@gmail.com"
                />
              </div>
              <div className="user-update-item">
                <label>Phone </label>
                <input
                  type="text"
                  className="user-update-input"
                  placeholder="+91 94430 43983"
                />
              </div>
              <div className="user-update-item">
                <label>Address </label>
                <input
                  type="text"
                  className="user-update-input"
                  placeholder="New York | USA"
                />
              </div>
            </div>
            <div className="user-update-right">
              <div className="user-update-upload">
                <img
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                  className="user-update-img"
                />
                <label htmlFor="file">
                  <Publish className="user-update-icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="update-btn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
