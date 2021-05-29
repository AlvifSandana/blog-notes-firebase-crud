import firebase from '../utils/firebase';

const db = firebase.database().ref('Notes');

class BlogDataService {
  getById(id) {
    return db.child(id);
  }

  getAll() {
    return db;
  }

  create(notes) {
    return db.push(notes);
  }

  update(key, val) {
    return db.child(key).update(val);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new BlogDataService();
