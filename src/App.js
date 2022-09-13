import './App.css';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';
import MainContainer from './components/MainContainer'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer>
        <LeftSection />
        <RightSection />
      </MainContainer>
    </div>
  );
}

export default App;
