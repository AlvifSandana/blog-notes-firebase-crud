import React from 'react';
import ArticleLists from "./components/ArticleLists";
import Footer from "./components/Footer";
import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount(){
    this.setState({loading: false});
  }

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
