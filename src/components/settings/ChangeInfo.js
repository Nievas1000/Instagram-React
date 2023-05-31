import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { UPDATE_PROFILE_INFO } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";

export const ChangeInfo = ({ user }) => {
  const [newUsername, setNewUsername] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [updateInfo] = useMutation(UPDATE_PROFILE_INFO);

  useEffect(() => {
    if (user.username && user.description) {
      setNewUsername(user.username);
      setNewDescription(user.description);
    }
  }, [user]);

  const updateInfoProfile = async () => {
    try {
      updateInfo({
        variables: {
          id: user.id,
          description: newDescription,
          username: newUsername,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="username-settings mt-3">
        <h5>Username</h5>
        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
      </div>
      <div className="description-settings mt-3">
        <h5>Description</h5>
        <textarea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      </div>
      <div className="save-settings mt-4 mb-3">
        <Button variant="primary" onClick={updateInfoProfile}>
          Save
        </Button>
      </div>
    </div>
  );
};
