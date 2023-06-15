import { useState,useEffect } from "react"

const FetchAPI = () =>
{
    const [data,setData] = useState([]);
    useEffect(() =>
    {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => setData(posts.data))
        .catch(err=>
            {
                console.log(err);
            })
    },[]);
    return(
        
        data.map((item)=>
        {
            
            return(
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </div>
            )
        })
    )
}
export default FetchAPI;