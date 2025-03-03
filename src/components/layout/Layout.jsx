import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet, useLocation, useNavigation } from "react-router";
import { Loader } from "./Loader";
import { DetailLoader } from "./DetailLoader";


export const Layout = () => {
    const navigation = useNavigation();
    // console.log(navigation);
    const location = useLocation();
    
    if(navigation.state === "loading") return window.location.pathname.includes('/movie') ? <DetailLoader /> : <Loader/>
    return (
        <>
            <Header/>
            {/* {window.location.pathname.includes('/mdetail') ? <DetailLoader /> : <Loader/>} */}
            <Outlet/>
            <Footer/>
        </>
        
    )
}