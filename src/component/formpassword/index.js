export default function FormPassword () {
    return(
        <div className="hero-formadmin">
            <div className="vector">
                <img src="/assets/logo/My Password-amico.png" width={250}/>
            </div>
            <div className="wrapper-formadmin">
                <form >
                    <div className="wrapper-content-formadmin">
                        <div className="text-form">Change Data Password ?</div>
                        <div>
                            <label className="label" id="passwordlama">Add Old Password</label>
                            <br/>
                            <input className="input" type="text" name="passwordlama"/>
                        </div>
                        <div>
                            <label className="label" id="passwordbaru">Add New Password</label>
                            <br/>
                            <input className="input" type="password" name="passwordbaru"/>
                       </div>
                       <input type="submit" value="Add New Password" className="btn-submitadmin"/>
                       </div>
                </form>
            </div>     
        </div>
    )
}