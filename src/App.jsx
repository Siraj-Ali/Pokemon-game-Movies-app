import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import "./assets/custom.css";
import Pokemon from './Pokemon'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router';
import PokemonDetails from './pages/PokemonDetails';
import { Layout } from './components/layout/Layout';
import { Contact, getContactFormData } from './pages/Contact';
import { About } from './pages/About';
import { NotFound } from './NotFound';
import { Movies } from './pages/Movies';
import { getMovies } from './APIs/GetMovies';
import { MovieDetail } from './pages/MovieDetail';
import { getMoviesDetail } from './APIs/GetMovieDetail';
import { Home } from './pages/Home';

function App() {
  const [count, setCount] = useState(0)
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Layout/>,
        errorElement: <NotFound/>,
        children: [
          {
            path: '/',
            element: <Home/>
          },
          {
            path: '/pokemon',
            element: <Pokemon/>
          },
          {
            path: '/pdetail/:name',
            element: <PokemonDetails/>
          },
          {
            path: '/movies',
            element: <Movies/>,
            loader: getMovies
          },
          {
            path: '/mdetail/:id',
            element: <MovieDetail/>,
            loader: getMoviesDetail
          },
          {
            path: '/contact',
            element: <Contact/>,
            action: getContactFormData
          },
          {
            path: '/about',
            element: <About/>
          },
          // {
          //   path: "*",
          //   element: <NotFound/>
          // }
        ]
      },
      
    ]);
    
  // return (
  //   <Routes>
  //     <Route path='/' element={<Pokemon />} />
  //     <Route path='/detail/:name' element={<PokemonDetails />} />
  //   </Routes>
  // )

  return <RouterProvider router={router}/>
}

export default App
