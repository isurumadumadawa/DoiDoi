import servicesData from 'data/services/services';
import { Categories } from './Categories/Categories';

export const Category = ({isPage=false}) => {
  const categories = [...servicesData];
  return (
    <>
      {/* <!-- BEGIN TOP CATEGORIES --> */}
      <section className='all-categories'>
        <div className='top-categories__items'>
          <Categories categories={servicesData} isPage={isPage} />
        </div>
      </section>
      {/* <!-- TOP CATEGORIES EOF --> */}
    </>
  );
};
