import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Layout from './pages/admin/Layout';
import Dashboard from './pages/admin/Dashboard';
import AddBlog from './pages/admin/AddBlog';
import Comments from './pages/admin/Comments';
import ListBlog from './pages/admin/ListBlog';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog/:id' element={<Blog />} />
      <Route path='/admin' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='addblog' element={<AddBlog />} />
        <Route path='listblog' element={<ListBlog />} />
        <Route path='comment' element={<Comments />} />
      </Route>
    </Routes>
  )
}

export default App;