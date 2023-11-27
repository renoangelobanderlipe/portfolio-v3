import React from 'react';

export const AppLayout = ({ children, hasImage = true }) => {
  let bgImage = hasImage ? "bg-[url('bg-pattern.png')]" : "bg-bgColor";
  return (
    <div className={`${bgImage} py-[100px] h-screen bg-cover bg-no-repeat px-mainPhone lg:px-mainDesktop flex items-center`}>
      {children}
    </div>
  );
}