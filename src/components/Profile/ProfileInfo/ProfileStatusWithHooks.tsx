import React, {ChangeEvent, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatusTC: (status: string) => void
}

export const ProfileStatusWithHooks = ({status, updateStatusTC}: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [editStatus, setEditStatus] = useState(status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        updateStatusTC(editStatus)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEditStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{editStatus}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deactivateEditMode}
                           value={editStatus}/>
                </div>
            }
        </div>
    );

}