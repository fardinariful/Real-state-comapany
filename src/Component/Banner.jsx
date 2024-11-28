import photo1 from '../assets/240_F_97870953_V0Aq7dhJp2reT1GsGXy0vI2fdazTC9IX.jpg'
import photo2 from '../assets/240_F_843908066_U8l4xHifGeaLuSAmdYtzO1cuKFHo2rdU.jpg'
import photo3 from '../assets/240_F_261999985_waD5uRLvIzezu0OQLWKOBGvWyShliFaU.jpg'
import photo4 from '../assets/240_F_883710667_f0EPAal9zBKGDkgVH7hS85nNu06oFAc2.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={photo1}
      className="w-full h-96 rounded-lg" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={photo2}
      className="w-full  h-96 rounded-lg" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={photo3}
      className="w-full  h-96 rounded-lg" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={photo4}
      className="w-full h-96 rounded-lg" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;