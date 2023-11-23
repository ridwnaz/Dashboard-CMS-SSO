import { faKey, faRightFromBracket, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Header () {
    return(
        <>
        <div className="hero-header">
            <div className="container-header">
            <div className="greeting-user">
                <div className="greeting-bold">Welcomeback, Admin !</div>
                <div className="greeting-medium">Welcomeback to CMS SSO</div>
            </div>

            <div className="profile-dropdown" >
                <div className="profile-admin"><img src="/assets/logo/image 5.svg" width={35}/></div>
                <div className="content-profile">
                    <div className="greeting-profile">Hello Admin !</div>
                    <Link href="/profile"><FontAwesomeIcon icon={faUserCircle} className="icon-dr"/>Profile</Link>
                    <Link href="/password"><FontAwesomeIcon icon={faKey}className="icon-dr"/>Ubah Password</Link>
                    <Link href="/"><FontAwesomeIcon icon={faRightFromBracket}className="icon-dr"/>Keluar</Link>
                </div>
            </div>
            </div>    
        </div>
        </>
    )
}