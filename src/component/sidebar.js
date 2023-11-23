import Link from "next/link"
import { Library } from "@fortawesome/fontawesome-svg-core"
import { faAlignLeft, faArrowRotateBack, faBackspace, faBackwardStep, faCircleArrowRight, faDashboard, faHouse, faStar, faUserCircle,faBars, faCancel, faX, faArrowRightFromBracket, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Sidebar () {
    return(
        <>
        <input type="checkbox" id="check"/>
        <label for="check">
             <FontAwesomeIcon icon={faBars} id="btn"/>
        </label>
        <div className="hero-sidebar">
            <div className="wrapper-sidebar">
                <div className="logo">
                    <Link href="/"><img src="/assets/logo/logo.png" alt="logo" width={65} /></Link>
                </div>
                <div className="text-sidebar">Menu</div>
                <div className="navbar-menu">
                    <div className="ul-1">
                        <Link href="/"><FontAwesomeIcon icon={faStar} className="icon"/>Dashboard</Link>
                    </div>
                    <div className="ul-2">
                            <div className="dropdown-btn"><FontAwesomeIcon icon={faUserCircle} className="icon"/>User Details<FontAwesomeIcon icon={faChevronRight} className="icon-row"/></div>
                        <div className="content">
                            <Link href="/daftar">User's Data</Link>
                            <Link href="/tambah">Add User Data</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}