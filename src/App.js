function App() {
  return (
    <div className="site-container">
      <header className="header header--main">
        <div className="container header--container">
          <img src="/img/logo.svg" alt="Logo" width="177" height="18" />
          <div className="header__search">
            <input type="search" className="input-reset input__search" placeholder="Search Products, categories ..."/>
            <button type="submit" className="btn-reset btn__search">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.19303 10.4333C10.7704 10.4333 12.8597 8.34394 12.8597 5.76661C12.8597 3.18928 10.7704 1.09995 8.19303 1.09995C5.61571 1.09995 3.52637 3.18928 3.52637 5.76661C3.52637 8.34394 5.61571 10.4333 8.19303 10.4333Z" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="bevel"/>
                <path d="M4.81319 9.24002L1.68652 12.3667" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="bevel"/>
              </svg>
            </button>
          </div>
          <ul className="list-reset header__list">
            <li className="header__item">
              <button className="btn-reset header__item--user">
                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 21.9999L2.79 19.1199C5.4 9.6199 16.6 9.6199 19.21 19.1199L20 21.9999" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 11.98C13.7614 11.98 16 9.74141 16 6.97998C16 4.21856 13.7614 1.97998 11 1.97998C8.23858 1.97998 6 4.21856 6 6.97998C6 9.74141 8.23858 11.98 11 11.98Z" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="bevel"/>
                </svg>
              </button>
            </li>  
            <li className="header__item">
              <button className="btn-reset header__item--card">
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.8896 19.8499H6.10955C5.79187 19.8501 5.48326 19.7439 5.23309 19.5481C4.98291 19.3523 4.80562 19.0783 4.72955 18.7699L2.07955 8.15986C2.05369 8.05657 2.05174 7.94874 2.07383 7.84458C2.09593 7.74042 2.1415 7.64267 2.20707 7.55878C2.27264 7.47489 2.35649 7.40706 2.45223 7.36046C2.54797 7.31386 2.65307 7.28971 2.75955 7.28986H21.2396C21.346 7.28971 21.4511 7.31386 21.5469 7.36046C21.6426 7.40706 21.7265 7.47489 21.792 7.55878C21.8576 7.64267 21.9032 7.74042 21.9253 7.84458C21.9474 7.94874 21.9454 8.05657 21.9196 8.15986L19.2696 18.7699C19.1935 19.0783 19.0162 19.3523 18.766 19.5481C18.5158 19.7439 18.2072 19.8501 17.8896 19.8499V19.8499Z" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.79941 2.14993L6.89941 7.28993" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.8799 2.14993L16.7899 7.28993" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>0</span>
              </button>
            </li> 
          </ul>
        </div>
      </header>
      <main className="main">
        <section className="section section--products">
          <div className="container">
            <div className="products">
              <article className="product">
                <div className="product__img">
                  <a href="/">
                    <img src="/img/product-1.jpg" alt="Product 1" className="product__image" width="237" height="180" />
                  </a>
                </div>
                <a className="product__title" href="/">
                  <span>Product Title</span>
                </a>
                <p className="product__description">
                  Space for a small product description   
                </p>
                <div className="product__more">
                  <div className="product__price">
                    <span className="price">
                      1.48 USD
                    </span>
                  </div>
                  <button className="btn-reset product__btn">
                    Buy now
                  </button>
                </div>
              </article>
              <article className="product">
                <div className="product__img">
                  <a href="/">
                    <img src="/img/product-2.jpg" alt="Product 2" className="product__image" width="237" height="180" />
                  </a>
                  <span className="product__discount">- 36 %</span>
                </div>
                <a className="product__title" href="/">
                  <span>Product Title</span>
                </a>
                <p className="product__description">
                  Space for a small product description   
                </p>
                <div className="product__more">
                  <div className="product__price">
                    <span className="price__new">
                      1.48 USD
                    </span>
                    <s className="price__old">
                      2.45 USD
                    </s>
                  </div>
                  <button className="btn-reset product__btn">
                    Buy now
                  </button>
                </div>
              </article>
              <article className="product">
                <div className="product__img">
                  <a href="/">
                    <img src="/img/product-1.jpg" alt="Product 1" className="product__image" width="237" height="180" />
                  </a>
                </div>
                <a className="product__title" href="/">
                  <span>Product Title</span>
                </a>
                <p className="product__description">
                  Space for a small product description   
                </p>
                <div className="product__more">
                  <div className="product__price">
                    <span className="price">
                      1.48 USD
                    </span>
                  </div>
                  <button className="btn-reset product__btn">
                    Buy now
                  </button>
                </div>
              </article>
              <article className="product">
                <div className="product__img">
                  <a href="/">
                    <img src="/img/product-2.jpg" alt="Product 2" className="product__image" width="237" height="180" />
                  </a>
                  <span className="product__discount">- 36 %</span>
                </div>
                <a className="product__title" href="/">
                  <span>Product Title</span>
                </a>
                <p className="product__description">
                  Space for a small product description   
                </p>
                <div className="product__more">
                  <div className="product__price">
                    <span className="price__new">
                      1.48 USD
                    </span>
                    <s className="price__old">
                      2.45 USD
                    </s>
                  </div>
                  <button className="btn-reset product__btn">
                    Buy now
                  </button>
                </div>
              </article>
              <article className="product">
                <div className="product__img">
                  <a href="/">
                    <img src="/img/product-1.jpg" alt="Product 1" className="product__image" width="237" height="180" />
                  </a>
                </div>
                <a className="product__title" href="/">
                  <span>Product Title</span>
                </a>
                <p className="product__description">
                  Space for a small product description   
                </p>
                <div className="product__more">
                  <div className="product__price">
                    <span className="price">
                      1.48 USD
                    </span>
                  </div>
                  <button className="btn-reset product__btn">
                    Buy now
                  </button>
                </div>
              </article>
              <article className="product">
                <div className="product__img">
                  <a href="/">
                    <img src="/img/product-2.jpg" alt="Product 2" className="product__image" width="237" height="180" />
                  </a>
                  <span className="product__discount">- 36 %</span>
                </div>
                <a className="product__title" href="/">
                  <span>Product Title</span>
                </a>
                <p className="product__description">
                  Space for a small product description   
                </p>
                <div className="product__more">
                  <div className="product__price">
                    <span className="price__new">
                      1.48 USD
                    </span>
                    <s className="price__old">
                      2.45 USD
                    </s>
                  </div>
                  <button className="btn-reset product__btn">
                    Buy now
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p className="centered footer__text">Copyright © 2022 All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
