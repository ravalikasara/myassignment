import {Component} from 'react'




class Posts extends Component{
    render(){
        const {blogsList}=this.props
        return( <ul className='container'>
        {blogsList.map((each)=>{
          return <li key={each.id} className="list-item">
            <div>
            <h1 className="title">{each.title}</h1>
            <p className="author">{each.Author}</p>
            </div>
            <button className="button">View Post</button>
          </li>
        })}
      </ul>)
    }
}
export default Posts