import styled from "styled-components";

const CarouselcarouselWrapper = styled.div`
  .carousel-slick .slick-next {
    right: 0.2rem;
    top: 3.9rem !important;
    & i {
      font-size: 2.3rem;
      &:before {
        right: 0 !important;
        bottom: 0 !important;
        position: absolute;
      }
    }
  }

  .carousel-slick .slick-prev {
    left: 0.2rem;
    top: 3.9rem !important;
    & i {
      font-size: 2.3rem;
      &:before {
        left: 0 !important;
        bottom: 0 !important;
        position: absolute;
      }
    }

    @media (max-width: 780px) {
      i {
        font-size: 3rem;
      }
      left: 20px;
      top: 45px !important;
    }
    @media (max-width: 480px) {
      top: 36px !important;
    }
  }

  .carousel-slick .slick-next {
    @media (max-width: 780px) {
      i {
        font-size: 3rem;
      }
      right: 15px !important;
      top: 45px !important;
    }
    @media (max-width: 480px) {
      top: 36px !important;
    }
  }

  .carousel-slick .slick-prev,
  .carousel-slick .slick-next {
    background: transparent;
    color: #000;
    width: 20px;
    height: 20px;
    z-index: 9999;
    font-size: 20px;
    border-radius: 50%;
    bottom: 18px;
    top: auto;

    &.slick-disabled {
      color: #8a8585;
      opacity: 0.5;
    }

    &:hover,
    &:focus {
      background: transparent;
      color: #000;
    }

    &:before {
      content: " ";
      position: absolute;
      left: 36px;
      top: 13px;
    }
  }

  .card-carousel {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: #fff;

    @media (max-width: 780px) {
      max-width: 100%;
    }

    &_footer {
      width: 100%;
      @media screen and (min-width: 0\0) {
        min-height: 6rem;
      }
    }
  }

  @media (max-width: 780px) {
    .carousel-slick .slick-next {
      & i {
        &:before {
          right: -5px !important;
        }
      }
    }

    .carousel-slick .slick-prev {
      & i {
        &:before {
          left: -14px !important;
        }
      }
    }
  }

  main {
    display: block;
  }

  .ant-carousel .slick-initialized .slick-slide {
    display: block;
    flex-grow: 1;
  }

  .carteira-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 140px;
    align-items: center;
  }

  .nome-carteira {
    font-size: 18px;
    margin-bottom: 3px;
  }
  .quadro-icone-carteira {
    border: solid 2px;
    width: 35%;
    padding: 5px;
    align-items: center;
    margin: auto;
    display: flex;
    justify-content: center;

    .icone-carteira {
      font-size: 35px;
      font-weight: 700;
    }
  }
  .valor-carteira {
    font-size: 28px;
    margin-top: 3px;
  }
`;

export default CarouselcarouselWrapper;
