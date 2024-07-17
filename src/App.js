// import './App.css'
// import { HashRouter as Router, Routes, Route} from 'react-router-dom'
// import {Home} from './pages/home'
// import { NewPostPage } from './pages/new_post_page'
// import { HelloWorld } from './pages/helloworld'

// function App() {

//   return(
//   <Router>
//     <Routes>
//       <Route path="/" element={<Home />}/>
//       <Route path="/hello" element={<HelloWorld />}/>
//       <Route path="/newpost" element={<NewPostPage />}/>
//     </Routes>
//   </Router>
//   )
// }

// export default App;

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { NewPostPage } from "./pages/new_post_page";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path="new_post" element={<NewPostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);