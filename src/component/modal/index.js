import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquarePlus, faX } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function ModalCom () {
    const [showModal,setShowModal] = useState(false);

    const [isMobileSize,setIsMobileSize] = useState(false)
     useEffect (() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            setIsMobileSize(screenWidth < 480);
        }
        handleResize();

        //EventListener perubahan untuk perubahan Layar
        window.addEventListener('resize' , handleResize );

        //Membersihkan Event saat komponent di Lepas
        return () => {
            window.removeEventListener('resize', handleResize);
        };
     },[]);
    return(
        <>
        {
            isMobileSize ? <>
            {/* ini ukuran mobile */}
            <div>
                <a 
                className="btn-modal-mobile"
                onClick={()=>setShowModal(true)}>
                    <FontAwesomeIcon icon={faSquarePlus} className="iconm"/> Add New Data
                    </a>
            </div>
            {/* show POPUP MODAL UI MOBILE VER */}
            {/* say show if not present */}
            {
                showModal? (
                    <div className="hero-form-modal">
            <form className="wrapper-form-modal">
                <div className="container-content-form-modal">
                    <div className="wrapper-text-form">
                        <div className="text-form-modal"> Add Data POP-UP</div>
                        <FontAwesomeIcon icon={faX} className="icon" onClick={()=> setShowModal(false)}/>
                    </div>
                    <div>
                        <label className="label-modal">Username</label>
                        <br/>
                        <input className="input-modal" type="text"/>
                    </div>
                    <div>
                        <label className="label-modal">Password</label>
                        <br/>
                        <input className="input-modal"/>
                    </div>

                    <div className="wrapper-label-2nd">
                    <div>
                        <label className="label-modal">Uraian</label>
                        <br/>
                        <textarea rows={6} cols={25}/>
                    </div>
                    <div className="label-hakakses">
                        <label className="label-modal">Hak Akses</label>
                        <br/>
                        <select id="akses" name="akses">
                            <option value="Terima">Terima</option>
                            <option value="Tolak">Tolak</option>
                       </select>
                    </div>
                    </div>
                    <input type="submit" value="Add New Data" className="btn-submit-modal"/>
                </div>
            </form>
        </div>
                ):null
            }
            </>:
                    <div className="bg">
            <div>
                <button 
                className="btn"
                onClick={()=>setShowModal(true)}>
                    <FontAwesomeIcon icon={faSquarePlus} className="iconm"/>Add New Data
                </button>
            </div>
             <div className="overlay"></div>
            {/* Show POPUP MODAL UI 1 */}
            {/* say show if not present */}
            {
            showModal? (
            <div className="hero-form-modal">
            <form className="wrapper-form-modal">
                <div className="container-content-form-modal">
                    <div className="wrapper-text-form">
                        <div className="text-form-modal"> Add Data POP-UP</div>
                        <FontAwesomeIcon icon={faX} className="icon" onClick={()=> setShowModal(false)}/>
                    </div>
                    <div>
                        <label className="label-modal">Username</label>
                        <br/>
                        <input className="input-modal" type="text"/>
                    </div>
                    <div>
                        <label className="label-modal">Password</label>
                        <br/>
                        <input className="input-modal"/>
                    </div>

                    <div className="wrapper-label-2nd">
                    <div>
                        <label className="label-modal">Uraian</label>
                        <br/>
                        <textarea rows={6} cols={25}/>
                    </div>
                    <div className="label-hakakses">
                        <label className="label-modal">Hak Akses</label>
                        <br/>
                        <select id="akses" name="akses">
                            <option value="Terima">Terima</option>
                            <option value="Tolak">Tolak</option>
                       </select>
                    </div>
                    </div>
                    <input type="submit" value="Add New Data" className="btn-submit-modal"/>
                </div>
            </form>
        </div>
            ) :null}
        </div>            
        }
        </>
    )
}

export default ModalCom;