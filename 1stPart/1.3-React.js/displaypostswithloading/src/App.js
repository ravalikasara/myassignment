import {Component} from 'react'

import Loader from 'react-loader'; 

import './App.css';


class App extends Component {
  state = {
    
    posts: [],

    status: 'INITIAL',
  }
  componentDidMount() {
  
    this.getPost()
  }

  getPost = async () => {
    this.setState({
      status: 'LOADING',
    })
 
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

 this.setState({status:"SUCCESS",posts:data})
  }

  renderLoadingForPosts = () => (
    <div testid="loader">
      <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
    </div>
  ) 

  renderPostSuccessView=()=>{
  const {posts}=this.state
  return(<ul>{posts.map((each)=><li key={each.id}><p>{each.title}</p></li>)}</ul>)
}


  renderPost = () => {
    const {status} = this.state

    switch (status) {
      case 'LOADING':
        return this.renderLoadingForPosts()
      case 'SUCCESS':
        return this.renderPostSuccessView()
      
      default:
        return null
    }
  }


  render(){
    return(  <div className="posts-container">{this.renderPost()}</div>)
}}

export default App;
