import Image from "next/image";
import VisionImg from '@/assets/images/vision.jpg'

const Vision = () => {
  return (
    <section className="w-full">
      <div className="w-full relative">
        <div className="absolute top-[80px] inset-0 mx-auto flex justify-center z-20">
          <h2 className="text-center text-white text-[35px] md:text-[92px] leading-[118px] font-inter">
            VISION
          </h2>{" "}
        </div>
        <div className="absolute bottom-[60px] left-0 md:left-auto right-0 md:right-[60px] mx-auto md:mx-0 text-center md:text-left md:max-w-[506px] max-w-full w-full z-20 px-6 md:px-9">
          <h3 className="text-white text-sm mb-5 uppercase tracking-[1px] leading-[12px]">
            Be Your Own Icon
          </h3>
          <hr className="text-[#A3A3A3] mb-6" />
          <p className="text-white text-lg md:text-[28.945px] leading-[37.5px]">
            Be Your Own Icon
          </p>
        </div>
        <div
          className="w-full h-[400px] absolute top-0 left-0 right-0 1-20"
          style={{
            background:
              "linear-gradient(0deg, rgba(29, 29, 29, 0) 0%, rgb(29, 29, 29) 100%)",
          }}
        ></div>
        <div
          className="w-full h-[500px] absolute bottom-0 left-0 right-0 z-10"
          style={{
            background:
              "linear-gradient(rgba(29, 29, 29, 0) 0%, rgb(29, 29, 29) 100%)",
          }}
        ></div>
        <Image
          alt="vision"
          loading="lazy"
          width={2000}
          height={2000}
          decoding="async"
          className="w-full h-screen object-cover"
        //   src="https://server.vlada.store/uploads/image-1758648611650-703597560.jpg"
          src={VisionImg}
          style={{ color: "transparent" }}
        />
      </div>
    </section>
  );
};

export default Vision;
