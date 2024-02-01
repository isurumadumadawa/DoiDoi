import { Categories } from 'components/Category/Categories/Categories';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import categoriesData from 'data/category/category';

export const TopCategories = () => {
  const categories = [...categoriesData].slice(0, 5);
  return (
    <>
      {/* <!-- BEGIN TOP CATEGORIES --> */}
      <section className='top-categories'>
        <SectionTitle
          subTitle='Our Services For Pearl Bay'
          title='What We Offer'
          body='We keen to offer our clients a life time experience by pampering them in all luxuries, and peaceful surroundings which will leave them enthralling, feeling beauty inside and out.'
        />
        <div className='top-categories__items'>
          {<Categories categories={categories} />}
        </div>
      </section>
     
      {/* <!-- TOP CATEGORIES EOF   --> */}
    </>
  );
};
