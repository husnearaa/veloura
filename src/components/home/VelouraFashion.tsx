"use client";

import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const videos = [
  "/reels/veloura_reel_1.mp4",
  "/reels/veloura_reel_2.mp4",
  "/reels/veloura_reel_3.mp4",
  "/reels/veloura_reel_4.mp4",
  "/reels/veloura_reel_5.mp4",
  "/reels/veloura_reel_6.mp4",
  "/reels/veloura_reel_7.mp4",
];

const VelouraFashion = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [mutedState, setMutedState] = useState<boolean[]>(
    videos.map(() => false)
  );

  const pauseAllVideos = () => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
      }
    });
    setPlayingIndex(null);
  };

  const handlePlayPause = async (index: number) => {
    const currentVideo = videoRefs.current[index];
    if (!currentVideo) return;

    if (playingIndex === index && !currentVideo.paused) {
      currentVideo.pause();
      setPlayingIndex(null);
      return;
    }

    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
        video.currentTime = 0;
      }
    });

    try {
      await currentVideo.play();
      setPlayingIndex(index);
    } catch (error) {
      console.error("Video play failed:", error);
    }
  };

  const toggleMute = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    const updatedMuted = [...mutedState];
    updatedMuted[index] = !updatedMuted[index];
    video.muted = updatedMuted[index];
    setMutedState(updatedMuted);
  };

  return (
    <div>
      <h1 className="text-center text-[42px] font-semibold my-5">
        Where fashion meets class
      </h1>

      <p className="text-center mt-3 text-base text-[#737373] mb-8 capitalize">
        Discover the elegance of our designer collection
      </p>

      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute left-0 top-0 w-36 h-full bg-gradient-to-r from-gray-100 via-gray-100/50 to-transparent z-20 pointer-events-none hidden md:block" />
        <div className="absolute right-0 top-0 w-36 h-full bg-gradient-to-l from-gray-100 via-gray-100/50 to-transparent z-20 pointer-events-none hidden md:block" />

        <div className="flex items-center justify-center h-full px-4">
          <div className="w-full flex items-center">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView="auto"
              spaceBetween={30}
              grabCursor={true}
              speed={700}
              className="w-full"
              onSlideChange={() => pauseAllVideos()}
            >
              {videos.map((video, index) => {
                const isPlaying = playingIndex === index;

                return (
                  <SwiperSlide
                    key={index}
                    className="!flex !items-center !justify-center !h-[765px]"
                    style={{ width: "422px" }}
                  >
                    <div
                      className={`relative rounded-xl overflow-hidden transition-all duration-300 w-[422px] h-[615px] ${
                        index % 2 === 0 ? "md:-mt-[120px]" : "md:mt-[120px]"
                      }`}
                    >
                      <div className="relative group md:w-full md:h-full">
                        <video
                          ref={(el) => {
                            videoRefs.current[index] = el;
                          }}
                          src={video}
                          className="w-full h-full object-cover rounded-lg"
                          playsInline
                          preload="metadata"
                          muted={mutedState[index]}
                          onPlay={() => setPlayingIndex(index)}
                          onPause={() => {
                            if (playingIndex === index) setPlayingIndex(null);
                          }}
                        />

                        {!isPlaying && (
                          <button
                            type="button"
                            onClick={() => handlePlayPause(index)}
                            className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center rounded-lg cursor-pointer"
                            aria-label="Play video"
                          >
                            <span className="w-[68px] h-[68px] rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                              <Play size={36} className="text-white ml-1" />
                            </span>
                          </button>
                        )}

                        {isPlaying && (
                          <>
                            <button
                              type="button"
                              onClick={() => handlePlayPause(index)}
                              className="absolute bottom-4 left-4 w-11 h-11 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white z-20"
                              aria-label="Pause video"
                            >
                              <Pause size={20} />
                            </button>

                            <button
                              type="button"
                              onClick={() => toggleMute(index)}
                              className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white z-20"
                              aria-label={mutedState[index] ? "Unmute video" : "Mute video"}
                            >
                              {mutedState[index] ? (
                                <VolumeX size={20} />
                              ) : (
                                <Volume2 size={20} />
                              )}
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-30"
              aria-label="Previous slide"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-30"
              aria-label="Next slide"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VelouraFashion;