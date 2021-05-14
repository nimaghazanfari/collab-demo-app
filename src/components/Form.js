import React, { useState } from "react";

const Form = ({ addTask }) => {
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        
        if (!name.trim()) return;

        addTask(name);
        setName("");
    }

    function handleOnChange(e) {
        setName(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit} >
            <h2 className="label-wrapper" >
                <label htmlFor="new-todo-input" className="label__lg" >
                    What needs to be done?
                </label>
            </h2>
            <input
                id="new-todo-input"
                className="input input__lg"
                value={name}
                type="text"
                autoComplete="off"
                onChange={handleOnChange}
            />
            <button type="submit" className="btn btn_primary btn__lg" >
                Add
             </button>
        </form>
    )
}

export default Form;