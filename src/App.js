import React from 'react';
import ArticleLists from "./components/ArticleLists";
import Footer from "./components/Footer";
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <ArticleLists />
        <Footer />
      </div>
    );
  }
}

export default App;
