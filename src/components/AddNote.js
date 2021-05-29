import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import BlogDataService from '../services/blognotes.service';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// toast configuration
const toastOption = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
}

function AddNote() {
  // state
  const [title, setTitle] = React.useState();
  const [author, setAuthor] = React.useState();
  const [authorlink, setAuthorLink] = React.useState();
  const [contents, setContents] = React.useState();
  const [description, setDescription] = React.useState();
  const [published, setPublished] = React.useState();

  // toast handler
  const showToastSuccess = (text) => toast.success(text, toastOption);
  const showToastFailed = (text) => toast.error(text, toastOption);

  // create note handler
  const createNote = () => {
    const note = {
      title,
      description,
      contents,
      author,
      authorlink,
      published,
      createdAt: new Date().toLocaleDateString(),
    };
    try {
      BlogDataService.create(note);
      showToastSuccess('Note created!!');
    } catch (error) {
      showToastFailed(error);
    }
  }

  // onChange publish checkbox
  const updatePublish = () => {
    if (published === true) {
      setPublished(false);
    } else {
      setPublished(true);
    }
  }

  return (
    <div className="container">
      <ToastContainer />
      <Header />
      <div className="editor-container">
        <h3 className="h3 text-center mt-2 mb-2">Create New Note</h3>
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input type="text" className="form-control form-control-sm" value={title} onChange={(e) => setTitle(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label className="form-label">Author:</label>
          <input type="text" className="form-control form-control-sm" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
        </div>
        <div className="mb-3">
          <label className="form-label">Author Link:</label>
          <input type="text" className="form-control form-control-sm" value={authorlink} onChange={(e) => setAuthorLink(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Description:</label>
          <textarea type="text" className="form-control form-control-sm" value={description} onChange={(e) => setDescription(e.target.value)} required/>
        </div>
        <label className="form-label">Contents:</label>
        <MDEditor value={contents} onChange={(e) => setContents(e)} height={400} />
        <div className="row row-cols-lg-auto g-3 align-items-center text-end mt-3">
          <div class="col-12 form-check form-switch inline">
            <input className="form-check-input" type="checkbox" checked={published} onChange={updatePublish} />
            <label className="form-check-label">Publish Notes</label>
          </div>
          <div className="col-12">
            <button className="btn btn-success" onClick={createNote}>Create</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default AddNote;