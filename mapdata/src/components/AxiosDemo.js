import React, {useState, useEffect} from 'react';
import axios from 'axios';

function AxiosDemo() {
	const [posts, setPosts] = useState([]);

	useEffect(()=> {
		axios.get("https://jsonplaceholder.typicode.com/posts")
		.then(res => {
			setPosts(res.data);
		}).catch(err => { 
			console.log(err); 
		})				
	}, [])

	return(
		<div>
			<h1> Data Fetching Demo </h1>
				<ol>
				{
					posts.map( post => {
						return(
							<ul>
							<li key={post.id}>{post.id} </li>
							<li>{post.title}</li>
							</ul>
						)
					})
				}
				</ol>	
		</div>
	);
}

export default AxiosDemo;


