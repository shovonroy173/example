import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./utils/Layout";
import { Theme } from "@radix-ui/themes";
function App() {
  return (
    <BrowserRouter>
    <Theme>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Theme>
    </BrowserRouter>
  );
}

export default App;
