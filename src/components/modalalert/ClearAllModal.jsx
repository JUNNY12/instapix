import { db } from "../dexiedb/dexiedb";

const ClearAllModal = (props) => {
  const clearPhotoFromDb = (id) => {
    db.gallery.orderBy(id).delete();
    props.setShowClearAllModal(true);
  };

  return (
    <div className="modal-container">
      <div className="modal-wrapper">
        <p className="cancel-modal" onClick={() => props.setShowClearAllModal(true)} >X</p>
        <i className="info-icon fa-solid fa-circle-info"></i>
        <p>Do You Want to delete Your Gallery?</p>
        <div>
          <span className="yes-button" role={`button`} onClick={() => clearPhotoFromDb()} >Yes</span>
          <span className="no-button" onClick={() => props.setShowClearAllModal(true)}> No</span>
        </div>
      </div>
    </div>
  );
};

export default ClearAllModal;
