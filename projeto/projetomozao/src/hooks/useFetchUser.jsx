import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const useFetchUser = (username) => {
    const { isLoading, error, data } = useQuery('fetchUser', async () => {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data; 
    });
  
    return data;
  };

export default useFetchUser;