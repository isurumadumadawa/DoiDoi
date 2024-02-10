import { PromoVideo } from 'components/shared/PromoVideo/PromoVideo';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import { useState } from 'react';
import PromoNumberData from 'data/promoNumber/promoNumber';

export const AboutPromo = () => {
  const [play, setPlay] = useState(false);

  const promoNumber = [...PromoNumberData];
  const url = play
    ? 'https://www.youtube.com/embed/K1yp7Q1hH1c'
    : '';
  return (
    <>
      {/* <!-- BEGIN PROMO VIDEO --> */}
      <section className='promo-video'>
        <div className='wrapper'>
          <SectionTitle
            title='Welcome to දො යි දො යි'
            subTitle='Promotion video'
            body={`We are not just a formal spa where we take social responsibility as our prime obligation by forming revenue streams for different abled individuals. Since the most of our therapists are differently abled, one of our top objectives is to facilitate their well-being. We break disability barriers and celebrate their abilities."`}
          />

          <div className='promo-video__block'>
            <PromoVideo
              videoUrl={url}
              play={play}
              onVideoPlay={() => setPlay(true)}
              image='/assets/img/promo-video-img.jpg'
            />
          </div>

          <div className='promo-video__nums'>
            {promoNumber.map((promo, index) => (
              <div key={index} className='promo-video__num'>
                <span>{promo.number}</span>
                <h5>{promo.name}</h5>
              </div>
            ))}
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          src='/assets/img/promo-video__decor.jpg'
          alt=''
        />
      </section>
      {/* <!-- PROMO VIDEO EOF   --> */}
    </>
  );
};
