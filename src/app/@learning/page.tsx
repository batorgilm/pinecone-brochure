import { Container } from '@/components/Container';
import React from 'react';

const Learning = () => {
  return (
    <section className="mt-20">
      <Container className="">
        <h6 className="text-[#ffffff60]">ХӨТӨЛБӨР</h6>
        <h1 className="text-[24px] font-semibold">Project-based Learning</h1>
        <p className="text-[#ffffff80] leading-loose">
          Нийт сургалтын цагийн 20 хувьд онол, 80 хувьд тухайн онолд суурилсан
          практик дээр ажиллах тул төгсөөд шууд ажиллах ур чадварыг эзэмшинэ.
        </p>
      </Container>
      <div className="grid grid-cols-5 gap-4 mt-4">
        <Container className={''}>
          <p>Онол</p>
          <h1 className="text-[#0156FD] text-[24px] font-bold">20%</h1>
        </Container>
        <Container className="col-span-4">
          <p>Практик</p>
          <h1 className="text-[#0156FD] text-[24px] font-bold">80%</h1>
        </Container>
      </div>
    </section>
  );
};

export default Learning;
