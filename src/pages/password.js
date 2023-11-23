import FormPassword from "@/component/formpassword"
import Link from "next/link"

export default function Password () {
    return(
        <>
        <main>
            <div className="hero-content">
            <div className="container-content">
                <div className="wrapper-content">
                        <div className="text-content">
                            <div>Change Data Admin</div>
                        </div>
                        <div className="link">
                            <Link href="/">Dashboard</Link> / Change Data Admin Password                 
                        </div>
                   <FormPassword/> 
                </div>
            </div>
        </div>
        </main>
        </>
    )
}