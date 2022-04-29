import "./About-us.scss";

import penatibus from "../../images/Penatibus.png";
import play from "../../images/play.png"
import libero from "../../images/Libero.png"
function Aboutus () {


    return <>
    
            <section className="about-us" id="about-us">
                <div className="container">
                <ul className="company-list" id="about-us">
            <li className="company-list__item">
              <div className="company-list__item__wrapper">
                <h2 className="secondary-heading company__heading ">
                Dream Cloud kompaniyasi haqida
                </h2>
                <p className="company__text">
                  Penatibus viverra gravida rhoncus in. At turpis morbi ante
                  tortor a est. Habitant adipiscing ut sed pulvinar tellus, ut
                  urna, fermentum:
                </p>
                <div className="company-list__wrapper">
                  <ul className="penatibus-list">
                    <li className="penatibus-list__item">
                      <p className="penatibus-list__text">
                        Penatibus viverra gravida rhoncus in.
                      </p>
                    </li>
                    <li className="penatibus-list__item">
                      <p className="penatibus-list__text">
                        Dolor integer in interdum viverra risus dolor enim.
                      </p>
                    </li>
                    <li className="penatibus-list__item">
                      <p className="penatibus-list__text">
                        Turpis senectus eu, eget aenean nulla pellentesque sed
                        ut tempor.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="company-img-wrapper">
                <img
                  src={penatibus}
                  className="company__img"
                  alt="img"
                />
               <a href="https://www.youtube.com/watch?v=MWRIHCqbPAg" className="technologies__play">
                            <img src={play} alt="play-img" />
                </a>
              </div>
            </li>
            <li className="company-list__item">
              <div>
                <img src={libero} className="company__img" alt="img" />
              </div>
              <div className="company-list__item--wrapper">
                <p className="company__text company--text">
                  Libero erat praesent ullamcorper eget tortor sed et. Nec id
                  lobortis gravida vitae. Scelerisque id fusce vitae ut. Integer
                  sed vulputate sed nec. Arcu id mattis erat et id.{" "}
                </p>
                <div className="company-list__wrapper company-list--wrapper">
                  <ul className="libero-list">
                    <li className="libero-list__item">
                      <p className="libero-list__numeric">1.</p>
                      <p className="libero-list__text">
                        Id risus phasellus laoreet eget. A nec pulvinar.
                      </p>
                    </li>
                    <li className="libero-list__item">
                      <p className="libero-list__numeric">2.</p>
                      <p className="libero-list__text">
                        Eu justo, tincidunt fringilla diam nulla.
                      </p>
                    </li>
                    <li className="libero-list__item">
                      <p className="libero-list__numeric">3.</p>
                      <p className="libero-list__text">
                        Amet, nullam cras lacus, fermentum leo tellus sagittis.
                      </p>
                    </li>
                    <li className="libero-list__item">
                      <p className="libero-list__numeric">4.</p>
                      <p className="libero-list__text">
                        Facilisi mauris condimentum sagittis odio rhoncus
                        semper.
                      </p>
                    </li>
                  </ul>
                </div>
                <p className="company__text company--text">
                  Ac tortor volutpat pellentesque mauris nisi, praesent. Et
                  tempus accumsan est elementum feugiat arcu mauris tincidunt.
                  Eget faucibus pharetra et luctus eget ut fames. A cursus
                  elementum egestas eu scelerisque id.
                </p>
              </div>
            </li>
          </ul>
                </div>
            </section>
    </>
}

export default Aboutus