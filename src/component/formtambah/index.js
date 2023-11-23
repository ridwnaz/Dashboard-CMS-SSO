import { faAdd, faCirclePlus, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FormTambah () {
    return (
        <>
        <div className="wrapper-form">
            <form >
                <div className="wrapper-content-form">
                    <div className="text-form"><FontAwesomeIcon icon={faSquarePlus}/>  Add Data New ?</div>
                    <hr/>
                    <div>
                        <label className="label">Username</label>
                        <br/>
                        <input className="input"/>
                    </div>
                    <div>
                        <label className="label">Password</label>
                        <br/>
                        <input className="input"/>
                    </div>
                    <div>
                        <label className="label">Uraian</label>
                        <br/>
                        <textarea rows={10} cols={50} className="input"/>
                    </div>
                    <div>
                        <label className="label">Hak Akses</label>
                        <br/>
                        <input className="input"/>
                    </div>
                    <input type="submit" value="Add Data" className="btn-submit"/>
                </div>
            </form>
        </div>
        </>
    )
}