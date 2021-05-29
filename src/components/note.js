import React from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import BlogDataService from '../services/blognotes.service';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';
import '../loader.css';


export default function Note() {
  const [title, setTitle] = React.useState();
  const [author, setAuthor] = React.useState();
  const [authorlink, setAuthorLink] = React.useState();
  const [contents, setContents] = React.useState();
  const [createdAt, setCreatedAt] = React.useState();
  const [loader, setLoader] = React.useState('');
  let { id } = useParams();

  async function getNote(){
    let noteref = BlogDataService.getById(id);
    await noteref.on('value', (snapshot) => {
      const noteval = snapshot.val();
      setAuthor(noteval.author);
      setAuthorLink(noteval.authorlink);
      setContents(noteval.contents);
      setCreatedAt(noteval.createdAt);
      setTitle(noteval.title);
      setLoader('hide');
    }); 
  }

  React.useEffect(() => getNote());

  return (
    <div className="container">
      <Header />
      <Loader visibility={loader} />
      <section className="article-clean">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-8 offset-lg-1 offset-lg-2">
              <div className="intro text-center">
                <h1 className="text-center">{title}</h1>
                <p className="text-center">
                  <span className="by">by</span> <a href={'https://' + authorlink}>{author}</a>
                  <span className="date">{createdAt} </span></p>
                <img className="img-fluid" src={process.env.PUBLIC_URL + "/assets/img/desk.jpg"} alt="" />
              </div>
              <div className="text">
                <MarkdownPreview source={contents} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
