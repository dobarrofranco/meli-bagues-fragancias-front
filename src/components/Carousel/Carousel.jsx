import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useSelector } from 'react-redux';
import image1 from '../../images/IMG_20230421_101944.jpg'
import image2 from '../../images/IMG_20230421_102011.jpg'
import image3 from '../../images/IMG_20230421_102027.jpg'
import image4 from '../../images/IMG_20230421_102050.jpg'
import image5 from '../../images/IMG_20230421_102308.jpg'
import image6 from '../../images/IMG_20230421_102329.jpg'

import './Carousel.css'

const Carousel = () => {

    const products = useSelector(state => state.products);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };


    return (

        <div >

            <Slider className="sliderContainer" {...settings}>

                {/* {products.map(product => (
                    <div>
                        <img key={product?.id} className="imgCarousel" src={product.image} alt={product.name} />
                    </div>
                ))} */}

                <div>
                    <img className="imgCarousel" src={image1} alt="" />
                </div>
                <div>
                    <img className="imgCarousel" src={image2} alt="" />
                </div>
                <div>
                    <img className="imgCarousel" src={image3} alt="" />
                </div>
                <div>
                    <img className="imgCarousel" src={image4} alt="" />
                </div>
                <div>
                    <img className="imgCarousel"src={image5} alt="" />
                </div>
                <div>
                    <img className="imgCarousel" src={image6} alt="" />
                </div>

                {/* <div>
                    <img className="imgCarousel" src="https://picsum.photos/seed/picsum/800/800" alt="" />
                </div>
                <div>
                    <img className="imgCarousel" src="https://picsum.photos/seed/arg/800/800" alt="" />
                </div>
                <div>
                    <img className="imgCarousel" src="https://picsum.photos/seed/esa/800/800" alt="" />
                </div>
                <div>
                    <img className="imgCarousel" src="https://picsum.photos/seed/si/800/800" alt="" />
                </div>
                <div>
                    <img className="imgCarousel" src="https://picsum.photos/seed/123/800/800" alt="" />
                </div>
                <div>
                    <img className="imgCarousel" src="https://picsum.photos/seed/321/800/800" alt="" />
                </div>
                <div>
                    <img className="imgCarousel" src="https://picsum.photos/seed/asda/800/800" alt="" />
                </div>
                <div>
                    <img className="imgCarousel" src="https://picsum.photos/seed/wer/800/800" alt="" />
                </div>
                <div>
                    <img className="imgCarousel" src="https://picsum.photos/seed/uwuwu/800/800" alt="" />
                </div>
                <div>
                    <img className="imgCarousel" src="https://picsum.photos/seed/sisis/800/800" alt="" />
                </div> */}
            </Slider>
        </div>
    )

}

export default Carousel
