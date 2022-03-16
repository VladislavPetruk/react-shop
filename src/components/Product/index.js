import React from "react";
import styles from "./Product.module.scss";
import stylesMain from "./../../index.module.scss";


export default function Product({title, imgURL, description, price, onAddCart}) {

  const [isAdded, setIsAdded] = React.useState(false);


  const onClickAdded = () => {
    onAddCart({title, price, imgURL})
    setIsAdded(!isAdded);
  }



  return (
    <>
      <article className={styles.product}>
        <div className={styles.product__img}>
          <a href="/">
            <img
              src={imgURL}
              alt={title}
              className={styles.product__image}
              width={237}
              height={180}
            />
          </a>
        </div>
        <a className={styles.product__title} href="/">
          <span>{title}</span>
        </a>
        <p className={styles.product__description}>
          {description}
        </p>
        <div className={styles.product__more}>
          <div className={styles.product__price}>
            <span className={styles.price}>{price} USD</span>
          </div>
          <button className={`${stylesMain.btn_reset} ${styles.product__btn} ${isAdded ? `${styles.product__btn_active}` : ""}`} onClick={onClickAdded}>Buy now</button>
        </div>
      </article>
      {/* <article className="product">
        <div className="product__img">
          <a href="/">
            <img
              src="/img/product-2.jpg"
              alt="Product 2"
              className="product__image"
              width={237}
              height={180}
            />
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
            <span className="price__new">1.48 USD</span>
            <s className="price__old">2.45 USD</s>
          </div>
          <button className="btn-reset btn product__btn">Buy now</button>
        </div>
      </article> */}
    </>
  );
}
