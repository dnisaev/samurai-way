import React, { ChangeEvent, useEffect, useState } from "react";

type ProfileStatusPropsType = {
  status: string;
  updateStatusTC: (status: string) => void;
};

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatusTC(status);
  };

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      {!editMode && (
        <div>
          <div onDoubleClick={activateEditMode}>
            <strong>Статус</strong>: {status}
          </div>
        </div>
      )}
      {editMode && (
        <div>
          <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
        </div>
      )}
    </>
  );
};
