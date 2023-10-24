'use client'

import Image from 'next/image';
import { useState } from 'react';

interface ProductImagesPros {
  imageUrls: string[];
  name: string;
}

const ProductImages = ({ imageUrls, name }: ProductImagesPros) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl)
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4'>
        <div className='bg-accent h-[380px] w-full flex items-center justify-center'>
          <Image
            src={currentImage}
            alt={name}
            height={0}
            width={0}
            sizes='100vw'
            className='h-auto max-h-[70%] w-auto max-w-[80%]'
            style={{
              objectFit: 'contain'
            }}
          />
        </div>

        <div className='flex gap-4 items-center justify-center'>
          {imageUrls.map(imageUrl =>
            <button
              onClick={() => handleImageClick(imageUrl)}
              key={imageUrl}
              className={`flex h-[85px] w-[85px] items-center justify-center rounded bg-accent ${imageUrl === currentImage && 'border-2 border-primary'}`}
            >
              <Image
                src={imageUrl}
                alt={name}
                height={0}
                width={0}
                sizes='100vw'
                className='h-auto max-h-[70%] w-auto max-w-[80%]'
                style={{
                  objectFit: 'contain'
                }}
              />
            </button>
          )}
        </div>
      </div>

      <div>
        
      </div>


    </div>
  );
}

export default ProductImages;