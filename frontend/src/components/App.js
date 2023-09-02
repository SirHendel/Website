import React, { useEffect, useState } from 'react';
import '../styles/style.css';
import PersonList from './PersonList';
import ContactForm from './ContactForm';
import Header from './Header';
import Footer from './Footer';
import ButtonNavigation from './ButtonNavigation';

function App() {
  const [Themen, setThemen] = useState([]);
  const [Personen, setPerson] = useState([]);

  const fetchData = async () => {
    try {
      const response1 = await fetch('http://localhost:4000/news');
      const ThemenData = await response1.json();
      setThemen(ThemenData);

      const response2 = await fetch('http://localhost:4000/personen');
      const PersonData = await response2.json();
      setPerson(PersonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div className="container">
      <Header />
    
      <ButtonNavigation Themen={Themen}/>
      <div className='single_container'>
        <PersonList Personen={Personen} />
      </div>
      <div className='single_container'>
        <ContactForm />
      </div>
      <div className='single_container'>
        <ContactForm />
      </div>
      <div className='single_container'>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;