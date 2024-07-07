import { Link } from "react-router-dom";
import "../App.css";

const HomePage = () => {
  return(
    <div>
      <h1>Hello World</h1>
      <Link to='/users/1'>Link To User #1's Profile</Link>
    </div>
  );
};

export default HomePage;