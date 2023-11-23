import FormProfile from "@/component/formprofile"
import Link from "next/link"

export default function Profile () {
    return (
        <>
        <main>
            <div className="hero-content">
                <div className="container-content">
                    <div className="wrapper-content">
                        <div className="text-content">
                            <div>Change Data Admin</div>
                        </div>
                        <div className="link">
                            <Link href="/">Dashboard</Link> / Change Data Profile Username                
                        </div>
                        <FormProfile/>   
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}