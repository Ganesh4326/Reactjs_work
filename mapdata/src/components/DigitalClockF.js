import {useState,useEffect} from 'react';
const DigitalClockF = () =>
{
    const [time,setTime] = useState("");
    
    useEffect(() => {
        const t = setInterval(() => {
            const obj = new Date();
            const timenow = obj.getHours() + ":" + obj.getMinutes() + ":" + obj.getSeconds();
            setTime(timenow);
        }, 1000);

        return () =>
        {
            clearTimeout(t);
        }
    })
    
    
    return(
        <div>
            <h1>Time is : {time}</h1>
        </div>
    )
}
export default DigitalClockF;