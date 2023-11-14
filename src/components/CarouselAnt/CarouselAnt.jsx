import React from 'react';
import { Carousel } from 'antd';
import image1 from '../../images/banner1.jpg'
import image2 from '../../images/banner2.jpg'
import image3 from '../../images/IMG_20230421_102027.jpg'
import image4 from '../../images/IMG_20230421_102050.jpg'
import image5 from '../../images/IMG_20230421_102308.jpg'
import image6 from '../../images/IMG_20230421_102329.jpg'
import './CarouselAnt.css'

const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    width: '550px'
};
const CarouselAnt = () => {
    return (
        <div>

            <Carousel className='carContainer' autoplay >
                <div>
                    <img style={contentStyle} className="imgCarousel" src={image1} alt="" />
                </div>
                <div>
                    <img style={contentStyle} className="imgCarousel" src={image2} alt="" />
                </div>
                <div>
                    <img style={contentStyle} className="imgCarousel" src={image3} alt="" />
                </div>
                <div>
                    <img style={contentStyle} className="imgCarousel" src={image4} alt="" />
                </div>
                <div>
                    <img style={contentStyle} className="imgCarousel" src={image5} alt="" />
                </div>
                <div>
                    <img style={contentStyle} className="imgCarousel" src={image6} alt="" />
                </div>
            </Carousel>

        </div>
    )
}

export default CarouselAnt