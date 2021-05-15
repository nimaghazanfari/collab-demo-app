import React from 'react';
import styles from './TaskItem.module.css';

const TaskItem = ({ item, removeTask, toggleTask }) => {

    return (
        <div className={styles.container}>
            <div>
                <input
                    type="checkbox"
                    id={item.id}
                    onChange={() => toggleTask(item.id)}
                />
				<label
					onClick={() => toggleTask(item.id)}
					className={item.completed ? styles.completed : ''}
				>{item.name}</label>
            </div>
            <button
                className={styles.removeButton}
                type="button"
                onClick={() => removeTask(item.id)}
            >&#10060;</button>
        </div>
    );
}
export default TaskItem;