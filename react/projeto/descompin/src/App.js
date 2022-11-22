import { HomePage } from "./pages/Home/HomePage";
import { HeaderPartials } from "./partials/headerpartials/HeaderPartials";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyFolderPages } from "./pages/myfolderpages/MyPagesFolder";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderPartials />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/minhas-pastas" element={<MyFolderPages />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
