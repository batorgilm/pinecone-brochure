import { Container } from '@/components/Container';
import Image from 'next/image';
import imac from '@/assets/imac.png';
import tv from '@/assets/tv.png';
import m3 from '@/assets/m3.png';
import workinjoy from '@/assets/workinjoy.png';
import capacity from '@/assets/capacity.png';
const Environment = () => {
  return (
    <div className='mt-20'>
      <h1 className="text-[32px] pt-4">Сургалтын орчин</h1>
      <Container className="mt-4">
        <h6>iMac 2023</h6>
        <Image src={imac} alt="imac" width={470} height={500} />
      </Container>

      <Container className="mt-4">
        <h6>TV</h6>
        <Image src={tv} alt="tv" width={470} height={500} />
      </Container>

      <Container className="mt-4 flex justify-center items-center">
        {/* <h6>TV</h6> */}
        <Image src={m3} alt="tv" width={156} height={156} />
      </Container>
      <Container className="mt-4 flex justify-center items-center ">
        {/* <h6>TV</h6> */}
        <div className="py-4">
          <Image src={workinjoy} alt="tv" width={156} height={156} />
        </div>
      </Container>
      <Container className="mt-4 flex flex-col items-center">
        <Image src={capacity} alt="tv" width={156} height={80} />
        <h6>Ангийн эзэлхүүн</h6>
        <p className="text-[#ffffff80]">25</p>
      </Container>
    </div>
  );
};

export default Environment;
