import { Link } from "react-router-dom";
import "./Product.css";
import Chart from "../../components/charts/Chart";
import { productData } from "../../../dummyData";
import { Publish } from "@mui/icons-material";

const Product = () => {
  return (
    <div className="product">
      <div className="product-title-container">
        <h1 className="product-title">Product</h1>
        <Link to="/new-product">
          <button className="product-add-btn">Create</button>
        </Link>
      </div>
      <div className="product-top">
        <div className="product-top-left">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="product-top-right">
          <div className="product-info-right-top">
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="product-info-img"
            />
            <span className="product-name">Apple Airpods</span>
          </div>
          <div className="product-info-bottom">
            <div className="product-info-item">
              <div className="product-info-key">id:</div>
              <div className="product-info-value">123</div>
            </div>
            <div className="product-info-item">
              <div className="product-info-key">sales:</div>
              <div className="product-info-value">5123</div>
            </div>
            <div className="product-info-item">
              <div className="product-info-key">active:</div>
              <div className="product-info-value">yes</div>
            </div>
            <div className="product-info-item">
              <div className="product-info-key">in stock</div>
              <div className="product-info-value">no</div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <form className="product-form">
          <div className="product-form-left">
            <label>Product Name</label>
            <input type="text" placeholder="Apple AirPod" />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="product-form-right">
            <div className="product-upload">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="product-update-btn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
