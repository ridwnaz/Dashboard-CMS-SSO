import Link from "next/link";
import ModalComp from "./formmodal";

export default function ModalPage () {
    return(
        <>
        <main>
            <div className="hero-content">
                <div className="container-content">
                    <div className="wrapper-content">
                        <div className="link">
                            <Link href="/daftar">Daftar User</Link> / Modal form
                        </div>
                        <ModalComp/>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}