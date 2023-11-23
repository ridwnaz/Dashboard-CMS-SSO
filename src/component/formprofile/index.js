export default function FormProfile () {
    return(
        <div className="hero-formadmin">
            <div className="vector">
                <img src="/assets/logo/ID Card-amico.png" width={240} />
            </div>
            <div className="wrapper-formadmin">
                <form >
                    <div className="wrapper-content-formadmin">
                        <div className="text-form">Change Data Username ?</div>
                        <div>
                            <label className="label" htmlFor="nama" id="nama">Add Name</label>
                            <br/>
                            <input className="input" type="text" name="nama"/>
                        </div>
                        <div>
                            <label className="label" htmlFor="username" id="username">Add Username</label>
                            <br/>
                            <input className="input" type="text" name="username"/>
                       </div>
                       <input type="submit" value="Update New Username" className="btn-submitadmin"/>
                       </div>
                </form>
            </div>     
        </div>
    )
}