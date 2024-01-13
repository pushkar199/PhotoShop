import { useState } from "react";
import "./App.css";
import CardWrapper from "./CardWrapper";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";

function App() {
  // ---------------------------------------------
  // States
  const [search, setSearch] = useState("india");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  // ---------------------------------------------

  return (
    <div className="app">
      {/* Show loading screen only if loading id true */}
      {loading && <Loader />}
      <Header setSearch={setSearch} setCategory={setCategory} />
      <CardWrapper
        search={search}
        category={category}
        setLoading={setLoading}
      />
      <Footer />
    </div>
  );
}

export default App;
