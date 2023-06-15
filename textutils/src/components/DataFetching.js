import React,{useState,useEffect} from 'react';
import axios from 'axios';

function DataFetching(){
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then(res=>{
            setPosts(res);
        }).catch(err=>{
            console.log(err);
        })
    },[])
    return(
        <div>
        <h1>DataFetching Demo</h1>
        <ol>
        {
            posts.map(post=>
                <li key={post.id}>{post.name}</li>
            )
        }
        </ol>
        </div>
    )
}

export default DataFetching;