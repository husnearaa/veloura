import Image from "next/image";
import VisionStar from '@/assets/icons/star.png'

const VisionOfVeloura = () => {
  return (
    <div>
      <section className="w-full pb-[100px] pt-[70px] md:pb-[170px] px-6 md:px-10">
        <div className="max-w-[666px] w-full mx-auto flex flex-col items-center gap-2 md:gap-6">
          <Image
            src={VisionStar}
            className="w-[80px] h-[80px]"
            width={500}
            height={500}
            alt="vlada sologan"
          />
          <h2 className="text-primary text-[33px] md:text-[77.188px] leading-[80px] tracking-[-1.2px] font-inter text-center">
            Designed by Us, Perfected for You
          </h2>
          <p className="text-base md:text-[17.297px] text-primary leading-[24.75px] font-inter text-center">
            At Vlada, we offer a customization option for every dress. Every
            piece can be made in your size and with your specific needs. Please
            make sure you select the right size and collection when ordering. If
            you&apos;d like to change or customize anything, just contact us
            through our page or WhatsApp to speak directly with our designers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default VisionOfVeloura;
