import { faClipboard, faClipboardList, faPen, faPenToSquare, faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import ModalCom from "../modal";

export default function Table() {
    // dummy simple Array User Data
    const dataUsers = [
        {
            id:1,
            username:"@TaylorSwift",
            password:"taylorgulung",
            uraian:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            hakakses:"Diterima"
        },
        {
            id:2,
            username:"@TheWeeknd",
            password:"theweekday",
            uraian:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            hakakses:"Diterima"
        },
        {
            id:3,
            username:"@ArianaGrande",
            password:"arianagranat",
            uraian:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            hakakses:"Diterima"
        },
        {
            id:4,
            username:"@LanaDelRey",
            password:"lanajatinangor",
            uraian:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            hakakses:"Diterima"
        },
        {
            id:5,
            username:"@Billieellish",
            password:"billiewongnganjuk",
            uraian:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            hakakses:"Diterima"
        },
        {
            id:6,
            username:"@TravisScott",
            password:"trapiiskoteng",
            uraian:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            hakakses:"Diterima"
        },
                {
            id:7,
            username:"@KendallJenner",
            password:"sendaljenner",
            uraian:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            hakakses:"Diterima"
        },
    ]

    //Pagination Table Data 
    const [currentPage,setCurrentPage] = useState(1);
    const recordsPerPage = 2;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = dataUsers.slice(firstIndex,lastIndex);
    const npage = Math.ceil(dataUsers.length / recordsPerPage);
    const numbers = [... Array(npage  + 1).keys()].slice(1);
    
    //Card in Mobile Size
    const [isMobile,setIsMobile] = useState(false);

    useEffect(() => {
        const  handleResize = () => {
            const screenWidth = window.innerWidth;
            setIsMobile(screenWidth < 480); 
        }
        handleResize();

        // Event listener untuk perubahan ukuran layar
    window.addEventListener('resize', handleResize);

    // Membersihkan event listener saat komponen dilepas
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    },[])

    return(
        <>
                {
                    isMobile ? <> 
                    {
                        <ModalCom/>
                    }
                    {/* ini untuk card */}
                            {
                                records.map((d) => {
                                    return(
                                    <div className="hero-card-data">
                                        <div className="card-wrapper-data">
                                            <div className=" data-card">
                                                <div className="num">No. {d.id}</div>
                                                <hr/>
                                                <div className="datas-card">
                                                     <div className="datas-bold"> Username:</div>
                                                     <div className="datas-medium">{d.username}</div>
                                                </div>
                                                <div className="datas-card">
                                                     <div className="datas-bold"> Password:</div>
                                                     <div className="datas-medium">{d.password}</div>
                                                </div>
                                                <div className="datas-card">
                                                     <div className="datas-bold"> Uraian:</div>
                                                     <div className="datas-medium">{d.uraian}</div>
                                                </div>
                                                <div className="datas-card">
                                                     <div className="datas-bold"> hakakses:</div>
                                                     <div className="datas-medium">{d.hakakses}</div>
                                                </div>
                                                <div className="btn-card">
                                                    <Link href="/edit" className="btne"><FontAwesomeIcon icon={faPen}/></Link>
                                                    <button className="btnd"><FontAwesomeIcon icon={faTrashCan}/></button>                                                    
                                                </div>
                                            </div>
                                       </div>
                                    </div>
                                    )
                                })
                            }
                        
                    </> :
                    <div className="hero-table">
                    <div className="container-table">
                    <div className="wrapper-table">
                    <div className="text-table"><FontAwesomeIcon icon={faClipboardList} className="icon"/> All User Data</div>
                    <div className="btn-modal">
                        <ModalCom/>
                    </div> 
                    <hr/>
                    <table className="tabelli">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Uraian</th>
                                <th>Hak Akses</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                records.map((d,i)=>{
                                    return(
                                    <tr key={i}>
                                        <td>{d.id}</td>
                                        <td>{d.username}</td>
                                        <td>{d.password}</td>
                                        <td>{d.uraian}</td>
                                        <td>{d.hakakses}</td>
                                        <td>
                                            <Link href="/edit" className="btne"><FontAwesomeIcon icon={faPen}/></Link>
                                            <button className="btnd"><FontAwesomeIcon icon={faTrashCan}/></button>
                                        </td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
                }

        <nav className="hero-pagination">
            <ul className="pagination">
                <li className="previous-page" onClick={prevPage}>
                    <a href="#" className="page-link">Prev</a>
                </li>
                {
                    numbers.map((n, i )=> (
                    <li className={`current-page ${currentPage === n ? 'active' : ''}`} key={i} onClick={()=>changeCPage(n)}>
                        <a href="#"
                        >{n}</a>
                    </li>
                    ))
                }
                <li className="next-page"  onClick={nextPage}>
                    <a href="#" className="page-link">Next</a>
                </li>
            </ul>
        </nav>
        </>
    )

    function prevPage () {
        if(currentPage !== firstIndex){
            setCurrentPage(currentPage - 1)
        }
    }

    function changeCPage(id) {
        setCurrentPage(id)
    }

    function nextPage() {
        if(currentPage !== lastIndex){
            setCurrentPage(currentPage + 1)
        }
    }
}