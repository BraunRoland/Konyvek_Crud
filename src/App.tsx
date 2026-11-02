import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import type { Book, Page } from './types/types'
import { booksData } from './data/books'
import { AdminPage } from './components/AdminPage'
import { ModeratorPage } from './components/ModeratorPage'
import { MainPage } from './components/MainPage'

function App() {
  const [activePage, setActivePage] = useState<Page>('Kezdőlap')
  const [books, setBooks] = useState<Book[]>(booksData)

  function renderPage() {
    if (activePage == 'Admin') {
      return(
        <AdminPage/>
      )
    }
    else if (activePage == 'Moderátor') {
      return <ModeratorPage/>
    }
    else {return (<MainPage/>)}
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
