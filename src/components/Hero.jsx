import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import education from "../assets/education.jpg"; 
import forest from "../assets/forest.jpg";
import healthcare from "../assets/healthcare.jpg";

const Hero = () => {
  return (
    <div className="py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full rounded-xl md:h-[600px]"
      >
        {/* Slide 1: Education */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between h-full bg-primary text-neutral">
            <div className="p-20 w-full text-center md:text-left">
              <h2 className="text-4xl font-bold mb-4">Empower Education</h2>
              <p className="text-lg">
                Help provide essential resources for schools in underprivileged communities.  
                Your support can make quality education accessible to more students.
              </p>
            </div>
            <div className="flex h-full md:w-2/3 justify-end p-4 lg:p-14">
              <img
                src={education}
                alt="Education Slide"
                className="rounded-lg shadow-lg h-auto"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2: Reforest */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between h-full bg-secondary text-neutral">
            <div className="p-20 w-full text-center md:text-left">
              <h2 className="text-4xl font-bold mb-4">Reforest Our Future</h2>
              <p className="text-lg">
                Join us in planting 10,000 trees to combat climate change and restore ecosystems.  
                Every contribution helps us move closer to a greener planet.
              </p>
            </div>
            <div className="flex h-full md:w-2/3 justify-end p-4 lg:p-14">
              <img
                src={forest}
                alt="Reforest Slide"
                className="rounded-lg shadow-lg h-auto"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3: Healthcare */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between h-full bg-accent text-neutral">
            <div className="p-20 w-full text-center md:text-left">
              <h2 className="text-4xl font-bold mb-4">Healthcare for All</h2>
              <p className="text-lg">
                Support our initiative to bring essential medical supplies to remote areas.  
                Together, we can ensure better healthcare access for everyone.
              </p>
            </div>
            <div className="flex h-full md:w-2/3 justify-end p-4 lg:p-14">
              <img
                src={healthcare}
                alt="Healthcare Slide"
                className="rounded-lg shadow-lg h-auto"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
