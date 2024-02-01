import { Category } from 'components/Category/Category';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Services',
    path: '/services',
  },
];
const CategoriesPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Services'>
      <Category isPage={true}/>
    </PublicLayout>
  );
};

export default CategoriesPage;
