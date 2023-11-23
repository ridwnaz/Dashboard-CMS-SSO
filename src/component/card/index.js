import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Table from "../tabeluser";

export default function CardDashCom () {
    return(
        <>
        <div className="hero-card">
            <div className="container-card">
                <div className="wrapper-card">

                    <div className="card-a">
                        <div className="container-card-a">
                            <div className="wrapper-card-a-one">
                                <div className="text-hero-card">Jumlah User </div>
                                <div className="text-second-card">1.200K</div>
                                <div className="btn-see-more">
                                    <Link href="/">Selengkapnya <FontAwesomeIcon icon={faChevronRight}/></Link>
                                </div>
                            </div>
                        </div>
                        <div className="container-card-a-two">
                            <div className="wrapper-card-a-two">
                                <div className="text-hero-card">Jumlah Password </div>
                                <div className="text-second-card">1.200K</div>
                                <div className="btn-see-more-two">
                                    <Link href="/">Selengkapnya <FontAwesomeIcon icon={faChevronRight}/></Link>
                                </div>
                            </div>
                        </div> 
                    </div>

                    <div className="card-b">
                        <div className="container-card-b">
                            <div className="wrapper-card-b-one">
                                <div className="text-hero-card">Jumlah Uraian </div>
                                <div className="text-second-card">1.200K</div>
                           </div>
                        </div>
                        <div className="container-card-b">
                            <div className="wrapper-card-b-two">
                                <div className="text-hero-card">Jumlah Hak Akses </div>
                                <div className="text-second-card">1.200K</div>
                            </div>
                        </div>
                    </div>

                    <div className="card-c">
                        <div className="container-card-c">
                            <div className="wrapper-card-c">
                                <div className="text-hero-card">Admin Information </div>
                           </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <br/>
        <div className="all-data">All Data :</div>
        <Table/>
        </>
    )
}