import { useState, type ChangeEvent, type FormEvent } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import type { Book, Page } from './types/types'
import { booksData, emptyBookForm } from './data/books'
import { AdminPage } from './components/AdminPage'
import { ModeratorPage } from './components/ModeratorPage'
import { MainPage } from './components/MainPage'

function App() {
  const [activePage, setActivePage] = useState<Page>('Kezdőlap')
  const [books, setBooks] = useState<Book[]>(booksData)
  const [formData,setFormData] = useState<Book>(emptyBookForm);
  const [editIndex, setEditIndex] = useState<number|null>(null)

  function handleChange(event: ChangeEvent<HTMLInputElement>, field: keyof Book) {
    let value;
    field == 'pages'? value = Number(event.target.value) : value = event.target.value;
    setFormData((editedBook) => ({...editedBook, [field]: value}));
  }

  function handleCheckbox(event: ChangeEvent<HTMLInputElement>) {
    setFormData((editedBook) => ({...editedBook, available: event.target.checked}))
  }
  
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newBook: Book = {
      title: formData.title.trim(),
      author: formData.author.trim(),
      pages: Number(formData.pages),
      available: formData.available
    }
    validacio(newBook);
    if (editIndex !== null) {
      setBooks(current => (current.map((book,index) => (index == editIndex? newBook : book))));
      setEditIndex(null);
    }
    else {
      setBooks(current => [...current,newBook]);
    }
    setFormData(emptyBookForm)
  }

  function validacio(newBook: Book) {
    if(!newBook.title) {
      throw new Error('Nem lehet üres a cím!');
    }
    else if (!newBook.author) {
      throw new Error('Nem lehet üres a szerző!');
    }
    else if (newBook.pages <= 0) {
      throw new Error('Nem 0 vagy annál kisebb az oldalak száma!');
    }
  }

  function startEdit(index: number) {
    setFormData({...books[index]});
    setEditIndex(index);
  }

  function deleteBook(index: number) {
    setBooks(current => current.filter((_,searchedIndex) => (searchedIndex != index)));
    if (editIndex == index) {
      setEditIndex(null);
      setFormData(emptyBookForm);
    }
  }

  function renderPage() {
    if (activePage == 'Admin') {
      return(
        <AdminPage
          books={books}
          formData={formData}
          editingIndex={editIndex}
          onFieldChange={handleChange}
          checkboxChange={handleCheckbox}
          onSubmit={handleSubmit}
          onEdit={startEdit}
          onDelete={deleteBook}
          onCancelEdit={() => {
            setEditIndex(null)
            setFormData(emptyBookForm)
          }}
        />
      )
    }
    else if (activePage == 'Moderátor') {
      return <ModeratorPage/>
    }
    else {return (<MainPage books={books}/>)}
  }

  return (
    <>
    <Header
      activePage={activePage}
      onPageChange={setActivePage}
    />
    <main className='container'>{renderPage()}</main>
    <Footer/>
    </>
  )
}

export default App
