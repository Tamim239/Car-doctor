import { Outlet } from "react-router-dom"
import { Footer } from "../Shared/Footer"
import { Nav } from "../Shared/Nav"

export const MainLayout = () => {
  return (
    <div>
      <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
