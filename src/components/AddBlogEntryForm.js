
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import {FancyButton} from "./FancyButton";

function AddBlogEntryForm({onAdd}) {

    const [title, setTitle] = useState("new title");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");


    return <form onSubmit={event => {
        event.preventDefault()
        onAdd({id: uuidv4(), title: title, description: description, content: content})
        setTitle("")
        setDescription("")
        setContent("")
    }}>

        <label>
            Name
            <input value={title} onChange={event => setTitle(event.target.value)}/>
        </label>
        <label>
            Description
            <input value={description} onChange={event => setDescription(event.target.value)}/>
        </label>
        <label>
            Content
            <input value={content} onChange={event => setContent(event.target.value)}/>
        </label>


        <FancyButton>
            Add new Blogentry
        </FancyButton>
    </form>
}

export default AddBlogEntryForm;