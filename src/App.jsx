import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import axios from "axios";
import { useEffect, useState } from "react";
import BlogList from "./components/BlogList";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://linesnews.onrender.com/api/news-datas").then((res) => {
      setPosts(res.data.data);
    });
  }, []);
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Banner />
      <BlogList posts={posts} />
      <Footer />
    </div>
  );
}

export default App;
