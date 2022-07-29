import getPhotoUrl from "get-photo-url";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../dexiedb/dexiedb";
import ClearAllModal from "../modalalert/ClearAllModal";
import DeleteModal from "../modalalert/DeleteModal";
import { useState } from "react";
import Preloader from "../preloader/PreLoader";
import EmptyGallery from "./EmptyGallery";

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
                className="delete-button"
                onClick={() => showDeleteModalHandler(photo.id)}
              >
                <i class="fa-solid fa-trash-can"></i>
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
        <i className="add-photo-button fas fa-plus-square" />
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
