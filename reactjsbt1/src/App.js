import logo from './logo.svg';
import './App.css';
import Header from './Components/BatTapLayoutComponent/Header';
import Banner from './Components/BatTapLayoutComponent/Banner';
import Body from './Components/BatTapLayoutComponent/Body';
import Item from './Components/BatTapLayoutComponent/Item';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Banner />
      <Item />
    </div>
  );
}

export default App;
