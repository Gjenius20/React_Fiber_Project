import { EffectFade, Navigation } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';


const Slider = () => {
  return (
    <Swiper 
    modules={(Navigation, EffectFade)}
    navigation 
    effect 
    speed={800}
    slidesPerView={1}
    loop 
    className=''>

        <SwiperSlide>
            <img src="" alt="" className="" />
            <p className='m-6 p-3 text-center bg-red-800 m-6 p-5 rounded-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur eum ducimus ea, eligendi quaerat, nobis voluptatem maxime corrupti consectetur obcaecati repellat quos porro. Fuga suscipit molestiae perspiciatis odit delectus est!</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src="" alt="" className="" />
            <p className='m-6 p-3 text-center bg-blue-800 m-6 p-5 rounded-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur eum ducimus ea, eligendi quaerat, nobis voluptatem maxime corrupti consectetur obcaecati repellat quos porro. Fuga suscipit molestiae perspiciatis odit delectus est!</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src="" alt="" className="" />
            <p className='m-6 p-3 text-center bg-green-800 m-6 p-5 rounded-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur eum ducimus ea, eligendi quaerat, nobis voluptatem maxime corrupti consectetur obcaecati repellat quos porro. Fuga suscipit molestiae perspiciatis odit delectus est!</p>
        </SwiperSlide>
        



    </Swiper>
  );
};

export default Slider;