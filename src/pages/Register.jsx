import React,{ useState } from 'react';
import './Styles/Register.css';

function Register() {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidate, setEmailValidate] = useState('');
  const [userValidate, setUserValidate] = useState('');
  const [passwordValidate, setPasswordValidate] = useState('');
  
  function userName(e){
    setName(e.target.value);  
  }
  function Email(e){
    setEmail(e.target.value);
  }
  function Password(e){
    setPassword(e.target.value);
  }

  function storeData(){
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    if(username === "" && password === "" && email === ""){
      setUserValidate(<h5 className='msg3'>Username is empty</h5>)
      setPasswordValidate(<h5 className='msg5'>Password is empty</h5>)
      setEmailValidate(<h5 className='msg2'>Email is empty</h5>);
    } 
    else if(!regEx.test(email)){
      setEmailValidate(<h5 className='msg2'>Email is not valid</h5>);
    } 
    else if(password.length < 8){
      setPasswordValidate(<h5 className='msg6'>Password shoud be at least of 8 characters</h5>)
    } 
    else {
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      setName('');
      setPassword('');
      setEmail('');
      alert("Your account is succesfully registered. Refresh your page to see your Username");
    }
  }
  return (
    <div>
      <div className='inputs'>
        <h2 className='word'>Sign In</h2>
        <input type="text" placeholder="Username..." value={username} onChange={userName}/>
        {userValidate}
        <br />
        <input type="text" placeholder="Email..." value={email} onChange={Email}/>
        {emailValidate}
        <br />
        <input type="password" placeholder="Password..." value={password} onChange={Password}/>
        {passwordValidate}
        <br />
        <button className='regi-btn' onClick={storeData}>Register</button>
      </div>
    </div>
  )
}

export default Register

