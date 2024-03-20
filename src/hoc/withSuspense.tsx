import React, { Suspense } from "react";

export const withSuspense = (Component: any) => {
  return (props: any) => {
    return (
      <Suspense fallback={<div>Загрузка...</div>}>
        <Component {...props} />
      </Suspense>
    );
  };
};
