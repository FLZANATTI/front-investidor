import React from "react";
import { Carousel, Icon } from "antd";
import CarouselWrapper from "./Carousel.Style";
import { formatReal } from "../../Utils/FuncitonUtils";

const CarouselCarteira = ({ dataSource, onClickCompraAcao, afterChange }) => (
  <CarouselWrapper>
    {dataSource && dataSource.length > 0}
    <div className="card-carousel">
      <div className="card-carousel_footer">
        <Carousel
          className="carousel-slick"
          draggable
          dots={false}
          arrows
          infinite={false}
          afterChange={afterChange}
          nextArrow={<CustomNextArrow />}
          prevArrow={<CustomPrevArrow />}
          rtl
          slidesToShow={5}
          slidesToScroll={5}
        >
            {dataSource && dataSource.map((x) => (
              <div
                key={x.Nome && x.Nome}
                role="button"
                tabIndex="-1"
                onClick={() => onClickCompraAcao(x.Nome)}
                className="div-carousel"
              >
                <div className="carteira-card">
                <span className="nome-carteira">{x.Nome}</span>
                <div className="quadro-icone-carteira">
                  <Icon className="icone-carteira" type="dollar" />
                  </div>
                <span className="valor-carteira">{formatReal(x.Valor)}</span>
                </div>
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  </CarouselWrapper>
);

const CustomNextArrow = ({ ...props }) => {
  const { currentSlide, onClick, slideCount } = props;
  return (
    <button
      className={`slick-next ${
        currentSlide === slideCount - 1 && "slick-disabled"
      }`}
      onClick={onClick}
    >
      <Icon type="right" />
    </button>
  );
};

const CustomPrevArrow = ({ ...props }) => {
  const { currentSlide, onClick } = props;
  return (
    <button
      className={`slick-prev ${currentSlide === 0 && "slick-disabled"}`}
      onClick={onClick}
    >
      <Icon type="left" />
    </button>
  );
};

export default CarouselCarteira;
