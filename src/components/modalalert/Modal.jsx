import { db } from "../dexiedb/dexiedb"



const Modal = props => {

        const clearPhotoFromDb = (id) => {
             db.gallery.orderBy(id).delete()
             props.setShowModal(true)
            }    

    return(
        <div className='modal-container'>
            <div className="modal-wrapper">
                <i className="info-icon fa-solid fa-circle-info"></i>
                <p>Do You Want to delete Your Gallery?</p>
                <div>
                    <span className="yes-button" role={`button`} onClick={() => clearPhotoFromDb()}>Yes</span>
                    <span className="no-button" onClick={() => props.setShowModal(true)}>No</span>
                </div>

            </div>
        </div>
    )
}

export default Modal