import React, { useState } from "react";
import styles from "./Paginator.module.css";
import cn from "classnames";

export const Paginator = (props: any) => {
  const { totalItemsCount, pageSize, onClickPageChanges, currentPage, portionSize = 10 } = props;

  const pagesCount = Math.ceil(totalItemsCount / pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.countPage}>
      { portionNumber > 1 &&
      <button onClick={()=>{setPortionNumber(portionNumber - 1)}}>Назад</button>}
        {
          pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
              return <span className={
                cn({
                  [styles.selectedPage]: currentPage === p
                }, styles.pageNumber)}
              key={p}
              onClick={e => onClickPageChanges(p)}>{p}</span>
            })
      }
      {portionCount > portionNumber &&
        <button onClick={()=> setPortionNumber(portionNumber + 1)}>Вперед</button>}
    </div>
  );
};
