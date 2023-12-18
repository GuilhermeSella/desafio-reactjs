import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';


const useFetchRepos = (user)=>{

    
    const {data} = useQuery("fetchRepos", async()=>{
        const response = await axios.get(`https://api.github.com/users/${user}/repos`)
        return response.data;
    })

    return data;

}

export default useFetchRepos;
