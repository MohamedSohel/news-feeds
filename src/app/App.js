import React from 'react';
import Header from '../component/layout/Header';
import '../App.css';
import Footer from "../component/layout/Footer";
import NewsContainer from "../container/NewsContainer";

function App() {
  return (
    <div>
      <Header />
      <NewsContainer />
      <Footer />
    </div>
  );
}

export default App;
