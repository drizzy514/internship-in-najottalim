import "./Header.scss";

import logoImg from "../../images/icons/matras-logoo.png"

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
        const [number, setNumber] = useState([])

    useEffect(() => {
        fetch('http://localhost:3020/number', {
            'method': "GET",
        })  
        .then(response => {
            return response.json()
        })
        .then(num => {
            return setNumber(num)
        })
    }, [])
    return <>
                <header className="header" id="header-id">
                   
                        
                       
                            <div className="container">
                                <ul className="header_lists-list">
                                    <li className="header_lists-item"><a href='#categorie'><p>Katalog</p></a></li>
                                    <li className="header_lists-item"><a href='#discount'><p>Aksiya</p></a></li>
                                    <li className="header_lists-item"><a href='#aboutus'><p>Biz Haqimizda</p></a></li>
                                    <li className="header_lists-item"><a href='#address'><p>Manzilimiz</p></a></li>
                                    <li className="header_lists-item"><a href='#contact'><p>Aloqa</p></a></li>
                                </ul>
                            </div>
                     
                            <div className="container">
                        <div className="header_contact">
                                <div className="logo">
                                    <img src={logoImg} alt="" />
                                </div>
                                <ul className="header_contact-lists">
                                    <li className="header_contact-item">
                                        
                                            <a href="tel:+998990834646" className="header_contact-item-link">
                                                {
                                                    number.map((n) => ((
                                                                n.main_number_num
                                                    )))
                                                }
                                            </a>
                                         </li>
                                    <li className="header_contact-item">
                                    {/* onClick={() => setModal(true)} */}
                                            <button className="btn order">
                                        Buyurtma berish
                                         </button>

                                    </li>
                                </ul>
                                
                        </div>
                  
                            </div>
            </header>
    
    </>
}


export default Header