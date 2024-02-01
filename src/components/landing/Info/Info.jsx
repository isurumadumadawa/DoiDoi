import { PromoVideo } from 'components/shared/PromoVideo/PromoVideo';
import { useState } from 'react';
import Link from 'next/link';

export const Info = () => {
  const [play, setPlay] = useState(false);
  const url = play
    ? 'https://www.youtube.com/embed/K1yp7Q1hH1c?autoplay=1'
    : '';
  return (
    <>
      {/* <!-- BEGIN INFO BLOCKS --> */}
      <div className='info-blocks'>
        <div
          className='info-blocks__item js-img'
          style={{ backgroundImage: `url('/assets/img/info-item-bg1.jpg')` }}
        >
          <div className='wrapper'>
          <div className='info-blocks__item-text'>
              <span className='saint-text'>About Us</span>
              <h2>Who we are</h2>
              <span className='info-blocks__item-descr'>
              දො යි දො යි is the Sri Lankan representation of the universal melodic line used to lull kids into slumber by mothers across the globe. Our idea rests on the reverse responsibility of children to care for adults. Music Therapy is a well-established clinical psychological intervention, and Abhisheka is our soul asset to touch your nerves with her music notes.
              </span>
              {/* <p>
                Non aliqua reprehenderit reprehenderit culpa laboris nulla minim
                anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua
                reprehenderit reprehenderit culpa laboris nulla minim anim velit
                adipisicing ea aliqua alluptate sit do do.Non aliqua
                reprehenderit reprehenderit culpa laboris nulla minim.
              </p> */}
              <Link href='/about'>
                <a className='info-blocks__item-link'>
                  <i className='icon-about'></i>
                  View More
                  <i className='icon-arrow-lg'></i>
                </a>
              </Link>
            </div>
            <div className='info-blocks__item-img'>
              {/* <img
                src='/assets/img/info-item-img1.jpg'
                className='js-img'
                alt=''
              /> */}
            </div>
          </div>
        </div>
        {/* <div
          className='info-blocks__item info-blocks__item-reverse js-img'
          style={{ backgroundImage: `url('/assets/img/info-item-bg2.jpg')` }}
        >
          <div className='wrapper'>
            <div className='info-blocks__item-img'>
              <PromoVideo
                videoUrl={url}
                play={play}
                onVideoPlay={() => setPlay(true)}
                image='/assets/img/info-item-img2.jpg'
              />
            </div>
            <div className='info-blocks__item-text'>
              <span className='saint-text'>Check This Out</span>
              <h2>new collection for delicate skin</h2>
              <span className='info-blocks__item-descr'>
                Nourish your skin with toxin-free cosmetic products. With the
                offers that you can’t refuse.
              </span>
              <p>
                Non aliqua reprehenderit reprehenderit culpa laboris nulla minim
                anim velit adipisicing ea aliqua alluptate sit do do.Non aliqua
                reprehenderit reprehenderit culpa laboris nulla minim anim velit
                adipisicing ea aliqua alluptate sit do do.Non aliqua
                reprehenderit reprehenderit culpa laboris nulla minim.
              </p>
              <Link href='/shop'>
                <a className='btn'>
                  Shop now
                </a>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
      {/* <!-- INFO BLOCKS EOF   --> */}
    </>
  );
};
