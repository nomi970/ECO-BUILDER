// import "./App.css";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useParams,
// } from 'react-router-dom';
// import { Home } from "./Pages/home/Home";
// import { Layout } from "./Components/layout/Layout";
// import { ContactUs } from "./Pages/contact-us/ContactUs";
// import { Blog } from "./Pages/blog/Blog";
// import { BlogDetail } from "./Pages/blog/BlogDetail";
// import  ProjectDetail  from "./Pages/projects/ProjectDetail";
// import { About } from "./Pages/about/About";
// import Projects from "./Pages/projects/projects";



// export const App = () => {

//   return (
//     <>
//       <Router>
//         <Layout>
//           <Routes>
//             <Route path="/" element={<Home />} exact />
//             <Route path="/about" element={<About />} exact />
//             <Route path="/contact-us" element={<ContactUs />} exact />
//             <Route path="/service" element={<Blog />} exact />
//             <Route path="/projects" element={<Projects />} exact />
//             <Route path="/service/:id" element={<BlogDetail />} exact />
//             <Route path="/projects/:id" element={<ProjectDetail />} exact />
//           </Routes>
//         </Layout>
//       </Router>
//     </>
//   );
// }

// export default App;
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from "./Pages/home/Home";
import { Layout } from "./Components/layout/Layout";
import { ContactUs } from "./Pages/contact-us/ContactUs";
import { Blog } from "./Pages/blog/Blog";
import { BlogDetail } from "./Pages/blog/BlogDetail";
import  ProjectDetail  from "./Pages/projects/ProjectDetail";
import { About } from "./Pages/about/About";
import Projects from "./Pages/projects/projects";

// Component that scrolls to top on route changes
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

export const App = () => {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/contact-us" element={<ContactUs />} exact />
            <Route path="/service" element={<Blog />} exact />
            <Route path="/projects" element={<Projects />} exact />
            <Route path="/service/:id" element={<BlogDetail />} exact />
            <Route path="/projects/:id" element={<ProjectDetail />} exact />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;