import { Visibility } from "@mui/icons-material";
import "./WidgetSm.css";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSm-title">New Join Memebers</span>
      <div className="widgetSm-list">
        <li className="widgetSm-list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            className="widgetSm-img"
            alt=""
          />
          <div className="widgetSm-user">
            <span className="widgetSm-user-name">Anna Keller</span>
            <span className="widgetSm-user-title">Software Engineer</span>
          </div>
          <button className="widgetSm-button">
            <Visibility className="widgetSm-icon" />
            Display
          </button>
        </li>
        <li className="widgetSm-list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            className="widgetSm-img"
            alt=""
          />
          <div className="widgetSm-user">
            <span className="widgetSm-user-name">Anna Keller</span>
            <span className="widgetSm-user-title">Software Engineer</span>
          </div>
          <button className="widgetSm-button">
            <Visibility className="widgetSm-icon" />
            Display
          </button>
        </li>
        <li className="widgetSm-list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            className="widgetSm-img"
            alt=""
          />
          <div className="widgetSm-user">
            <span className="widgetSm-user-name">Anna Keller</span>
            <span className="widgetSm-user-title">Software Engineer</span>
          </div>
          <button className="widgetSm-button">
            <Visibility className="widgetSm-icon" />
            Display
          </button>
        </li>
        <li className="widgetSm-list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            className="widgetSm-img"
            alt=""
          />
          <div className="widgetSm-user">
            <span className="widgetSm-user-name">Anna Keller</span>
            <span className="widgetSm-user-title">Software Engineer</span>
          </div>
          <button className="widgetSm-button">
            <Visibility className="widgetSm-icon" />
            Display
          </button>
        </li>
        <li className="widgetSm-list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            className="widgetSm-img"
            alt=""
          />
          <div className="widgetSm-user">
            <span className="widgetSm-user-name">Anna Keller</span>
            <span className="widgetSm-user-title">Software Engineer</span>
          </div>
          <button className="widgetSm-button">
            <Visibility className="widgetSm-icon" />
            Display
          </button>
        </li>
      </div>
    </div>
  );
};

export default WidgetSm;
