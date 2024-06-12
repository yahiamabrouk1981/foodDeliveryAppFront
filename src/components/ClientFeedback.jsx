import React from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";
import styles from "./ClientFeedback.module.css";

const ClientFeedback = ({ className = "" }) => {
  return (
    <section className={[styles.clientFeedback, className].join(" ")}>
      <div className={styles.feedbackContent}>
        <div className={styles.vectorParent}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
          <div className={styles.feedbackQuoteWrapper}>
            <div className={styles.feedbackQuote}>
              <h2 className={styles.ourClientsFeedback}>
                Our Clients Feedback
              </h2>
              <div className={styles.quote}>
                <p className={styles.theFoodAt}>
                  The food at your doorstep. Why starve when you have us. You
                  hunger partner. Straight out of the oven to your doorstep.
                </p>
              </div>
            </div>
          </div>
        </div>
        <i className={styles.loremIpsumDolor}>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi”
        </i>
        <div className={styles.clientDetails}>
          <div className={styles.client}>
            <div className={styles.clientInfo}>
              <b className={styles.mitchellMarsh}>Mitchell Marsh</b>
              <div className={styles.ceoBexonAgency}>CEO, Bexon Agency</div>
            </div>
            <div className={styles.clientInner}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-3586.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ClientFeedback.propTypes = {
  className: PropTypes.string,
};

export default ClientFeedback;
