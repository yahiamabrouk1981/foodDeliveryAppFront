import Main from "../components/Main";
import Dishes from "../components/Dishes";
import ClientFeedback from "../components/ClientFeedback";
import FrameComponent from "../components/FrameComponent";
import FooterFitmealFoodDeliveryW from "../components/FooterFitmealFoodDeliveryW";
import styles from "./FoodDeliveryWebsite.module.css";

const FoodDeliveryWebsite = () => {
  return (
    <div className={styles.foodDeliveryWebsite}>
      <Main />
      <Dishes />
      <section className={styles.orderProcess}>
        <div className={styles.orderContent}>
          <div className={styles.orderHeader}>
            <h2 className={styles.howToOrder}>How To Order?</h2>
          </div>
          <div className={styles.processSteps}>
            <div className={styles.steps}>
              <b className={styles.stepIcons}>01</b>
              <div className={styles.stepDetails}>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon}>
                    <h2 className={styles.h2}>📍</h2>
                  </div>
                </div>
                <div className={styles.chooseYourLocation}>
                  Choose your location
                </div>
              </div>
            </div>
            <div className={styles.steps1}>
              <b className={styles.b}>02</b>
              <div className={styles.frameParent}>
                <div className={styles.iconContainer}>
                  <div className={styles.icon1}>
                    <h2 className={styles.h21}>🙇🏻‍♂️</h2>
                  </div>
                </div>
                <div className={styles.chooseWhatTo}>Choose what to eat</div>
              </div>
            </div>
            <div className={styles.steps2}>
              <b className={styles.b1}>03</b>
              <div className={styles.frameGroup}>
                <div className={styles.iconFrame}>
                  <div className={styles.icon2}>
                    <h2 className={styles.h22}>🍔</h2>
                  </div>
                </div>
                <div className={styles.mayYourFirst}>May your first order</div>
              </div>
            </div>
            <div className={styles.steps3}>
              <b className={styles.b2}>04</b>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.icon3}>
                    <h2 className={styles.h23}>🏠</h2>
                  </div>
                </div>
                <div className={styles.nowYourFood}>Now! Your food in way</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ClientFeedback />
      <FrameComponent />
      <FooterFitmealFoodDeliveryW />
    </div>
  );
};

export default FoodDeliveryWebsite;
