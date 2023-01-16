import React from "react";
import Article from "./Article";

function ArticleList({id}) {
    return (
        <main>
            <Article key={id}/>
            <Article key={id}/>
            <Article key={id}/>
        </main>
    )
}

export default ArticleList;