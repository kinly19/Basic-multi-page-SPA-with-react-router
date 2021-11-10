import { Route } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page </h1>
        {/* we can nest Routes inside of other components */}
      <Route path='/welcome/new-user'>
        <p>Welcome New User</p>
        {/* or output another component*/}
      </Route>
    </section>
  );
};

export default Welcome; 

