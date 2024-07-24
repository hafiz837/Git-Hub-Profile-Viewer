import React, { useState } from 'react';
import axios from 'axios';


function Home() {
    let username="umair"
    let newdata;
    const token=`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`;
    const profileURL=`https://api.github.com/users/${username}`
    // const repoURL=`https://api.github.com/users/${username}/repos`
    // const follwersURL=`https://api.github.com/users/${username}/followers`
    // const followingURL=`https://api.github.com/users/${username}/following`
    const [newData,setNewData]=useState("hello")
  const fetchData=async ()=>{
    let data= await axios.get(profileURL,{
        headers:{
            Authorization:`token ${token}`
        }
    });
    newdata=data.data;
    setNewData(newdata.followers);
     console.log(newdata.followers);
  }
  return (
    <>
    <button onClick={fetchData} className='bg-yellow-200 px-4 py-2 cursor-pointer'>Get data</button>
    <div>This is My Home page</div>
    <h1>{newData}</h1>
    </>
  )
}

export default Home