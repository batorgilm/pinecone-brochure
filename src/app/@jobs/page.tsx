import { Container } from '@/components/Container';
import { JobsIcon } from '@/components/icons/JobsIcon';
import { SoftwareEngineerIcon } from '@/components/icons/SoftwareEngineerIcon';
import { UXDesigner } from '@/components/icons/UXDesigner';

const Jobs = () => {
  return (
    <section className='mt-20 flex flex-col gap-4'>
      <Container className="p-10 flex flex-col items-center gap-10">
        <p className="font-semibold text-[24px]">
          Leap хөтөлбөрөөр дамжуулан{' '}
          <span className="text-[#0156FD]">2 мэргэжлээс</span> сонгон суралцана.
        </p>
        <JobsIcon />
      </Container>

      <Container className="p-10 flex flex-col gap-10 items-center">
        <SoftwareEngineerIcon />
        <div>
          <h1 className="text-[24px] font-bold mb-4">Software Engineer</h1>
          <p className="text-[#ffffff80] leading-loose">
            Amazon, Google, Meta гэх мэт томоохон компаниудаас авхуулаад дэлхий
            дахинд хамгийн өргөн хүрээнд ашиглагдаж буй MERN-Stack технологиуд
            дээр ажиллах ур чадварыг хөтөлбөрөөр дамжуулан эзэмшинэ.
          </p>
        </div>
      </Container>
      <Container className="p-10 flex flex-col gap-10 items-center">
        <UXDesigner />
        <div>
          <h1 className="text-[24px] font-bold mb-4">UX Designer</h1>
          <p className="text-[#ffffff80] leading-loose">
            Тэрбум хэрэглэгчидтэй Facebook, Instagram, Tiktok-ийн амжилтын нууц
            нь тэдний UX Design-д оршдог бөгөөд механизмаас хэрэглэгчидтэй шууд
            харьцах тулгуур шинжлэх ухаан юм.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Jobs;
