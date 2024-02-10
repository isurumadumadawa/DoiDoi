import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import productData from 'data/product/product';

export const MostViewed = ({ additionalClass }) => {
  const mostViewed = [...productData].slice(0, 6);

  return (
    <>
      {/* <!-- BEGIN MOST VIEWED --> */}
      <section className={`arrivals ${additionalClass ? additionalClass : ''}`}>
        <SectionTitle
          subTitle='Our Products'
          title=''
          body='We provide our own line of ITI-approved products along with widely researched Sri Lankan therapeutic approaches and customary ingredients.'
        />

        <div className='products-items'>
          <ProductsCarousel products={mostViewed} />
        </div>
      </section>
      {/* <!-- MOST VIEWED EOF --> */}
    </>
  );
};
