import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';
import { Home } from "./Pages/home/Home";
import { Layout } from "./Components/layout/Layout";
import { ContactUs } from "./Pages/contact-us/ContactUs";
import { Blog } from "./Pages/blog/Blog";
import { BlogDetail } from "./Pages/blog/BlogDetail";
import { About } from "./Pages/about/About";


export const App = () => {

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/contact-us" element={<ContactUs />} exact />
            <Route path="/service" element={<Blog />} exact />
            <Route path="/service/:id" element={<BlogDetail />} exact />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
