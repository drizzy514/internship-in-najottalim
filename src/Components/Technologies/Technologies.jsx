import "./Technologies.scss";

import memariform from "../../images/memariform.png"
import mustaqilPurjina from "../../images/mustaqil-prujina.png"
import tabiyLateks from "../../images/tabiiy-lateks.png"
import play from "../../images/play.png"







function Technologies () {
  
    return <>
                <section className="technologies">
                                <h2 className="technologies__title">Ishlab chiqarish texnologiyalari</h2>
                                    <div className="container">
                                        <ul className="technologies__list">
                                            <li className="technologies__list-item">
                                                <p className="technologies__item-title">Memoriform</p>
                                                    <img
                                                        src={memariform}
                                                        data-url="https://www.youtube.com/watch?v=MWRIHCqbPAg"
                                                   
                                                        className="technologies__img"
                                                        alt="img"
                                                    />
                                                     <a href="https://www.youtube.com/watch?v=MWRIHCqbPAg" className="technologies__play">
                                                         <img src={play} alt="play-img" />
                                                     </a>
                                                    <p className="technologies__item-text">Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
                                            </li>
                                            <li className="technologies__list-item">
                                                <p className="technologies__item-title">Tabiiy lateks</p>
                                                    <img
                                                        src={tabiyLateks}
                                                       
                                                        className="technologies__img"
                                                        alt="img"
                                                    />
                                                  <a href="https://www.youtube.com/watch?v=MWRIHCqbPAg"className="technologies__play">
                                                         <img src={play} alt="play-img" />
                                                     </a>
                                                    <p className="technologies__item-text">Aliquam euismod ornare justo, sed faucibus eu. Sed amet tellus netus quis bibendum. Euismod diam eu sem tristique aenean rhoncus.</p>
                                            </li>
                                            <li className="technologies__list-item">
                                                <p className="technologies__item-title">Mustaqil prujina</p>
                                                    <img
                                                        src={mustaqilPurjina}
                                                       
                                                        className="technologies__img"
                                                        alt="img"
                                                    />
                                                 <a href="https://www.youtube.com/watch?v=MWRIHCqbPAg" className="technologies__play">
                                                         <img src={play} alt="play-img" />
                                                     </a>
                                                    <p className="technologies__item-text">Enim urna consequat, justo, cras tincidunt imperdiet orci sodales. Dui purus feugiat morbi quam orci, vel.</p>
                                            </li>
                                        </ul>
                                  
                                    </div>
                </section>
    </>
}


export default Technologies