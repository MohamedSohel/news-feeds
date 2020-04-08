import React from 'react';
import Header from '../component/layout/Header'
import '../App.css';
import Footer from "../component/layout/Footer";
import News from "../component/News";

function App() {
  return (
    <div>
      <Header />
      <News/>
      <Footer/>
    </div>
  );
}

export default App;
