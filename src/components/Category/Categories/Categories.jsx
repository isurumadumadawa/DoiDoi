import { Card } from './Card/Card';

export const Categories = ({ categories,isPage }) => {
  return (
    <>
      {/* <!-- BEGIN  CATEGORIES --> */}
      {categories.map((category) => (
        <Card key={category.categoryId} category={category} isPage={isPage}/>
      ))}
      {/* <!--  CATEGORIES EOF   --> */}
    </>
  );
};
