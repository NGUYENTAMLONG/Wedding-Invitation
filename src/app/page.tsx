'use client';

import Image from 'next/image';
import mainTheme from '../../public/images/Rectangle 511.svg';
import leaf from '../../public/images/leaf.svg';
import object from '../../public/images/object.svg';
import groom from '../../public/images/Hugh_Jackman.webp';
import bride from '../../public/images/Jean_Grey.webp';
import symbol from '../../public/images/symbol.svg';
import { GiDandelionFlower } from 'react-icons/gi';
import { useEffect, useState, useCallback } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import FlipPhoto from '../components/Flipbook';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [displayText, setDisplayText] = useState('');

  const renderText = useCallback(
    (text: string) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
          if (currentIndex <= text.length) {
            setDisplayText(text.substring(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(interval);
          }
        }, 50); // Tốc độ hiển thị từng chữ

        return () => clearInterval(interval);
      }, [text]);

      return <span>{displayText}</span>;
    },
    [displayText],
  );

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    // Thêm countdown timer
    const weddingDate = '2025-06-30T09:00:00'; // Ngày cưới: 30/05/2025 lúc 9h sáng

    const timer = setInterval(() => {
      const now = new Date();
      const wedding = new Date(weddingDate);
      const diff = wedding.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="section-1 relative w-full h-[800px]">
        <Image
          src={mainTheme}
          alt="main theme"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-brown-primary text-center">
          <h2
            className="font-thin mt-52"
            style={{ fontSize: 'clamp(2rem, 8vw, 6rem)' }}
            // data-aos="fade-up"
            // data-aos-offset="300"
            // data-aos-easing="ease-in-sine"
          >
            Save The Date
          </h2>

          <div className="mt-1 space-y-1 text-[clamp(1rem,2.5vw,1.5rem)] font-light">
            <p
              className="font-thin"
              style={{ fontSize: 'clamp(2rem, 6vw, 3rem)' }}
            >
              Logan & Jean
            </p>
            <p className="sm:text-xl lg:text-2xl font-thin">
              Yên Dũng - Bắc Giang
            </p>
            <p className="sm:text-xl lg:text-2xl font-thin">21 - 03</p>
            <p className="sm:text-xl lg:text-2xl font-thin">(Dương lịch)</p>
          </div>
        </div>
      </div>

      <div className="section-2 container relative w-full h-auto py-10">
        <div className="flex-center">
          <Image src={leaf} alt="leaf icon" className="" />
        </div>
        <div className="flex-center flex-col">
          <p className="text-brown-primary text-4xl lg:text-5xl">
            Cô dâu và Chú rể
          </p>
          <div className="w-full px-20">
            <p className="intro text-2xl" data-aos="fade-up">
              {renderText(
                'Từ những ngày đầu ngây ngô, qua bao chặng đường trưởng thành, họ đã cùng nhau viết nên câu chuyện tình yêu đầy ấm áp. Hôm nay, họ chính thức nắm tay nhau bước vào chương mới – chương của sự gắn bó trọn đời.',
              )}
            </p>
            <Image src={object} alt="object icon" className="w-full" />
          </div>
        </div>
      </div>

      <div className="section-3 bg-white w-full">
        <div className="container relative flex flex-col md:flex-row py-4">
          <div className="groom-avatar flex-center p-4 md:p-0">
            <Image
              src={groom}
              alt="groom"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover"
            />
          </div>
          <div className="groom-quotes py-10 md:py-20 px-4 md:px-20">
            <Image src={symbol} alt="groom" className="w-16 h-16" />
            <p className="groom-quotes-text text-base md:text-xl mt-4">
              Em đến như một món quà dịu dàng giữa cuộc sống tất bật. Cảm ơn em
              vì đã đồng hành, lắng nghe và không ngừng tin tưởng anh. Anh mong
              rằng chặng đường phía trước, dù nắng hay mưa, mình vẫn sẽ cùng
              nhau đi qua – với nụ cười và bàn tay nắm chặt.
            </p>
            <div className="flex-center mt-6">
              <div className="w-full border-t-4 border-red-500"></div>
              <GiDandelionFlower className="text-xl text-brown-primary" />
            </div>
            <p className="text-brown-primary text-sm md:text-lg text-right mt-4">
              Mr.Wolverine
            </p>
          </div>
        </div>
      </div>

      <div className="section-4 bg-[#c59a6eab] w-full">
        <div className="container relative flex flex-col md:flex-row">
          <div className="bride-quotes py-10 md:py-20 px-4 md:px-20 order-2 md:order-1">
            <Image src={symbol} alt="bride" className="w-16 h-16" />
            <p className="bride-quotes-text text-base md:text-xl mt-4">
              Anh đến như ánh nắng sớm mai, nhẹ nhàng sưởi ấm trái tim em những
              ngày tưởng chừng lạc lối. Cảm ơn anh vì đã kiên nhẫn, chở che và
              luôn bên em bằng tất cả chân thành. Em tin rằng hành trình phía
              trước, dù thăng trầm thế nào, mình vẫn sẽ cùng bước – với ánh nhìn
              yêu thương và vòng tay luôn dành cho nhau.
            </p>
            <div className="flex-center mt-6">
              <div className="w-full border-t-4 border-red-500"></div>
              <GiDandelionFlower className="text-xl text-brown-primary" />
            </div>
            <p className="text-white text-sm md:text-lg text-right mt-4">
              Ms.JeanGrey
            </p>
          </div>
          <div className="bride-avatar flex-center p-4 md:p-0 order-1 md:order-2">
            <Image
              src={bride}
              alt="bride"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      <div
        className="section-5 w-full
      py-16"
      >
        <FlipPhoto />
      </div>

      {/* Section countdown */}
      <div className="section-6 w-full py-16 bg-brown-primary">
        <div className="container">
          <h2
            className="text-4xl md:text-5xl text-center text-white mb-10"
            data-aos="fade-up"
          >
            Đếm ngược đến ngày trọng đại
          </h2>

          <div className="flex justify-center items-center gap-4 md:gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-white w-20 h-20 md:w-28 md:h-28 rounded-lg flex-center">
                <span className="text-4xl md:text-6xl text-brown-primary">
                  {timeLeft.days}
                </span>
              </div>
              <span className="text-white text-xl mt-2">Ngày</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white w-20 h-20 md:w-28 md:h-28 rounded-lg flex-center">
                <span className="text-4xl md:text-6xl text-brown-primary">
                  {timeLeft.hours}
                </span>
              </div>
              <span className="text-white text-xl mt-2">Giờ</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white w-20 h-20 md:w-28 md:h-28 rounded-lg flex-center">
                <span className="text-4xl md:text-6xl text-brown-primary">
                  {timeLeft.minutes}
                </span>
              </div>
              <span className="text-white text-xl mt-2">Phút</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white w-20 h-20 md:w-28 md:h-28 rounded-lg flex-center">
                <span className="text-4xl md:text-6xl text-brown-primary">
                  {timeLeft.seconds}
                </span>
              </div>
              <span className="text-white text-xl mt-2">Giây</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section locations */}
      <div className="section-6 w-full py-16">
        <div className="container">
          <h2
            className="text-4xl md:text-5xl text-center  mb-10"
            data-aos="fade-up"
          >
            Địa điểm
          </h2>
          <p className="text-center text-3xl font-bold">
            Chúng mình rất hân hạnh được đón tiếp bạn vào ngày trọng đại này!
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4">
            <div className="flex-center flex-col w-full md:w-1/2 max-w-[600px] mb-8 md:mb-0 mt-4">
              <div className="text-xl mb-4 text-center mt-5 md:mt-0">
                <p className="font-bold text-2xl">Nhà trai</p>
                <p>Ông: Nguyễn Văn A</p>
                <p>Bà: Nguyễn Thị B</p>
                <p>12/11 (13/11-âm lịch)</p>
              </div>
              <div className="location w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d475929.36977693386!2d105.66272735595705!3d21.263620640965545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31356f00225cef29%3A0x5ca5f059819eeb0d!2zVHLGsOG7nW5nIFRIUFQgWcOqbiBExaluZyBT4buRIDI!5e0!3m2!1svi!2s!4v1748779478618!5m2!1svi!2s"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="flex-center flex-col w-full md:w-1/2 max-w-[600px]">
              <div className="text-xl mb-4 text-center">
                <p className="font-bold text-2xl">Nhà gái</p>
                <p>Ông: Nguyễn Văn C</p>
                <p>Bà: Nguyễn Thị D</p>
                <p>12/11 (13/11-âm lịch)</p>
              </div>
              <div className="location w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d475929.36977693386!2d105.66272735595705!3d21.263620640965545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31356f00225cef29%3A0x5ca5f059819eeb0d!2zVHLGsOG7nW5nIFRIUFQgWcOqbiBExaluZyBT4buRIDI!5e0!3m2!1svi!2s!4v1748779478618!5m2!1svi!2s"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
