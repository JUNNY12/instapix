import getPhotoUrl from "get-photo-url";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../dexiedb/dexiedb";
import ClearAllModal from "../modalalert/ClearAllModal";
import { useState } from "react";
import Preloader from "../preloader/PreLoader";
import EmptyGallery from "./EmptyGallery";
import DeleteModal from "../modalalert/DeleteModal";

const Gallery = () => {
  const [showModal, setShowModal] = useState(true);
  const allPhotos = useLiveQuery(() => db.gallery.reverse().toArray(), []);

  const addPhoto = async () => {
    db.gallery.add({
      id: Date.now(),
      url: await getPhotoUrl("#addPhotoInput"),
    });
  };
  const removePhotoFromDb = (id) => {
    db.gallery.delete(id);
  };

  return (
    <>
      {!allPhotos?.length > 0 && <EmptyGallery />}
      {!allPhotos && <Preloader />}
      <input type={`file`} name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput" onClick={addPhoto}>
        <i className="add-photo-button fas fa-plus-square" />
      </label>

      <section className="gallery">
        {allPhotos?.map((photo) => (
          <div className="item" key={photo.id}>
            <img src={photo.url} className="item-image" alt="item" />
            <button
              className="delete-button"
              onClick={() => removePhotoFromDb(photo.id)}
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        ))}
      </section>

      <div className={showModal ? "show-modal" : ""}>
        <ClearAllModal setShowModal={setShowModal} />
      </div>

      
      {allPhotos?.length > 1 && (
        <div className="clear-button-container">
          {
            <button
              className="clear-button"
              onClick={() => setShowModal(false)}
            >
              Delete All
            </button>
          }
        </div>
      )}
    </>
  );
};

export default Gallery;
