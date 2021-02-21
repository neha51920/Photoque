import React, { Component } from 'react'
import './imagelist.css'

export class Serchbar extends Component {
constructor(props) {
    super(props)

    this.state = {
         term:'',
    }
}

addName=(event)=>{
    event.preventDefault();
    this.setState({
        term:event.target.value
    })
   
}
onsubmit=(event)=>{
    event.preventDefault();
      this.props.onSubmit(this.state.term)
}

    render() {
        return (
           <div className="serchbar">
               <form onSubmit={(event)=>this.onsubmit(event)} >
                 
                   <div className="input-group mb-3">
                        <input type="text" className="form-control" value={this.state.term} onChange={(event)=>this.addName(event)} />
                        <button className="btn btn-outline-primary" type="submit" >SERCH PHOTOS</button>
                    </div>
               </form>
              
           </div>
        )
    }
}                                                                                                                                                

export default Serchbar
