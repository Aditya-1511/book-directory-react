import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './signup.css';

function Signup() {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [aboutUs, setAboutUs] = useState('')
  const [gender, setGender] = useState('')
  const [dob, setDob] = useState('')
  const [profileImage, setProfileImage] = useState('')

  function signUp() {
    axios.post('http://localhost:5001/api/v1/user/signup',
      { email: email, firstName: firstName, lastName: lastName, phoneNo: phoneNo, password: password, confirmPassword: confirmPassword, aboutUs: aboutUs, gender: gender, dob: dob, profileImage: profileImage }, {
      headers: {
        "authorization": "Basic Ym9vay1kaXJlY3Rvcnk6Ym9vay1kaXJlY3Rvcnk=",
        "content-type": "multipart/form-data",
        "accept": "application/json"
      }
    }).then((response) => {
      console.log(response, "---------------signupresponse")
    })
      .catch(error => {
        console.log(error, "-----------------------error");
      })
  }
  console.log(profileImage);

  return (
    <div>
      <div className='signupContainer'>
        <h1>Signup</h1>
        <form className='signupForm'>
          <label>First Name</label>
          <input type="text" placeholder="First Name" maxLength='10' onChange={(e) => { setFirstName(e.target.value) }}></input>
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" maxLength='10' onChange={(e) => { setLastName(e.target.value) }}></input>
          <label>Email</label>
          <input type="text" placeholder="Enter Email" maxLength='30' onChange={(e) => { setEmail(e.target.value) }}></input>
          <label>Password</label>
          <input type="password" maxLength='15' placeholder="Password" onChange={(e) => { setPassword(e.target.value) }}></input>
          <label>Confirm Password</label>
          <input type="password" maxLength='15' placeholder="Confirm Password" onChange={(e) => { setConfirmPassword(e.target.value) }}></input>
          <label>Date of Birth</label>
          <input type="date" placeholder="Date of Birth" onChange={(e) => { setDob(e.target.value) }}></input>
          <label>Gender</label>
          <input type="text" maxLength='6' placeholder="Gender" onChange={(e) => { setGender(e.target.value) }}></input>
          <label>Phone Number</label>
          <input type="text" maxLength='10' placeholder="Phone Number" onChange={(e) => { setPhoneNo(e.target.value) }}></input>
          <label>About Us</label>
          <input type="textfield" maxLength='30' placeholder="Tell us about yourself (Max. 30 characters allowed)" onChange={(e) => { setAboutUs(e.target.value) }}></input>
          <label>Choose Profile Image</label>
          <input type="file" accept='image/*' onChange={(e) => { setProfileImage(e.target.value) }}></input>
          <Link to='/login'><Button variant='success' type='submit' onClick={signUp}>Signup</Button></Link> <br />
          Already registered ?  <Link to='/login'>Login</Link>
        </form>
      </div>
    </div>

  );
}

export default Signup;