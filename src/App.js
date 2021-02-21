import React from 'react'
import Serchbar from './Serchbar'
import unsplash from '../src/api/unsplash'
import Imagelist from './imagelist'


    
class App extends React.Component {

    state = { images: [] };
    onSearchSubmit=(term)=>{
        unsplash.get("/search/photos", {
            params: { query: term }
        }).then(response => {
            this.setState({ images: response.data.results });
        });
    }

    render(){
        return(
            <div>
                <Serchbar onSubmit={this.onSearchSubmit}  />
                
                <Imagelist images={this.state.images}/>

            </div>
        );
    }
}

export default App
