import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { _Api } from '../../services/Api';
import Url from '../../services/BaseUrl'
import './login.css';
import { Link } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [successMessage, setSuccessMessage] = useState()

    function userLogin() {
        let req = {
            email: email, password: password
        }
        console.log("*****", (email), password)
        _Api(Url.USER_LOGIN.method, Url.USER_LOGIN.url, req)
            .then(resp => {
                console.log("resp", resp)
                let access = ''
                access = resp.responseData.accessToken;
                localStorage.setItem('accessToken', access)


            }).catch(err => {
                console.log(err);

            });
    }
    return (
        <div>
            <div className='loginContainer'>
                <h1>Login</h1>
                <Form>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Password" onChange={(e) => { setEmail(e.target.value) }} />
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} /> <br />
                    <Link to='/login'><Button variant='success' type='submit' onClick={() => userLogin()}>Login</Button></Link> <br />
                    New to Book Directory ?  <Link to='/signup'>Signup</Link>
                    <span className='success'>{successMessage ? successMessage : ''}</span>
                </Form>
            </div>
        </div>
    );
}




export default Login;