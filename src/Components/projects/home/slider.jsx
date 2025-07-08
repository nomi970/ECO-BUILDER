import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import style from './home.module.css';

const Slider = () => {
  const [isGridPopupOpen, setIsGridPopupOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const slides = [
    {
      id: 1,
      image: 'https://cdn.pixabay.com/photo/2024/08/16/19/08/architecture-8974490_640.jpg',
      title: 'Elegant Architecture',
      subtitle: 'Modern and sustainable design'
    },
    {
      id: 2,
      image: 'https://cdn.pixabay.com/photo/2024/09/18/07/04/ai-generated-9055463_640.jpg',
      title: 'Refurbished Spaces',
      subtitle: 'Comfort meets function'
    },
    {
      id: 3,
      image: 'https://cdn.pixabay.com/photo/2015/01/29/03/19/mock-up-615668_640.jpg',
      title: 'Landscaping Wonders',
      subtitle: 'Outdoor elegance reimagined'
    },
    {
      id: 4,
      image: 'https://cdn.pixabay.com/photo/2024/08/16/19/08/architecture-8974490_640.jpg',
      title: 'Elegant Architecture',
      subtitle: 'Modern and sustainable design'
    },
    {
      id: 5,
      image: 'https://cdn.pixabay.com/photo/2024/09/18/07/04/ai-generated-9055463_640.jpg',
      title: 'Refurbished Spaces',
      subtitle: 'Comfort meets function'
    },
    {
      id: 6,
      image: 'https://cdn.pixabay.com/photo/2015/01/29/03/19/mock-up-615668_640.jpg',
      title: 'Landscaping Wonders',
      subtitle: 'Outdoor elegance reimagined'
    }
  ];

  const openGridPopup = () => setIsGridPopupOpen(true);
  const closeGridPopup = () => {
    setIsGridPopupOpen(false);
    setPreviewImage(null);
  };
  const openPreview = (img) => setPreviewImage(img);
  const closePreview = () => setPreviewImage(null);

  return (
    <>
      <section className={style.slider_sec}>
        <div className='custom-container'>
         <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={3}
  navigation
  pagination={{
    clickable: true,
    el: '.custom-swiper-pagination' // 👈 external pagination
  }}
  autoplay={{ delay: 123000 }}
  loop={true}
  breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  }}
>

            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className={style.slide} onClick={openGridPopup}>
                  <img src={slide.image} alt={slide.title} className={style.slideImage} />
                  <div className={style.overlay}>
                    <h2 className={style.title}>{slide.title}</h2>
                    <p className={style.subtitle}>{slide.subtitle}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 👇 External pagination container */}
          <div className="custom-swiper-pagination"></div>

          {/* Grid Popup Modal */}
          {isGridPopupOpen && (
            <div className={style.modalOverlay}>
              <div className={style.modalContent}>
              <div className={style.gallry_wrapper}>
                <h2>Gallery</h2>
                 <button className={style.closeButton} onClick={closeGridPopup}>✖</button>
              </div>
               
                <div className={style.imageGrid}>
                  {slides.map((slide, idx) => (
                    <img
                      key={idx}
                      src={slide.image}
                      alt={slide.title}
                      className={style.gridImage}
                      onClick={() => openPreview(slide.image)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Image Preview Modal */}
          {previewImage && (
            <div className={style.previewOverlay} onClick={closePreview}>
              <div className={style.previewContent} onClick={(e) => e.stopPropagation()}>
                <button className={style.previewClose} onClick={closePreview}>✖</button>
                <img src={previewImage} alt="Preview" className={style.previewImage} />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Slider;
