import React from 'react';

const HeroText = () => {
  const text = 'Quality Products,Trusted Suppliers';
  const secondaryText =
    'Find everything you need for your business from verified global suppliers. Enjoy secure transactions and reliable delivery.';
  const firstTextSplit = text.split(',');
  const secondTextSplit = secondaryText.split('.');
  return (
    <>
      <h1 className="w-full text-5xl font-semibold">
        {firstTextSplit.map((part, index) => (
          <span key={index}>
            {part}
            {index < firstTextSplit.length - 1 && <br />}
          </span>
        ))}
      </h1>
      <p className="">
        {secondTextSplit.map((part, index) => (
          <span key={index}>
            {part}
            {index < firstTextSplit.length - 1 && <br />}
          </span>
        ))}
      </p>
    </>
  );
};

export default HeroText;
