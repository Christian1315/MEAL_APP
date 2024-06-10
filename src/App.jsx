import Header from './components/Header'
import Footer from './components/Footer'

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useGlobalContext } from './Context';
import MealsPage from './pages/MealsPage';
import Loading from './components/Loading';
import Modal from './components/Modal';

function App() {
  // ======== LES STATES =========//
  const { loading, modal, meals } = useGlobalContext();

  return (
    <>
      {loading && <Loading />}

      {meals.lenght < 1 && <h3>Aucun meal disponible</h3>}

      <Router>
        {/* HEADER */}
        <Header />

        <Routes>
          {/* EMPLOYEES */}
          <Route path='/'
            element={<MealsPage />} />
        </Routes>
      </Router>

      {/* MODAL */}
      {modal && <Modal />}

      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default App
