import Carousel from 'react-bootstrap/Carousel';


function Slider() {
  return (
    <div className='slider'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fccu18-1.fna.fbcdn.net/v/t1.6435-9/165686796_254607169663752_3034720709179679227_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=19026a&_nc_ohc=fCGjdO8j7UcAX_v8z6h&_nc_ht=scontent.fccu18-1.fna&oh=00_AfBMAY-Fzhr7QWrfNbczliKNC85PYpUUdqHigXUiVgVRVw&oe=645F95B4" height="550px"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.mckvie.edu.in/wp-content/uploads/2021/05/college_building.jpg" height="550px"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fccu18-1.fna.fbcdn.net/v/t39.30808-6/336881633_156782863616044_7297531814094341053_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=W6PF0hmu9RoAX_HQdEV&_nc_ht=scontent.fccu18-1.fna&oh=00_AfDu38-Re2zamsrmSNVhhFgMdwrQmvZqfDvtZOcJPslbJw&oe=643D602B" height="550px"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lsplwebsitedata.s3.ap-south-1.amazonaws.com/mckvi-wp-data/wp-content/uploads/2022/12/08165513/UtopiaWeb.jpg" height="550px"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          <p>
            {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://scontent.fccu18-1.fna.fbcdn.net/v/t39.30808-6/273011698_453099849814482_2205560438973126697_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=19026a&_nc_ohc=7E0sR1Je2MIAX-tMs7g&_nc_ht=scontent.fccu18-1.fna&oh=00_AfCmWWbb3zObiFSHsHTPFbo-sMDkAvJ-zYcgooOesoKZqw&oe=643BE4E5" height="550px"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          <p>
            {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slider;