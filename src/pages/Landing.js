const Landing = (props) => {
  return (
    <div>
      <h1 style={{color: 'lightblue'}}>React Routing</h1>
      {props.children}
    </div>
  );
};

export default Landing;