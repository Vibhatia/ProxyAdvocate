import styles from "../styles/Featured.module.css";
import { useState } from "react";
import arrowLeft from "../assests/images/arrowl.png"
import arrowRight from "../assests/images/arrowr.png"
const Featured = (props) => {
  const [index, setIndex] = useState(0);
  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container} ref={props.servicesRef}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <img src={arrowLeft} style={{width:"100px",height:"100px"}}alt="" layout="fill" objectFit="contain" />
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        <div className={styles.imgContainer} id={styles.bg1}>
          <div className={styles.content}>
            Hey,there Welcome to our Community!
          </div>
        </div>
        <div className={styles.imgContainer} id={styles.bg2}>
          <div className={styles.content}>
            Hey,there Welcome to our Community!
          </div>
        </div>
        <div className={styles.imgContainer} id={styles.bg3}>
          <div className={styles.content}>
            Hey,there Welcome to our Community!
          </div>
        </div>
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <img src={arrowRight} style={{width:"100px",height:"100px"}} layout="fill" alt="" objectFit="contain" />
      </div>
    </div>
  );
};

export default Featured;
