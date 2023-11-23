import FormEdit from "@/component/formedit"
import Link from "next/link"

export default function Edit () {
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
                   <FormEdit/> 
                </div>
            </div>
        </div>
        </main>
        </>
    )
}