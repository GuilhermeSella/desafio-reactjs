import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';


const useFetchRepos = (user)=>{
    const [dataRepos, setDataRepos ] = useState()

    const {data} = useQuery("fetchRepos", async()=>{
        await axios.get(`https://api.github.com/users/${user}/repos`).then((res)=>setDataRepos(res.data))
    })

    return dataRepos;

}

export default useFetchRepos;
