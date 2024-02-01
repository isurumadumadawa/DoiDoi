export const SectionTitle = ({ subTitle, title, body }) => {
  return (
    <div className='trending-top'>
      <span className='saint-text'>{subTitle}</span>
      <h2>{title}</h2>
      <p className='info-blocks__item-descr'>{body}</p>
    </div>
  );
};
