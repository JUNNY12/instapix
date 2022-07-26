import { useState } from "react";
import profileIcon from "../../assets/instapix_1_512x512.png";
import getPhotoUrl from "get-photo-url";
import { db } from "../dexiedb/dexiedb";
import { useLiveQuery } from "dexie-react-hooks";

const Bio = (props) => {
  const [userDetails, setUserDetails] = useState({
    name: "Lycium",
    about: "Iopsum lycium dcium lysium iopsium",
  });

  const [editFormIsOpen, setEditFormIsOpen] = useState(false);

  const bioDetails = useLiveQuery(() => db.bio.get("info"), []);
  const bioProfilePhoto = useLiveQuery(() => db.bio.get("profilePhoto"), []);

  const addUserDetails = async (event) => {
    event.preventDefault();
    const objectData = {
      name: event.target.nameOfUser.value,
      about: event.target.aboutUser.value,
    };
    await db.bio.put(objectData, "info");
    setEditFormIsOpen(false);
  };

  const addProfilePhoto = async () => {
    const newProfilePhoto = await getPhotoUrl("#profilePhotoInput");
    await db.bio.put(newProfilePhoto, "profilePhoto");
  };

  const editForm = (
    <form className="edit-bio-form" onSubmit={(e) => addUserDetails(e)}>
      <input
        type={`text`}
        id=""
        placeholder="Your Name"
        name="nameOfUser"
        required
        defaultValue={bioDetails?.name}
      />

      <input
        type={`text`}
        id=""
        placeholder="About You"
        name="aboutUser"
        required
        defaultValue={bioDetails?.about}
      />
      <br />

      <button
        type={"button"}
        className="cancel-button"
        onClick={() => setEditFormIsOpen(false)}
      >
        Cancel
      </button>

      <button type={`submit`}>Save</button>
    </form>
  );
  const editButton = (
    <button onClick={() => setEditFormIsOpen(true)}>
      <span>Edit</span>
      <span>
        <i className="fa-solid fa-pencil"></i>
      </span>
    </button>
  );

  return (
    <div className={props.darkMode ? "dark" : ""}>
      <section className="bio">
        <div className="toggler">
          <p>Light mode</p>
          <div className="toggle-container" onClick={props.toggleDarkMode}>
            <div className="toggle-ball"></div>
          </div>
          <p>Dark Mode</p>
        </div>

        <input
          type={`file`}
          accept="image/*"
          name="photo"
          id="profilePhotoInput"
        />
        <label htmlFor="profilePhotoInput" onClick={addProfilePhoto}>
          <div
            className="profile-photo"
            role={`button`}
            title="Click to edit Photo"
          >
            <img src={bioProfilePhoto || profileIcon} alt="my profile" />
          </div>
        </label>
        <div className="profile-info">
          <p className="name">{bioDetails?.name || userDetails.name}</p>
          <p className="about">{bioDetails?.about || userDetails.about}</p>
          {editFormIsOpen ? editForm : editButton}
        </div>
      </section>
    </div>
  );
};

export default Bio;
