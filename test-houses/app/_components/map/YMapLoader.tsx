import Script from 'next/script';
import React from 'react';

export const YMapLoader = () => {
  return (
    <>
      <Script
        src={`https://api-maps.yandex.ru/3.0/?apikey=a9c0bd39-d987-4a6e-9f92-42377c833e17&lang=en_US`}
        type="module"
        strategy="beforeInteractive"
      />
      
    </>
  );
};