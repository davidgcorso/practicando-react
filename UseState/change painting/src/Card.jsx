import '../src/Card.css'
import image0 from "../src/images/the fallen angel.jpg"
import image1 from "../src/images/the scream.png"
import {useState} from "react";
const Card =() =>{
    const [name, setName] = useState("The Fallen Angel")
    const [image, setImage] = useState(image0)
   const change = () => {
    if (name==="The Fallen Angel"){
        setName("The Scream")
        setImage(image1)
    } else {
        setName("The Fallen Angel")
        setImage(image0)
    }
   }
return(
<figure>
    <img src={image} alt="painting" className="painting"/>
    <figcaption>{name}</figcaption>
    <button onClick={change}> Change Painting</button>
</figure>)

}

export default Card;