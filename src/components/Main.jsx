import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Main.module.css";

const Main = ({ className = "" }) => {
  return (
    <section className={[styles.main, className].join(" ")}>
      <div className={styles.content}>
        <header className={styles.contentInner}>
          <div className={styles.frameParent}>
            <div className={styles.wrapper}>
              <h2 className={styles.h2}>🍕</h2>
            </div>
            <div className={styles.navigation}>
              <div className={styles.navLinks}>
                <a className={styles.restaurants}>Restaurants</a>
                <a className={styles.recipes}>Recipes</a>
                <a className={styles.about}>About</a>
                <FormControl
                  className={styles.pageLink}
                  variant="standard"
                  sx={{
                    borderRadius: "0px 0px 0px 0px",
                    width: "48px",
                    height: "28px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "28px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "28px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "28px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "28px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      textAlign: "left",
                      p: "0 !important",
                    },
                  }}
                >
                  <InputLabel color="primary" />
                  <Select color="primary" disableUnderline displayEmpty />
                  <FormHelperText />
                </FormControl>
              </div>
            </div>
            <div className={styles.userActions}>
              <div className={styles.loginWrapper}>
                <a className={styles.login}>Login</a>
              </div>
              <button className={styles.button}>
                <div className={styles.base} />
                <a className={styles.signUp}>Sign Up</a>
              </button>
            </div>
          </div>
        </header>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.yourFavoriteFoodDeliveryPaParent}>
              <h1 className={styles.yourFavoriteFood}>
                Your Favorite Food Delivery Partner
              </h1>
              <div className={styles.heroDescription}>
                <p
                  className={styles.theFoodAt}
                >{`The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven to your doorstep. `}</p>
              </div>
              <div className={styles.appLinks}>
                <div className={styles.appButtons}>
                  <div className={styles.fillParent}>
                    <div className={styles.fill} />
                    <div className={styles.locationInput}>
                      <div className={styles.enterYourDelivery}>
                        Enter your delivery location
                      </div>
                    </div>
                    <button className={styles.orderButton}>
                      <b className={styles.orderNow}>Order Now</b>
                    </button>
                  </div>
                  <img
                    className={styles.appStoreBlackBorder}
                    loading="lazy"
                    alt=""
                    src="/app-store-black-border.svg"
                  />
                  <img
                    className={styles.googlePlayBlackBorder}
                    loading="lazy"
                    alt=""
                    src="/google-play-black-border.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.heroImageChild} />
            <img
              className={styles.imagesIcon}
              loading="lazy"
              alt=""
              src="/images@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
