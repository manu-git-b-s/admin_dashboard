import { userData } from "../../../dummyData";
import Chart from "../../components/charts/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        title="User Analytics"
        data={userData}
        grid
        dataKey="Active User"
      />
      <div className="home-widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};
export default Home;
