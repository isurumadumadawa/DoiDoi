import Link from 'next/link';

export const AboutDiscount = () => {
  return (
    <>
      {/* <!-- BEGIN DISCOUNT --> */}
      <div
        className='discount discount-about js-img'
        style={{ backgroundImage: `url('/assets/img/discount-bg2.jpg')` }}
      >
        <div className='wrapper'>
          <div className='discount-info'>
            <span className='saint-text'>Success story</span>
            <h2>දො යි දො යි develops its own brands</h2>
            <p>
            Our services will be modern and elegantly designed, with comfortable seating, soothing lighting, unique custom-designed music, and a relaxing ambiance. Only the highest quality products and equipment will be utilized, and our staff will be trained to provide exceptional service and personalized attention to each client.
            </p>
            {/* <p className='discount-info__sm'>
              Forming the range of stores, we, above all, strive not only to
              meet the format of "home shop", offering each customer the most
              basic household goods, but also to create a unique space of beauty
              and care. BeShope stores offer their customers the widest and
              highest quality selection of products from world-renowned
              manufacturers.
            </p> */}
            {/* <Link href='/shop'>
              <a className='btn'>Shop now</a>
            </Link> */}
          </div>
        </div>
      </div>
      {/* <!-- DISCOUNT EOF   --> */}
    </>
  );
};
