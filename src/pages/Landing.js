import { Link } from "react-router-dom";

const Landing = (props) => {
  return (
    <div>
      <h1 style={{color: 'lightblue'}}>React Routing</h1>
      {props.children}
      <button><Link to='/welcome'>Welcome Page</Link></button>
    </div>
  );
};

export default Landing;