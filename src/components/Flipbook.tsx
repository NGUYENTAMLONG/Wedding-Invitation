/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';

const Pages = React.forwardRef<
  HTMLDivElement,
  { imageSrc: string, number: any },
>(({ imageSrc, number }, ref) => {
  return (
    <div ref={ref} className="demoPage w-full h-full overflow-hidden">
      <img
        src={imageSrc}
        alt={`Page ${number}`}
        className="w-full h-full object-cover"
      />
    </div>
  );
});

Pages.displayName = 'Pages';

function FlipPhoto() {
  const [currentPage, setCurrentPage] = useState(0);
  const imagePages = [
    '/images/p1.jpeg',
    '/images/p2.jpeg',
    '/images/p3.jpeg',
    '/images/p4.jpeg',
    '/images/p5.jpeg',
    '/images/p6.jpeg',
    '/images/p7.jpeg',
    '/images/p8.jpeg',
  ];

  return (
    <div className="h-screen w-screen flex flex-col gap-5 justify-center items-center bg-gray-900 overflow-hidden">
      <h1 className="text-3xl text-white text-center font-bold">FlipPhoto</h1>

      <HTMLFlipBook
        width={400}
        height={570}
        className={`cursor-pointer`}
        showCover={true}
        onFlip={(e) => setCurrentPage(e.data)}
      >
        {imagePages.map((src, idx) => (
          <Pages key={idx} imageSrc={src} number={idx + 1} />
        ))}
      </HTMLFlipBook>
    </div>
  );
}

export default FlipPhoto;
