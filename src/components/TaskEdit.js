import React, { useState } from 'react';
import styles from './TaskEdit.module.css';

const TaskEdit = ({ item, toggleEdit, editDone }) => {

    const [val, setVal] = useState(item.name);

    const updateVal = (e) => {
        setVal(e.target.value);
    }

    const editItem = () => {
        item.name = val;
        editDone(item);
    }

    return (
        <span className={styles.editContainer}>
            <form onSubmit={editItem}>
                <input
                    type="text"
                    value={val}
                    data-testid={`txt-${item.id}`}
                    onChange={updateVal}
                    className={styles.input}
                />
                <button
                    type="submit"
                    onClick={editItem}
                    title="Save"
                >
                    &#9989;
                </button>
                <button
                    type="button"
                    onClick={toggleEdit}
                    title="Cancel"
                >
                    &#10005;
                </button>
            </form>
        </span>
    )
}

export default TaskEdit;
