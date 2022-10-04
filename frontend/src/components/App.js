import React from 'react';
import Header from '../components/Header';
import Products from '../components/Products';
import Footer from '../components/Footer';


class App extends React.Component {
    render() {
        return (
           <div className='main'>
             <Header />
             <Products/>
             <Footer/>
           </div>
        );
    }
} 

export default App;