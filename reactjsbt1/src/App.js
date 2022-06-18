import logo from './logo.svg';
import './App.css';
import Header from './Components/BatTapLayoutComponent/Header';
import Banner from './Components/BatTapLayoutComponent/Banner';
import Body from './Components/BatTapLayoutComponent/Body';
import Item from './Components/BatTapLayoutComponent/Item';
import Footer from './Components/BatTapLayoutComponent/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Banner />
      <Item />
      <Footer />
    </div>
  );
}

export default App;
