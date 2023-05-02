import { useState } from "react"
import Contexto from "./Contexto"

const Provider = ({children}) => {
    const valores = [
       { titulo: "aprenda react",
        texto: "Un profesor para ti",
        boton1: "profesor",
        foto: "chayanne.jpg",
        nombre: "Chayanne",
        boton2: "lugar",
        direccion: "Plaza de toros"},
        { titulo: "aprenda react",
        texto: "Un profesor para ti",
        boton1: "profesor",
        foto: "juanClaudio.jpg",
        nombre: "Jean Claude Van Damme",
        boton2: "lugar",
        direccion: "Ring"},
        { titulo: "aprenda react",
        texto: "Un profesor para ti",
        boton1: "profesor",
        foto: "chuck.jpg",
        nombre: "Chuck Norris",
        boton2: "lugar",
        direccion: "Everywhere"},
        { idioma:0}

    ]
    const [alumno, setAlumno] = useState(valores)
    return(
        <Contexto.Provider value={{alumno, setAlumno}}>
        {children}
        </Contexto.Provider>
)
    }

    export default Provider