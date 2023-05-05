import Carousel from 'react-bootstrap/Carousel';
import './css/Slider.css';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item className='c-item'>
        <img
          className="d-block w-100 c-img mx-auto"
          src="https://scontent.fccu18-1.fna.fbcdn.net/v/t1.6435-9/165686796_254607169663752_3034720709179679227_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=19026a&_nc_ohc=fCGjdO8j7UcAX_v8z6h&_nc_ht=scontent.fccu18-1.fna&oh=00_AfBMAY-Fzhr7QWrfNbczliKNC85PYpUUdqHigXUiVgVRVw&oe=645F95B4"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item className='c-item'>
        <img
          className="d-block w-100 c-img mx-auto"
          src="https://www.mckvie.edu.in/wp-content/uploads/2021/05/college_building.jpg"
          alt="Second slide"
        />


      </Carousel.Item>
      <Carousel.Item className='c-item'>
        <img
          className="d-block w-100 c-img mx-auto"
          src="https://lsplwebsitedata.s3.ap-south-1.amazonaws.com/mckvi-wp-data/wp-content/uploads/2022/12/08165513/UtopiaWeb.jpg"
        />


      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;