import React , {useState} from 'react';
const Register = () => {
    const [msg,setMsg]=useState("")
    const handleClick=()=>{
        setMsg("Registered successfully!! Start your journey!! ")
    }
    return (
        <div className='main'>
            
            <div className="title">Start your all Travelling & Transporting here!</div>
            <div className="form">
                <div className='i1'>
                    <input type="text" required></input>
                    <span></span>
                    <label>Username</label>
                </div>
                <div className='i1'>
                    <input type="text" required></input>
                    <span></span>
                    <label>Email</label>
                </div>
                <div className='i1'>
                    <input type="text" required></input>
                    <span></span>
                    <label>Password</label>
                </div>
                <div className='i1'>
                    <input type="text" required></input>
                    <span></span>
                    <label>Reenter Password</label>
                </div><br/>
                <div className='gender'>
                    Gender : <input type="radio" name='Gender'></input>
                    <label>Male</label>
                    <input type="radio" name='Gender'></input>
                    <label>Femlale</label>
                    <input type="radio" name='Gender'></input>
                    <label>Others</label>
                </div><br/><br/>
            
                <button className='btn1' onClick={handleClick} ><a href="/login" style={{textDecoration:'none',color:'white'}}>Register</a></button><br></br>
                <div className="title-2">{msg}</div>
            </div>
        </div>
    );
}

export default Register;