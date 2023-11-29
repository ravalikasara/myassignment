
import './App.css';

import Posts from './Component/Posts/index'
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
    Author:'rohit sharma',
    publishedDate: 'Mar 1st',
  },
  {
    id: 3,
    title: 'My third post',
    Author:'ramaswamy',
    publishedDate: 'Jan 2nd',
  },
  {
    id: 4,
    title: 'My fourth post',
    Author:'ashok mishra', publishedDate: 'Dec 24th',
  },
  {
    id: 5,
    title: 'My fifth post',
    Author:'chetan Bhagat', publishedDate: 'Nov 10th',
  },
]
function App() {
  return (
   <>
    <Posts blogsList={blogsList}/>
    </>
  );
}

export default App;
