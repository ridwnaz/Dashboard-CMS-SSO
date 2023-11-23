import Header from "./header"
import Sidebar from "./sidebar"

export default function Layout ({children}) {
    return(
        <>
        <Sidebar/>
        <Header/>
        {children}
        </>
    )
}