import PropTypes from "prop-types";
import styles from "./FooterFitmealFoodDeliveryW.module.css";

const FooterFitmealFoodDeliveryW = ({ className = "" }) => {
  return (
    <footer
      className={[styles.footerFitmealFoodDeliveryW, className].join(" ")}
    >
      <div className={styles.background} />
      <div className={styles.footerContent}>
        <div className={styles.footerLinksLeft}>
          <h2 className={styles.h2}>🍕</h2>
          <div className={styles.footerAppLinks}>
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
              src="/google-play-black-border-1.svg"
            />
          </div>
        </div>
        <div className={styles.quickLinksContentWrapper}>
          <div className={styles.quickLinksContent}>
            <b className={styles.quickLinks}>Quick links</b>
            <p className={styles.pricingUpdatesBetaContainer}>
              <span className={styles.features}>Features</span>
              <span className={styles.foodMenu}>Food Menu</span>
              <span className={styles.offer}>Offer</span>
              <span className={styles.review}>Review</span>
              <span className={styles.rider}>Rider</span>
            </p>
          </div>
        </div>
        <div className={styles.aboutLinksContentWrapper}>
          <div className={styles.aboutLinksContent}>
            <div className={styles.getToKnow}>Get to Know Us</div>
            <p className={styles.giftCardsDoordashContainer}>
              <span className={styles.giftCards}>Gift Cards</span>
              <span className={styles.doordashStories}>DoorDash Stories</span>
              <span className={styles.linkedin}>LinkedIn</span>
              <span className={styles.glassdoor}>Glassdoor</span>
              <span className={styles.accessibility}>Accessibility</span>
            </p>
          </div>
        </div>
        <div className={styles.newsContentWrapper}>
          <div className={styles.newsContent}>
            <b className={styles.news}>News</b>
            <p className={styles.pricingUpdatesBetaContainer1}>
              <span className={styles.blog}>Blog</span>
              <span className={styles.faq}>FAQ</span>
              <span className={styles.liftMedia}>{`Lift Media `}</span>
              <span className={styles.press}>Press</span>
              <span className={styles.presseKit}>Presse kit</span>
            </p>
          </div>
        </div>
        <div className={styles.contactContentWrapper}>
          <div className={styles.contactContent}>
            <b className={styles.contact}>Contact</b>
            <div className={styles.whatsappSupport24Container}>
              <p className={styles.whatsapp}>WhatsApp</p>
              <p className={styles.support24}>Support 24</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrightContentParent}>
        <div className={styles.copyrightContent}>
          <div className={styles.pizzaallRightReserved}>
            © 2023 pizza.All right reserved
          </div>
        </div>
        <p className={styles.privacyPolicyTerms}>
          Privacy Policy Terms Services
        </p>
      </div>
    </footer>
  );
};

FooterFitmealFoodDeliveryW.propTypes = {
  className: PropTypes.string,
};

export default FooterFitmealFoodDeliveryW;
