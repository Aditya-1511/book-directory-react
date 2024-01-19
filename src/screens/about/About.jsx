import React from 'react';
import './about.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <div className='aboutContainer'>
                <h1>About Us</h1>
                <p><b>Book Directory</b> is basically an idea to keep a lot of books in one place and users will have an access to read the books. <br />
                    User can buy the book to get full access to the book and if the user does not want to buy the book then full access to the <br />
                    book will not be granted to the user. </p>
                <Link to='/signup'><Button variant='warning' type='submit'>Signup</Button></Link>  &nbsp;
                <Link to='/login'><Button variant='success' type='submit'>Login</Button></Link> <br />
            </div>
        </div>

    )
}

export default About
