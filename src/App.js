import './App.css';
import Header from './MyComponent/Header.js';
// import {Footer} from './MyComponent/Footer.js';
import Signin from './MyComponent/Signin.js';
import PostStore from './MyComponent/PostStore.js';
import { Routes, Route,} from "react-router-dom";


function App() {
  return (
    <>
      <Header />
        <div className="App">
          <Routes>
            {/* id, title, description, writtenby,posttime,noOfLike,noOfDislike */}

            {/* <Route path='/' element={<Home />}/> */}
            <Route path='/signin' element={<Signin />}/>
            <Route path='/poststore' element={<PostStore/>}/>
          </Routes>

        </div>
    </>
  );
}

export default App;
