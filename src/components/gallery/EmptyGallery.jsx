import { Plus } from "../icons/Icons";

const EmptyGallery = () => {
  return (
    <div className="empty-gallery-container">
      <span> Click the </span>
    <span className="addIcon" > <Plus /> </span>
      <span> icon to add image to your Gallery.</span>
    </div>
  );
};

export default EmptyGallery;
