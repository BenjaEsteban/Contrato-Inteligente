import { useContext } from "react";
import Navbar from "../../Components/Navbar"
import Inicio from "../../Components/Inicio"
import Valores from "../../Components/Valores"
import SobreNosotros from "../../Components/SobreNosotros"

function Home() {
    return (
        <>
            <Navbar inicio={"Inicio"} servicios={"Servicios"} nosotros={"Nosotros"} button={"Iniciar Sesión"}/>
            <Inicio />
            <Valores />
            <SobreNosotros />

        </>
    )
}

export default Home