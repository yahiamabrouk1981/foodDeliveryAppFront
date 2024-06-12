import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={[styles.subscriptionContentParent, className].join(" ")}
    >
      <div className={styles.subscriptionContent}>
        <h2 className={styles.subscribeOurNewsletter}>
          Subscribe our newsletter
        </h2>
        <p className={styles.browseLocalRestaurants}>
          Browse local restaurants and businesses for delivery by entering your
          address blow.
        </p>
      </div>
      <div className={styles.fromWrapper}>
        <div className={styles.from}>
          <div className={styles.fromChild} />
          <div className={styles.emailInputContainer}>
            <div className={styles.enterYourEmail}>
              Enter your email address...
            </div>
          </div>
          <button className={styles.sendButtonContainer}>
            <b className={styles.send}>Send</b>
          </button>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
