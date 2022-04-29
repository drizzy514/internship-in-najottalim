import "./Home.scss"
import { useEffect, useState, useRef } from "react";
// components

import ArrowRight from "../../assets/arrowRight";
import Header from "../../Components/Header/Header";
import HeroSlider from "../../Components/HeroSlider/HeroSlider";
import ProductBtn from "../../Components/ProductBtn/ProductBtn";
import Product from "../../Components/Product/Product";
import HeroSliderController from "../../Components/HeroSliderController/HeroSliderController";
import Footer from "../../Components/Footer/Footer";

function Home () {
    const [btns, setBtns] = useState([]);
    const [products, setProducts] = useState([]);
    const [categoryId, setCategoryId] = useState("barchasi");
    const [modal, setModal] = useState(false);
    const [modalim, setModalim] = useState(false);
    const [pr, setPr] = useState();
    const [width, setWidth] = useState(0);
    const [windowWidth, setWindowWidth] = useState(8);
    const [btnList, setBtnList] = useState(150);
    const [activeBtn, setActiveBtn] = useState(false);
    const [activeBtnNext, setActiveBtnNext] = useState(false);
    const [activeBtnNextClick, setActiveBtnNextClick] = useState(true);
    const [addressSlider, setAddressSlider] = useState([]);
  
    const [videoUrl, setVideoUrl] = useState("");
    const [playVideo, setPlayVideo] = useState(false);
    const productTop = useRef();
    const btnPrev = useRef();
    const btnNext = useRef();
    const btnsUl = useRef();
    const listCate = useRef();
  

    useEffect(() => {
        fetch('http://localhost:3020/categories')
        .then(response => response.json())
        .then(data => setBtns(data))
    }, [])

    useEffect(() => {
      fetch(`http://localhost:3020/products/all_active`)
        .then((data) => data.json())
        .then((d) => {
          if (d && d.length) {
            setProducts(d);
          }
        });
    }, []);
  
    useEffect(() => {
      if (
        window.innerWidth <
        +btnsUl.current.style.width.slice(
          0,
          btnsUl.current.style.width.length - 2
        )
      ) {
        setActiveBtnNext(true);
      } else {
        setActiveBtnNext(false);
      }
      // btns
      if (
        +window
          .getComputedStyle(listCate.current)
          .width.slice(
            0,
            window.getComputedStyle(listCate.current).width.length - 2
          ) <= 100
      ) {
        setWindowWidth(3);
        setBtnList(100);
      } else {
        setWindowWidth(8);
        setBtnList(150);
      }
    }, [btns]);
    useEffect(() => {
      fetch(`http://localhost:3020/addresses`)
        .then(data => data.json() )
        .then(d => { console.log(d)
          if (d) {
            setAddressSlider(d);
          }
        });
    }, []);
  
    const nextBtn = () => {
      if (-((btns.length - windowWidth) * btnList) === width) {
        setActiveBtnNextClick(false);
      } else {
        setWidth(width - btnList);
        setActiveBtn(true);
  
        if (-((btns.length - windowWidth) * btnList) + btnList === width) {
          setActiveBtnNextClick(false);
        }
      }
    };
    const prevBtn = () => {
      if (0 > width) {
        setWidth(width + btnList);
        setActiveBtnNextClick(true);
      } else {
        setWidth(0);
        setActiveBtn(false);
      }
      if (width === -btnList) {
        setActiveBtn(false);
      }
    };
    const clickPlay = (e) => {
      setPlayVideo(true);
      setVideoUrl(e.target.dataset.url);
    };

    return (
        <>
        <Header />
        
                    <div className="hero" >
                        <div className="container">
                            <div className="hero-body">
                                <div className="hero-left">
                                    <h1 className="hero__title">Kechalari sokin dam oling</h1>
                                    <a className="btn hero__btn" href="#categorie">
                                            Kategoriyalar
                                            <ArrowRight  />
                                        </a>
                                        <HeroSliderController />
                                    </div>
                                     <div className="hero-right">
                                             <HeroSlider />
                                        </div>
                            </div>
                        </div>
                    </div>
                    <section className="statistic">
                                <div className="container">
                                            <div className="statistica">
                                                <ul className="statistica__list">
                                                    <li className="statistica__list-item">
                                                        <h2 className="statistica__item-title">7</h2>
                                                        <p className="statistica_item-desc">yillik tajriba</p>
                                                    </li>
                                                    <li className="statistica__list-item">
                                                        <h2 className="statistica__item-title">10k+</h2>
                                                        <p className="statistica_item-desc">mamnun mijozlar</p>
                                                    </li>
                                                    <li className="statistica__list-item">
                                                        <h2 className="statistica__item-title">10</h2>
                                                        <p className="statistica_item-desc">yillik kafolat</p>
                                                    </li>
                                                    <li className="statistica__list-item">
                                                        <h2 className="statistica__item-title">3</h2>
                                                        <p className="statistica_item-desc">kunda yetkazish</p>
                                                    </li>
                                                </ul>
                                            </div>
                                </div>
                    </section>
                    <section className="product" id="categorie">
                                <h2 className="product__title">Bizning mahsulotlar</h2>

                                         <div className="container">
                                         {/* <div className="arrows">
                                                <button
                                                    ref={btnPrev}
                                                    className={`arrows__btn arrows__btn--prev ${
                                                    activeBtn && "arrows__btn-active"
                                                    }`}
                                                    onClick={prevBtn}
                                                >
                                                    <img src={arrow} alt="prev" />
                                                </button>
                                                <button
                                                    ref={btnNext}
                                                    className={`arrows__btn ${
                                                    activeBtnNextClick && activeBtnNext && "arrows__btn-active"
                                                    }`}
                                                    onClick={nextBtn}
                                                >
                                                    <img src={arrow} alt="next" />
                                                </button>
                                            </div> */}
                                         
                                         <div className="slider_box"></div>

                                                <ul 
                                                      ref={btnsUl}
                                                      className="product-card"
                                                    //   style={{
                                                    //     width: 150 * btns.length,
                                                    //     transform: `translateX(${width}px)`,
                                                    //   }}
                                                >
                                                    <li  
                                                      onClick={() => {
                                                        setCategoryId("barchasi");
                                                      }} 
                                                        className={ categoryId === "barchasi" ? "list list-active " : "list"}
                                                        ref={listCate}
                                                    >
                                                        <span>Barchasi</span>
                                                    </li>
                                                    {console.log(btns)}
                                                    {btns.length ? (
                                                        
                                                                <>
                                                                {btns.map(
                                                                    (btn, i) =>
                                                                    btn.category_is_active && (
                                                                        <ProductBtn
                                                                        key={i}
                                                                        btn={btn}
                                                                        categoryId={categoryId}
                                                                        setCategoryId={setCategoryId}
                                                                        />
                                                                    )
                                                                )}
                                                                </>
                                                    ) : null}
                                                </ul>
                                    </div>
                                    <div className="product-bottom">
          <div className="container--product">
            <ul>
              {products.length ? (
                <>
                  {products.map((product, id) =>
                    categoryId === "barchasi" ? (
                      <Product
                        setPr={setPr}
                        setModal2={setModalim}
                        key={id}
                        product={product}
                        modal={modal}
                        setModal={setModal}
                      />
                    ) : categoryId === product.category_id ? (
                      <Product
                        setPr={setPr}
                        setModal2={setModalim}
                        key={id}
                        product={product}
                        modal={modal}
                        setModal={setModal}
                      />
                    ) : null
                  )}
                </>
              ) : (
                <h1>Hozir bu mahsulot yo'q, tez orada chiqadi :)</h1>
              )}
            </ul>

            <h2
              className="secondary-heading"
              style={{ marginTop: "100px", marginBottom: "60px" }}
              id="discount"
            >
              Aksiyadagi mahsulotlar
            </h2>

            <ul>
              {products.length ? (
                products.map(
                  (product, id) =>
                    product.is_on_sale && (
                      <Product
                        setPr={setPr}
                        setModal2={setModalim}
                        modal={modal}
                        products={products}
                        setModal={setModal}
                        key={id}
                        product={product}
                      />
                    )
                )
              ) : (
                <h1>Hozir aksiyadagi mahsulot yo'q, tez orada chiqadi :)</h1>
              )}
            </ul>
          </div>
        </div>
                      </section>
                      <section className="footer">
                                <Footer />

                      </section>
        </>
    )
}


export default Home