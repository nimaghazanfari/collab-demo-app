import React from 'react';
import TaskEdit from './TaskEdit';
import styles from './TaskItem.module.css';

const TaskItem = ({ item, removeTask, toggleTask, toggleEdit, editDone }) => {

    return (
        <div className={styles.container}>
            <div>
                <input
                    type="checkbox"
                    id={item.id}
                    data-testid={`checkbox-${item.id}`}
                    onChange={() => toggleTask(item.id)}
                />
                {!item.editing ?
                    <label
                        data-testid={`editing-${item.id}`}
                        onClick={() => toggleEdit(item.id)}
                        className={item.completed ? styles.completed : ''}
                    >{item.name}</label>
                    :
                    <TaskEdit item={item}
                        toggleEdit={() => toggleEdit(item.id)}
                        editDone={(ed) => editDone(ed)}
                    />
                }
            </div>
            <button
                className={styles.removeButton}
                type="button"
                data-testid={`delete-${item.id}`}
                onClick={() => removeTask(item.id)}
            >&#10060;</button>
        </div>
    );
}

export default TaskItem;