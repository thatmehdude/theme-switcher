import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import { ThemeProvider } from "./ThemeContex";
function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ThemeSwitcher />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
