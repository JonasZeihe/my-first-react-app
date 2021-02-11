import './App.css';
import BlogEntryCard from "./components/BlogEntryCard";
import {FancyButton} from "./components/FancyButton";
import {useState} from "react";
import AddBlogEntryForm from "./components/AddBlogEntryForm";


function App() {

    const [blogEntries, setEntries] = useState([]);

    return (
        <div className="background">
            <div className="water">
                <header>
                <FancyButton onClick={() =>
                    setEntries([
                        {
                            title: "example title",
                            description: "Hello World",
                            content: "Lorem ipsum dolor sit amet," +
                                " consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt " +
                                "ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos" +
                                " et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea" +
                                " takimata sanctus est Lorem ipsum dolor sit amet."
                        }
                        ])}>
                    Load Entries
                    </FancyButton>

                </header>

                {blogEntries.map(entry => <BlogEntryCard key={entry.id}
                    title={"Title: " + entry.title}
                    description={"Description: " + entry.description}
                    content={"Content: " + entry.content}
                    onDelete={() => {
                    const updatedList = blogEntries.filter(item => item.id !== entry.id);
                    setEntries(updatedList)
                }}
                    />)}

                    <AddBlogEntryForm onAdd={newEntry =>
                    setEntries([...blogEntries, newEntry])}/>
                    </div>
                {<svg>
                    <filter id="turbulence" x="0" y="0" width="100%" height="100%">
                    <feTurbulence id="sea-filter" numOctaves="2" seed="2" baseFrequency="0.02 0.05"></feTurbulence>
                    <feDisplacementMap scale="4" in="SourceGraphic"></feDisplacementMap>
                    <animate xlinkHref="#sea-filter" attributeName="baseFrequency" dur="60s"
                    keyTimes="0;0.5;1" values="0.02 0.06;0.04 0.15;0.02 0.02" repeatCount="indefinite"/>
                    </filter>
                    </svg>}
                    </div>


                    )
                    ;
                    }

                    export default App;