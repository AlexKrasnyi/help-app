import { FC } from "react"
import Heading from "./Heading"
import Navbar from "./Navbar"
import Auth from "./Auth"

const Header: FC = () => {
    return(
        <header>
        <Heading tag="h3" text="help"/>
        <Navbar/>
        <Auth/>
        </header>
    )
}

export default Header