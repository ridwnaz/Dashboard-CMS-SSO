import Link from "next/link"
import FormTambah from "@/component/formtambah"

export default function Tambah () {
    return(
    <>
    <main>
        <div className="hero-content">
            <div className="container-content">
                <div className="wrapper-content">
                    <div className="text-content">
                        <div>Form Add Data & Update Data</div>
                    </div>
                    <div className="link">
                        <Link href="/">Dashboard</Link> / Form Add Data & Update Data                
                    </div>
                    <FormTambah/>
                </div>
            </div>
        </div>
    </main>
    </>
    )
}