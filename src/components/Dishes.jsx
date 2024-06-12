import PropTypes from "prop-types";
import styles from "./Dishes.module.css";

const Dishes = ({ className = "" }) => {
  return (
    <section className={[styles.dishes, className].join(" ")}>
      <div className={styles.dishesContent}>
        <div className={styles.dishesHeader}>
          <div className={styles.dishesTitle}>
            <h2 className={styles.moreThan10000Container}>
              <span className={styles.moreT}>
                <span className={styles.m}>M</span>
                <span className={styles.ore}>{`ORE `}</span>
                <span className={styles.t}>T</span>
              </span>
              <span className={styles.han10000}>
                <span className={styles.han}>{`HAN `}</span>
                <b className={styles.b}>10,000</b>
              </span>
              <span className={styles.dishesToOrder}>
                <span className={styles.span}>{` `}</span>
                <span className={styles.d}>D</span>
                <span className={styles.ishes}>{`ISHES `}</span>
                <span className={styles.t1}>T</span>
                <span className={styles.o}>{`O `}</span>
                <span className={styles.o1}>O</span>
                <span className={styles.rder}>RDER!</span>
              </span>
            </h2>
            <div className={styles.dishesSlogan}>
              <p
                className={styles.welcomeToThe}
              >{`Welcome to The Biggest Network of Food Ordering & Delivery`}</p>
            </div>
          </div>
        </div>
        <div className={styles.dealCards}>
          <div className={styles.cardList}>
            <div className={styles.cards}>
              <div className={styles.card7}>
                <div className={styles.base} />
                <div className={styles.pizzaIcon}>
                  <div className={styles.iconOne} />
                  <div className={styles.div}>🍕</div>
                </div>
                <div className={styles.pizzaLabel}>
                  <div className={styles.pizza}>Pizza</div>
                </div>
              </div>
              <div className={styles.card03}>
                <div className={styles.base1} />
                <div className={styles.burgerIcon}>
                  <div className={styles.iconTwo} />
                  <div className={styles.div1}>🍔</div>
                </div>
                <div className={styles.burgerLabel}>
                  <div className={styles.burger}>Burger</div>
                </div>
              </div>
              <div className={styles.card01}>
                <div className={styles.base2} />
                <div className={styles.sushiIcon}>
                  <div className={styles.iconThree} />
                  <div className={styles.div2}>🍣</div>
                </div>
                <div className={styles.sushiLabel}>
                  <div className={styles.sushi}>Sushi</div>
                </div>
              </div>
            </div>
            <div className={styles.cards1}>
              <div className={styles.cardsChild} />
              <div className={styles.findDealsFreeContainer}>
                <span className={styles.find}>{`Find `}</span>
                <span className={styles.deals}>deals</span>
                <span className={styles.span1}>{`, `}</span>
                <span className={styles.freeDelivery}>free delivery</span>
                <span className={styles.andMoreFrom}>
                  , and more from our restaurant partners.
                </span>
              </div>
              <div className={styles.illustrationsWrapper}>
                <img
                  className={styles.illustrationsIcon}
                  loading="lazy"
                  alt=""
                  src="/illustrations.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.testimonialContent}>
            <div className={styles.vectorParent}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <blockquote className={styles.loremIpsumDolor}>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </blockquote>
            </div>
          </div>
          <div className={styles.foodCards}>
            <div className={styles.card06}>
              <div className={styles.base3} />
              <div className={styles.foodIcons}>
                <div className={styles.icons} />
                <div className={styles.div3}>🍝</div>
              </div>
              <div className={styles.foodLabels}>
                <div className={styles.pasta}>Pasta</div>
              </div>
            </div>
            <div className={styles.card05}>
              <div className={styles.base4} />
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <div className={styles.div4}>🥗</div>
              </div>
              <div className={styles.saladWrapper}>
                <div className={styles.salad}>Salad</div>
              </div>
            </div>
            <div className={styles.card04}>
              <div className={styles.base5} />
              <div className={styles.ellipseGroup}>
                <div className={styles.frameItem} />
                <div className={styles.div5}>🍰</div>
              </div>
              <div className={styles.dessertsWrapper}>
                <div className={styles.desserts}>Desserts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Dishes.propTypes = {
  className: PropTypes.string,
};

export default Dishes;
