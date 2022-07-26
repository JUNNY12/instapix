import { db } from "../dexiedb/dexiedb";

const DeleteModal = (props) => {
  const removePhotoFromDb = (id) => {
    db.gallery.delete(id);
    props.setShowModal(true);
  };

  return (
    <div className="modal-container">
      <div className="modal-wrapper">
        <i className="info-icon fa-solid fa-circle-info"></i>
        <p>Do You Want to delete this image?</p>
        <div>
          <span className="yes-button" role={`button`} onClick={() => removePhotoFromDb(props.id)} > Yes </span>
          <span className="no-button" onClick={() => props.setShowModal(true)}> No </span>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
