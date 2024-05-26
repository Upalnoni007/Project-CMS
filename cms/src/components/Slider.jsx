import Carousel from 'react-bootstrap/Carousel';
import './css/Slider.css';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item className='c-item'>
        <img
          className="d-block w-100 c-img"
          src="https://images.collegedunia.com/public/college_data/images/appImage/1594895059Cover.jpg"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item className='c-item'>
        <img
          className="d-block w-100 c-img"
          src="https://www.mckvie.edu.in/wp-content/uploads/2021/05/college_building.jpg"
          alt="Second slide"
        />


      </Carousel.Item>
      <Carousel.Item className='c-item'>
        <img
          className="d-block w-100 c-img"
          src="https://lsplwebsitedata.s3.ap-south-1.amazonaws.com/mckvi-wp-data/wp-content/uploads/2022/12/08165513/UtopiaWeb.jpg"
          alt="Third slide"
        />


      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;