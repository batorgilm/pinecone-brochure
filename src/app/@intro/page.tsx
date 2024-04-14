import { Logo } from '@/components/icons/Logo';
import React from 'react';
import image from '../../assets/image.png';
import Image from 'next/image';

const Page = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center">
      <Image
        src={image}
        alt="hero"
        style={{ width: '100%', height: '100vh' }}
      />
      <div className="absolute flex flex-col gap-40 leading-none">
        <Logo />
        <div>
          <h6 className="text-[24px] font-light">ХӨТӨЛБӨР</h6>
          <h1 className="text-[96px] font-bold">LEAP</h1>
          <p>Дэлхийд үнэлэгдэх Монгол инженер</p>
        </div>
      </div>
    </section>
  );
};

export default Page;
