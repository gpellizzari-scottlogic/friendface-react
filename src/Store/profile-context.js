import { createContext, useState } from "react";

const ProfileContext = createContext({
    author: "author",
    color: "red",
    updateAuthor: (newAuthor) => {}, //used only to help with autocompletion
    updateColor: (newColor) => {},
});

export function ProfileContextProvider(props){
    const [author, setAuthor] = useState();
    const [color, setColor] = useState();

    const context ={
        author: author,
        color: color,
        updateAuthor: updateAuthorHandler,
        updateColor: updateColorHandler,
    };

    function updateAuthorHandler(newAuthor){
        setAuthor(newAuthor);
    }

    function updateColorHandler(newColor){
        setColor(newColor);
    }

    return <ProfileContext.Provider value={context}>
        {props.children}
    </ProfileContext.Provider>;
}

export default ProfileContext;