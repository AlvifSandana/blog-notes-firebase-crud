import React from 'react';
import Loader from './Loader';
import BlogDataService from '../services/blognotes.service';

const style = {
  paddingTop: 30,
  marginBottom: 30
};

class ArticleLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleList: [],
      loadervisibility: ''
    }
    this.props = {
    }
  }

  componentDidMount() {
    BlogDataService.getAll().on('value', (snapshot) => {
      const artc = snapshot.val();
      var artcList = [];
      for (let id in artc) {
        artcList.push({ id, ...artc[id] });
      }
      this.setState({ articleList: artcList, loadervisibility: 'hide'});
    });
  }

  componentWillUnmount() {
    this.setState({ articleList: [] });
  }

  render() {
    return (
      <section className="article-list">
        <Loader visibility={this.state.loadervisibility} />
        <div className="container">
          <div className="intro">
            <h2 className="text-center" style={style}>Posts</h2>
            <p className="text-center">Some notes and tricks that I think are useful :)</p>
          </div>
          <div className="row articles">
            {this.state.articleList ?
              this.state.articleList.map((note) =>
                <div className="col-sm-6 col-md-4 item" key={note.id}>
                  <a href={`/note/${note.id}`}>
                    <img className="img-fluid" src={process.env.PUBLIC_URL + "assets/img/desk.jpg"} alt="imgpost" />
                  </a>
                  <h3 className="name">{note.title}</h3>
                  <p className="description">{note.description}</p><a className="action" href={`/note/${note.id}`}><i className="fa fa-arrow-circle-right"></i></a>
                </div>
              ) : <div className="text-center">Empty</div>}
          </div>
        </div>
      </section>
    );
  }
}

export default ArticleLists;