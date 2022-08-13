const EmptyGallery = () => {
  return (
    <div className="empty-gallery-container">
      <span> Click the </span>

      <label htmlFor="addPhotoInput" className="label">
        <span><i className="fas fa-plus-square" /></span>
      </label>
    
      <span> icon to add image to your Gallery.</span>
    </div>
  );
};

export default EmptyGallery;
