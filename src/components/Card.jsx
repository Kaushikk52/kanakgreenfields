import React from 'react';

export default function Card({ 
  title, 
  description, 
  image, 
  mode = 'center', 
  bgColor = 'bg-[#457f5e]' 
}) {
  const hasImage = mode === 'top' || mode === 'bottom';

  return (
    <div className="w-[250px] md:min-w-[500px] md:min-h-[650px]  h-[350px] rounded-lg overflow-hidden relative">
      {hasImage && image && (
        <img src={image} alt={title} className="object-cover w-full h-full" />
      )}
      
      {mode === 'center' && (
        <div className={`absolute inset-0 p-10 flex flex-col justify-center bg-[#457f5e] text-white`}>
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <p className="md:text-2xl text-lg mt-10">{description}</p>
        </div>
      )}

      {mode === 'top' && (
        <div className="absolute inset-0 p-10 bg-gradient-to-b from-35% bg-[#457f5e] to-transparent flex flex-col justify-start  text-white">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="md:text-2xl text-lg mt-10">{description}</p>
        </div>
      )}

      {mode === 'bottom' && (
        <div className="absolute inset-0 p-10 bg-gradient-to-t from-35% bg-[#457f5e] to-transparent flex flex-col justify-end  text-white">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="md:text-2xl text-lg mt-10">{description}</p>
        </div>
      )}
    </div>
  );
}
