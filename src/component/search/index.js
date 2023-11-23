import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Search () {
    return(
        <>
        <div className="hero-search">
            <div className="container-search">
                <form>
                    <input type="text" id="search" placeholder="Search Data . . ." name="search"/>
                    <button><FontAwesomeIcon icon={faSearch}/></button>
                </form>
            </div>
        </div>
        </>
    )
}