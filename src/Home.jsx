import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-4'>
    {item.map((info) => (<>
    <div key={info.id} className='shadow-lg rounded-2xl flex flex-col justify-center items-center w-100 p-4'>
        <h2>{info.title}</h2>
        <img src={info.image} className='w-50'></img>
        <p>{info.price}</p>
        <button className='bg-blue-800 text-white rounded-xl uppercase p-4'>buy now</button>
      </div>
      </>
      ))}
    </div>
  );
}

export default Home