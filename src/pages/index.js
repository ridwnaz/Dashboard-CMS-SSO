import CardDashCom from "@/component/card";

export default function Home() {
  return (
    <>
    <main>
        <div className="hero-content">
                <div className="container-content">
                    <div className="wrapper-content">
                      <div className="text-content">
                        <div>Dashboard</div>
                      </div>
                        <div className="link">
                          All Data Show In This Page:
                        </div>
                        <CardDashCom/>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}
