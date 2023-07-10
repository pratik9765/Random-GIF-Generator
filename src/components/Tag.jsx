import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Spinner from './Spinner';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const[gif,setGif]=useState('');
  const[loading,setLoading]=useState('false');
  const[tag,setTag]=useState('');

  
  async function fetchData(){
    setLoading(true)
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const {data} = await axios.get(url);
    const  imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false)

  }

  useEffect(() => {
    fetchData();
  }, []);

  
  function clickHandler(){
    fetchData();  
  }

  function changeHandler(event){
    setTag(event.target.value)
  }


  return (
    <div className='w-1/2 bg-red-500 rounded-lg border mb-10 mt-5 border-black flex flex-col items-center gap-y-5 mt-[15px ]'>
    <h1 className='mt-[15px] text-2xl font-semibold underline uppercase'>Random {tag} Gif</h1>

    
      {loading ? (<Spinner></Spinner>) : (<img src={gif} alt="" width="450"/>)}

      <input type="text" className='w-10/12 py-1 text-lg text-center rounded-xl'
        onChange={changeHandler} value={tag} />
    

      <button onClick={clickHandler} className="w-10/12 py-2 mb-[20px] text-lg text-white
       bg-black font-semibold rounded-lg ">Generate Gif</button>
    </div>
  )
}

export default Tag;