import {Component} from 'react'

import './index.css'

class BlogPosts extends Component {
 render() { 
    const {blogsList}= this.props
  
  return (
    <li className="blog-item">
      <div className="blog-details-container">
        <h1 className="blog-title">h</h1>
        <p className="blog-published-date">h</p>
      </div>
      <button className='button'>View Post</button>
    </li>
  )
 }
}

export default BlogPosts