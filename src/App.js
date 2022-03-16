import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import stylesMain from "./index.module.scss";
import style from "./components/Product/Product.module.scss"
import React from "react";



// const arr = [
//   {
//     title: "name 1",
//     newPrice: 10,
//     description: "descr 1",
//     imgURL: "/img/product-1.jpg"
//   },
//   {
//     title: "name 2",
//     oldPrice: 334,
//     newPrice: 140,
//     description: "descr 2",
//     imgURL: "/img/product-2.jpg"
//   }
// ]

function App() {
  const [products, setProducts] = React.useState([]);
  const [cartProducts, setCartProducts] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])

  const onAddToCart = (obj) => {
    setCartProducts((prev) => [...prev, obj])
  }

  return (
    <div className={stylesMain.site_container}>
      {cartOpened && <Dropdown items={cartProducts} onCloseCard={() => setCartOpened(false)} />}
      <Header onClickCard={() => setCartOpened(true)}/>
      <main className="main">
        <section className="section section--products">
          <div className={stylesMain.container}>
            <div className={style.products}>
              {products.map((obj) => (
                <Product 
                key={obj.id}
                title={obj.title}
                imgURL={obj.image}
                price={obj.price}
                description={obj.description}
                onAddCart={(item) => onAddToCart(item)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
