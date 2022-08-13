
const DeleteModal = (props) => {

  return (
    <div className="modal-container">
      <div className="modal-wrapper">
        <p className="cancel-modal" onClick={() => props.setShowDeleteModal(true)}>X</p>
        <i className="info-icon fa-solid fa-circle-info"></i>
        <p>Do You Want to delete this image?</p>
        <div>
          <span className="yes-button" role={`button`} onClick={props.removePhotoFromDb} > Yes </span>
          <span className="no-button" onClick={() => props.setShowDeleteModal(true)}> No </span>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
