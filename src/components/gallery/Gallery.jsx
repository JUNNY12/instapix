import ClearAllModal from "../modalalert/ClearAllModal";
import { db } from "../dexiedb/dexiedb";
import DeleteModal from "../modalalert/DeleteModal";
import EmptyGallery from "./EmptyGallery";
import getPhotoUrl from "get-photo-url";
import { useLiveQuery } from "dexie-react-hooks";
import { useState, useRef, useEffect } from "react";
import Preloader from "../preloader/PreLoader";
import { Plus, TrashIcon } from "../icons/Icons";

const Gallery = () => {
  const [showClearAllModal, setShowClearAllModal] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(true);
  const [currentId, setCurrentId] = useState();
  const allPhotos = useLiveQuery(() => db.gallery.reverse().toArray(), []);

  const addPhoto = async () => {
    db.gallery.add({
      id: Date.now(),
      url: await getPhotoUrl("#addPhotoInput"),
    });
  };
  const removePhotoFromDb = (id) => {
    db.gallery.delete(id);
    setShowDeleteModal(true);
  };

  const showDeleteModalHandler = (id) => {
    setShowDeleteModal(false);
    setCurrentId(id);
  };

  const buttonRef = useRef()

  useEffect(() => {

    const closeModal = (e) => {
      if(e.path[0].tagName !== 'BUTTON'){
        setShowDeleteModal(true)
        setShowClearAllModal(true)
      }
    }
    document.body.addEventListener("click", closeModal);
    return () => document.body.removeEventListener("click", closeModal)
  },[])



  let renderGallery;
  if (allPhotos) {
    renderGallery = (
      <section>
        {!allPhotos?.length > 0 && <EmptyGallery />}
        <div className="gallery">
          {allPhotos?.map((photo) => (
            <div className="item" key={photo.id}>
              <img src={photo.url} className="item-image" alt="item" />
              <button
              ref={buttonRef}
                className="delete-button"
                onClick={() => showDeleteModalHandler(photo.id)}
              >
                < TrashIcon/>
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  } else if (!allPhotos) {
    renderGallery = <Preloader />;
  }

  return (
    <>
      <input type={`file`} name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput" onClick={addPhoto}>
        <div className="add-photo-button" >
          <Plus />
        </div>
      </label>

      {renderGallery}
      
      <div className={showDeleteModal ? "show-modal" : ""}>
        <DeleteModal
          setShowDeleteModal={setShowDeleteModal}
          removePhotoFromDb={() => removePhotoFromDb(currentId)}
        />
      </div>

      <div className={showClearAllModal ? "show-modal" : ""}>
        <ClearAllModal setShowClearAllModal={setShowClearAllModal} />
      </div>

      {allPhotos?.length > 1 && (
        <div className="clear-button-container">
          <button
            className="clear-button"
            onClick={() => setShowClearAllModal(false)}
          >
            Delete All
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
