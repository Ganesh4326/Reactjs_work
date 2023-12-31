import React,{useState} from "react";
const UseStateEx = () =>
{
    const [name,setName] = useState("");
    const [college,setCollege] = useState("");
    const [about,setAbout] = useState("");

    const handleName=(e)=>{
        e.preventDefault();
        setName(e.target.value);
    }

    return(
        <div>
            <form>
                <input type="text" onChange={handleName} required/>
                <p>{name}</p>
                <input type="text" placeholder = "college Name" onChange = {(e)=>setCollege(e.target.value)} required/>
                <p>{college}</p>
                <input type = "about" onChange = {(e)=>setAbout(e.target.value)} required/>
                <p>{about}</p>
            </form>
        </div>
    )
}
export default UseStateEx;