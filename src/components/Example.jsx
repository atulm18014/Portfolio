import React from 'react';

const Example = () => {
  return (
    <div className="container mx-auto">
      <h1 className="font-bebas text-5xl tracking-wide">This is Bebas Neue</h1>
      <p className="font-montserrat text-base">This is Montserrat text.</p>
      
      <div className="mt-8">
        <h2 className="font-bebas text-4xl tracking-wide">Font Weights with Montserrat</h2>
        <p className="font-montserrat font-light">Montserrat Light</p>
        <p className="font-montserrat font-normal">Montserrat Regular</p>
        <p className="font-montserrat font-medium">Montserrat Medium</p>
        <p className="font-montserrat font-semibold">Montserrat Semibold</p>
        <p className="font-montserrat font-bold">Montserrat Bold</p>
        <p className="font-montserrat font-extrabold">Montserrat Extra Bold</p>
      </div>
    </div>
  );
};

export default Example;
