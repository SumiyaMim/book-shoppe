import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './BooksSlice';

const EditBook = () => {

  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [id, setId] = useState(location.state.id)
  const [title, setTitle] = useState(location.state.title)
  const [author, setAuthor] = useState(location.state.author)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({ id, title, author }));
    navigate("/show-books", { replace: true });
  }

  return (
    <div className='book'>
      <h2>Edit Book</h2><br></br>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <input type="text" id="title" name="title" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} required/>
        </div>
        <div className="form-field">
          <input type="text" id="author" name="author" placeholder='Author' value={author} onChange={(e) => setAuthor(e.target.value)} required/>
        </div><br></br>
        <button type="submit" className='btn_update'>UPDATE BOOK</button>
      </form>
    </div>
  )
}

export default EditBook
