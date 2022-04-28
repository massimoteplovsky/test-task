import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image from '../assets/images/slide.jpg';
import { ReactNode } from 'react';

const slides = new Array(3).fill({
  title: 'IT-инфраструктура для бизнеса',
  description: `Мы предлагаем комплексные решения для всех уровней бизнеса: от
    индивидуальных предпринимателей до крупных международных компаний.
    Более 20 000 клиентов по всему миру доверяют нам.`,
  image,
});

export const Carousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    adaptiveHeight: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider className="carousel" {...settings}>
      {slides.map(({ title, description, image }, index) => (
        <div key={index}>
          <div
            className="carousel__item"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="carousel__container">
              <h2 className="carousel__item-title">{title}</h2>
              <p className="carousel__item-description">{description}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
