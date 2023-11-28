import logo from './logo.svg';
import './App.css';
import BlogPosts from './Components/BlogsPost'
const blogsList = [
  {
    id: 1,
    title: 'My first post',
    Author:'chetan Bhagat',
    publishedDate: 'Aug 2nd',
  },
  {
    id: 2,
    title: 'My second post',
    Author:'APJ shinde',
    publishedDate: 'Mar 1st',
  },
  {
    id: 3,
    title: 'My third post',
    Author:'chetan Bhagat',
    publishedDate: 'Jan 2nd',
  },
  {
    id: 4,
    title: 'My fourth post',
    Author:'chetan Bhagat', publishedDate: 'Dec 24th',
  },
  {
    id: 5,
    title: 'My fifth post',
    Author:'chetan Bhagat', publishedDate: 'Nov 10th',
  },
]
function App() {
  return (
    <BlogPosts blogsList={blogsList}/>
  );
}

export default App;
