import s from './App.modue.scss';
import Gallery from './components/blocks/gallery/Gallery';
import Header from './components/blocks/header/Header';
import Main from './components/blocks/main/Main';
import Photosession from './components/blocks/photosession/Photosession';
import Profile from './components/blocks/profile/Profile'

function App() {
  return (
    <div className={s.App}>
      <Header/>
      <Main/>
      <Photosession/>
      <Gallery/>
      <Profile/>
    </div>
  );
}

export default App;
