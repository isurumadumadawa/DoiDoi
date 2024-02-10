import Link from 'next/link';

export const Banner = () => {
  return (
    <>
      {/* <!-- BEGIN MAIN BLOCK --> */}
      <div className='main-block load-bg'>
        <div className='wrapper'>
          <div className='main-block__content'>
            <span className='saint-text'>දො  යි දො  යි</span>
            <h1 className='main-text'>Doi Doi</h1>
            <h1 className='tag-text'>
            Pamper All Generations
            </h1>

            {/* <Link href='/shop'>
              <a className='btn'>Book now</a>
            </Link> */}
          </div>
        </div>
        <img
          className='main-block__decor'
          src='./assets/img/main-block-decor.png'
          alt=''
        />
      </div>
      {/* <!-- MAIN BLOCK EOF --> */}
    </>
  );
};
