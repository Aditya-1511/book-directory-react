import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './homepage.css';

function Homepage() {

  return (
    <div>
      <div className='container'>
        <h1>Welcome to Book Directory</h1>
        <p>Get yourself registered and you can read a lot of books.</p>
        If not registered ! <Link to='/signup'><Button >Register Now</Button></Link> &nbsp;
        Already registered ? <Link to='/login'><Button variant='success'>Login</Button></Link>
      </div>
    </div>
  );
}

export default Homepage;