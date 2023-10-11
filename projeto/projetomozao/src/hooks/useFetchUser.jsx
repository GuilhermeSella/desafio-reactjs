import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const useFetchUser = async (user)=>{

    const [userData, setUserData] = useState();

    const {isloading, error, data} = useQuery('fetchUser', async()=>{
        await axios.get(`https://api.github.com/users/${user}`).then(res=>setUserData(res.data))
    })

    return userData
}

export default useFetchUser;