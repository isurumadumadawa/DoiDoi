import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';
import productData from 'data/product/product';

export const Trending = () => {
  const trendingProducts = [...productData];
  // const [products, setProducts] = useState(trendingProducts);
  // const [filterItem, setFilterItem] = useState('makeup');

  // useEffect(() => {
  //   const newItems = trendingProducts.filter((pd) =>
  //     pd.filterItems.includes(filterItem)
  //   );
  //   setProducts(newItems);
  // }, [filterItem]);

  // const filterList = [
  //   {
  //     name: 'Make Up',
  //     value: 'makeup',
  //   },
  //   {
  //     name: 'SPA',
  //     value: 'spa',
  //   },
  //   {
  //     name: 'Perfume',
  //     value: 'perfume',
  //   },
  //   {
  //     name: 'Nails',
  //     value: 'nail',
  //   },
  //   {
  //     name: 'Skin care',
  //     value: 'skin',
  //   },
  //   {
  //     name: 'Hair care',
  //     value: 'hair',
  //   },
  // ];
  return (
    <>
      {/* <!-- BEGIN TRENDING --> */}
      <section className='trending'>
        <div className='trending-content'>
          <SectionTitle
            subTitle='Our Products'
            title='What We Sell'
            body='We provide our own line of ITI-approved products along with widely researched Sri Lankan therapeutic approaches and customary ingredients.'
          />
          <div className='tab-wrap trending-tabs'>
            {/* <ul className='nav-tab-list tabs'>
              {filterList.map((item) => (
                <li
                  key={item.value}
                  onClick={() => setFilterItem(item.value)}
                  className={item.value === filterItem ? 'active' : ''}
                >
                  {item.name}
                </li>
              ))}
            </ul> */}
            <div className='products-items'>
              <ProductsCarousel products={trendingProducts} />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- TRENDING EOF   --> */}
    </>
  );
};
