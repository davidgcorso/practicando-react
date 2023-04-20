import Card from './Card.jsx'
import './App.css';
import { useState } from 'react';

function App() {
let array = [
  {brand:"Gibson Les Paul Studio",
  price: 1500,
  color:"Black",
  image: "https://therockstore.com.ar/wp-content/uploads/2021/10/1621280477524.jpg"},
  {brand:"Harley Benton SC550II",
  price: 500,
  color:"Paradise Flame Maple",
  image: "https://img.audiofanzine.com/images/u/product/normal/harley-benton-sc-550-plus-emg-300920.jpg"},
  {brand:"PRS SE 245 Standard",
  price: 1000,
  color:"Grey Black",
  image: "https://media.sweetwater.com/api/i/q-82__ha-e452fc0d60531e4c__hmac-c62558e5528788734bd94f8b0c5fb7ec5e10a09d/images/items/750/SE245GB-large.jpg"},
  {brand:"Heritage Elite",
  price: 10000,
  color:"Gloss Black",
  image: "https://images.reverb.com/image/upload/s--ZEw9w-g---/a_0/f_auto,t_large/v1660413943/rhi13pnz9o3lzexe8z9s.png"}
]

const [total,setTotal] = useState(0)
  return (
    <>
    <h1 className='title'>Single Cut Guitars</h1>
    <p className='price'>Total : ${total}</p>
    <div className='container'>
{/*     <Card brand={array[0].brand} price={array[0].price} color={array[0].color} image={array[0].image} setTotal={setTotal}/>
    <Card brand={array[1].brand} price={array[1].price} color={array[1].color} image={array[1].image} setTotal={setTotal}/>
    <Card brand={array[2].brand} price={array[2].price} color={array[2].color} image={array[2].image} setTotal={setTotal}/>
    <Card brand={array[3].brand} price={array[3].price} color={array[3].color} image={array[3].image} setTotal={setTotal}/> */}

    {array.map((value, index) => <Card brand={array[index].brand} price={array[index].price} color={array[index].color} image={array[index].image} setTotal={setTotal} key={index}/>)} {/* Using .map function to do the same */}
    </div>
    </>
  );
}

export default App;
