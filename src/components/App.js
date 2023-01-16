import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import Article from "./Article";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <About/>
      <Header name={blogData.name} />
      <ArticleList/>
      <Article/>
    </div>
  );
}

export default App;
