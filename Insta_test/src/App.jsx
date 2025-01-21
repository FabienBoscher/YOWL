import Navbar from "./components/NavBar";
import Stories from "./components/Stories";
import Post from "./components/Posts";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Stories />
      <div className="container mx-auto px-4 py-6">
        <Post />
      </div>
    </div>
  );
};

export default App;
