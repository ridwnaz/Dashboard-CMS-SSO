import Link from "next/link"
import Table from "@/component/tabeluser"
import Search from "@/component/search"
import ModalCom from "@/component/modal"

export default function Daftar () {
    return(
        <>
        <main>
            <div className="hero-content">
                <div className="container-content">
                    <div className="wrapper-content">
                        <div className="text-content">
                            <div>User Data's</div>
                        </div>
                        <div className="link">
                            <Link href="/">Dashboard</Link> / User Data's               
                        </div>
                        <div className="search">
                            <Search/>
                        </div>
                        <Table/>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}