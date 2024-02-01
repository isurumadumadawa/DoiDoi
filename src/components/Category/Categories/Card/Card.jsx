import Link from 'next/link';

export const Card = ({ category,isPage }) => {
  const { name, image,description } = category;
  return (
    <Link href={!isPage?`/services`:`/shop`}>
      <a className='top-categories__item'>
        <img src={image} className='js-img' alt='' />
        <div className='top-categories__item-hover'>
          <h5>{name}</h5>
          {isPage && <h6>{description}</h6>}
          {isPage && <span>Book Now -</span>}  
          {isPage &&<i className='icon-arrow-lg'></i>}
          {!isPage && <span>Browse Services -</span>}  
          {!isPage &&<i className='icon-arrow-lg'></i>}
        </div>
      </a>
    </Link>
  );
};
