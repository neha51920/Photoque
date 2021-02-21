import React from "react";
import './imagelist.css'

const imagelist= props =>{
 const app=props.images.map((image)=>{
         return   <img src={image.urls.regular} alt="ghjh" />
        });
        return <div className="image-list">{app}</div>
    
};
export default imagelist;