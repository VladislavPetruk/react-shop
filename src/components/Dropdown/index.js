import React from "react";
import styles from "./Dropdown.module.scss";
import stylesMain from "./../../index.module.scss";
import stylesProduct from "./../Product/Product.module.scss";

export default function Dropdown({ onCloseCard, items = [] }) {
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown_top}>
        <h6 className={styles.dropdown__title}>Shopping cart</h6>
        <button
          className={`${stylesMain.btn_reset} ${styles.dropdown__close}`}
          onClick={onCloseCard}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.3606 14.36L1.64062 1.63995"
              stroke="#151515"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="bevel"
            />
            <path
              d="M14.3606 1.63995L1.64062 14.36"
              stroke="#151515"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="bevel"
            />
          </svg>
        </button>
        <div className={styles.dropdown__products}>
          {items.map((obj) => (
            <div className={styles.dropdown_item}>
              <img src={obj.imgURL} alt={obj.title} width="75" height="75" />
              <div className={styles.dropdown_item__info}>
                <a className={styles.dropdown_item__title} href="/">
                  <span>{obj.title}</span>
                </a>
                <div
                  className={`${stylesProduct.product__price} ${styles.dropdown_item__price}`}
                >
                  <span className={stylesProduct.price}>{obj.price} USD</span>
                </div>
              </div>
              <button
                className={`${stylesMain.btn_reset} ${styles.dropdown_item__remove}`}
              >
                <svg
                  width="9"
                  height="8"
                  viewBox="0 0 9 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.68031 7.18003L1.32031 0.820026"
                    stroke="#151515"
                    strokeLinecap="round"
                    strokeLinejoin="bevel"
                  />
                  <path
                    d="M7.68031 0.820026L1.32031 7.18003"
                    stroke="#151515"
                    strokeLinecap="round"
                    strokeLinejoin="bevel"
                  />
                </svg>
                <span>Remove</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.dropdown_bottom}>
        <p className={styles.dropdown__subtotal}>Subtotal</p>
        <span className={styles.dropdown__total_price}>73.98 USD</span>
        <div className={styles.dropdown_next}>
          <p className={styles.dropdown_next__txt}>Continue shopping</p>
          <a
            className={`${stylesMain.btn} ${styles.dropdown_next__btn}`}
            href="/"
          >
            Go to Checkout
          </a>
        </div>
      </div>
    </div>
  );
}
