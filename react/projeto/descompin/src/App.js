import { HomePage } from "./pages/Home/HomePage";
import { HeaderPartials } from "./partials/headerpartials/HeaderPartials";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyFolderPages } from "./pages/myfolderpages/MyPagesFolder";
import { AppContext } from "./store/AppContext";

const initialState = {
  activePinId: null,
  mode: null,
  folders: [],
  type: null,
  pins: [],
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppContext initialState={initialState}>
          <HeaderPartials />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/minhas-pastas" element={<MyFolderPages />} />
          </Routes>
        </AppContext>
      </div>
    </BrowserRouter>
  );
}

export default App;
