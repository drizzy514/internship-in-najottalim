import "./Technologies.scss";

import memariform from "../../images/memariform.png"
import play from "../../images/play.png"

import VideoModal from "../VideoModal/VideoModal";
function Technologies () {
    const [videoUrl, setVideoUrl] = useState("");
    const [playVideo, setPlayVideo] = useState(false);
            const clickPlay = (e) => {
                setPlayVideo(true);
                setVideoUrl(e.target.dataset.url);
            };
    return <>
                <section className="technologies">
                                <h2 className="technologies__title">Ishlab chiqarish texnologiyalari</h2>
                                    <div className="container">
                                        <ul className="technologies__list">
                                            <li className="technologies__list-item">
                                                <p className="technologies__title">Memoriform</p>
                                                    <img
                                                        src={memariform}
                                                        data-url="https://www.youtube.com/watch?v=MWRIHCqbPAg"
                                                        onClick={clickPlay}
                                                        className="technologies__img"
                                                        alt="img"
                                                    />
                                                    <img
                                                        src={play}
                                                        data-url="https://www.youtube.com/watch?v=MWRIHCqbPAg"
                                                        onClick={clickPlay}
                                                        className="technologies__play"
                                                        alt="img"
                                                    />
                                                    <p className="technologies__item-text">Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>
                                            </li>
                                        </ul>
                                        {playVideo ? (
                                        <VideoModal url={videoUrl} setPlayVideo={setPlayVideo} />
                                    ) : (
                                        ""
                                    )}
                                    </div>
                </section>
    </>
}