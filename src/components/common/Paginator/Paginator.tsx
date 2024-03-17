import React from "react";
import styles from "./Paginator.module.css";

export const Paginator = (props: any) => {
  const { onClickPageChanges, currentPage } = props;

  const pagesCountArray = [];
  for (let i = 1; i <= 5; i++) {
    pagesCountArray.push(i);
  }

  return (
    <div className={styles.countPage}>
      {pagesCountArray.map((number, index) => (
        <span
          key={index}
          onClick={() => onClickPageChanges(number)}
          className={currentPage === number ? styles.selectedPage : ""}
        >
          {number}
        </span>
      ))}
    </div>
  );
};
