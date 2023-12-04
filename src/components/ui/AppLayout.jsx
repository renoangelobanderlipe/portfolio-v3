import React from 'react';

export const AppLayout = ({ children, hasImage = true }) => {
  let bgImage = hasImage ? "bg-[url('bg-pattern.png')]" : "bg-bgColor";
  return (
    <div className={`${bgImage} py-[100px] bg-cover bg-no-repeat px-mainPhone md:px-[50px] lg:px-mainDesktop flex flex-col-reverse lg:flex-row items-center`}>
      {children}
    </div>
  );
}