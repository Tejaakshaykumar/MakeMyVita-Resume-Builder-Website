import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './cont.css';
import { Autoplay } from 'swiper/modules';

export default function App() {
  const reviews = [
    {
      text: "Make My Vita has made creating my resume so easy and efficient. The templates are professional and customizable.",
      rating: 5,
      reviewer: "Shantanu Narayen"
    },
    {
      text: "I was able to land my dream job thanks to the beautifully designed resume from Make My Vita. Highly recommend!",
      rating: 5,
      reviewer: "Arvind Krishna"
    },
    {
      text: "The user interface is very intuitive, and I love the variety of templates available. Great tool for job seekers!",
      rating: 4,
      reviewer: "Parag Agrawal"
    },
    {
      text: "Make My Vita provided a seamless experience in creating a standout resume. Worth every penny!",
      rating: 5,
      reviewer: "Nikesh Arora"
    },
    {
      text: "A fantastic resume builder! The customization options allowed me to create a unique resume that impressed employers.",
      rating: 4,
      reviewer: "Rajeev Suri"
    },
    {
      text: "Make My Vita is a game-changer for job applications. The export options are also very convenient.",
      rating: 5,
      reviewer: "Roshni Nadar Malhotra"
    },
    {
      text: "Creating a resume has never been easier. Make My Vita offers great value and excellent results.",
      rating: 4,
      reviewer: "Padmasree Warriors"
    },
    {
      text: "The customer support is very responsive and helpful. I got quick assistance whenever I needed it.",
      rating: 5,
      reviewer: "Vinod Khosla"
    },
    {
      text: "I love how user-friendly and efficient Make My Vita is. It helped me create a polished resume in no time.",
      rating: 5,
      reviewer: "Sundar Balakrishnan"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <i key={i} className={`bi bi-star-fill ${i < rating ? 'gold-star' : 'gray-star'}`}></i>
    ));
  };

  return (
    <section className="swiper-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {reviews.slice(0, 3).map((review, index) => (
          <SwiperSlide key={index}>
            <p>{review.text}</p>
            <div>{renderStars(review.rating)}</div>
            <p>- {review.reviewer}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {reviews.slice(3, 6).map((review, index) => (
          <SwiperSlide key={index}>
            <p>{review.text}</p>
            <div>{renderStars(review.rating)}</div>
            <p>- {review.reviewer}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {reviews.slice(6, 9).map((review, index) => (
          <SwiperSlide key={index}>
            <p>{review.text}</p>
            <div>{renderStars(review.rating)}</div>
            <p>- {review.reviewer}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
