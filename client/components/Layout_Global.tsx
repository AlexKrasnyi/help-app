import { FC } from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout_Global:FC<any> = ({children}) => {
  return (
    <>
      <Header /> 
			{children}
			<Footer />
    </>
  )
}
export default Layout_Global