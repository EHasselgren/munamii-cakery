
export const defaultSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  export const homeSliderSettings = {
    ...defaultSliderSettings,
    dots: false,  
  };
  
  