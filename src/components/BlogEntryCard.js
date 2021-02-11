import {useState} from "react";
import {FancyButton} from "./FancyButton";


function BlogEntryCard({title, description, content, onDelete}) {
    const [clicked, setClicked] = useState(0);
    return <article>
        <h3>{title}</h3>
        <h2>{description}</h2>
        <p>{content}</p>
        <p>{clicked}</p>
        <FancyButton onClick={() => {
            setClicked(clicked + 1)
        }}> Click me</FancyButton>
        <FancyButton onClick={onDelete}> Delete</FancyButton>
    </article>
}

export default BlogEntryCard;