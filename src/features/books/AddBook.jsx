import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBoook } from './BooksSlice';
import { useNavigate } from 'react-router-dom';
const { v4: uuidv4 } = require("uuid");

const AddBook = () => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    const book = { id: uuidv4(), title, author }
    dispatch(addBoook(book))
    navigate("/show-books", { replace: true })
  }

  return (
    <div className='book'>
      <h2>Add Book</h2><br></br>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <input type="text" id="title" name="title" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} required/>
        </div>
        <div className="form-field">
          <input type="text" id="author" name="author" placeholder='Author' value={author} onChange={(e) => setAuthor(e.target.value)} required/>
        </div><br></br>
        <button type="submit" className='btn'>ADD BOOK</button>
      </form>
    </div>
  )
}

export default AddBook
