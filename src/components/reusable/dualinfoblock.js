import React from 'react';
import Heading from './Heading';
import {Link} from "gatsby";

export default function Dualinfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
        <div className="container">
            <Heading title={heading} />
            <div className="row">
<div className="col-8 mx-auto">
    <p className="lead text-white mb-5">
        making it look like readable English. Many desktop making it look like
         readable English. Many desktop publishing packages and web page editors
          now use Lorem Ipsum as their default model text, and a search for 'lorem
           ipsum' will uncover many web sites still in their infancy. Various 
           versions have evolved over the years,
         sometimes by accident, sometimes on purpose (injected humour and the like).
        publishing packages and web page editors now use Lorem Ipsum as their
         default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy. Various versions have evolved over
           the years, sometimes by accident, sometimes on purpose (injected humour
            and the like).making it look like readable English. Many desktop publishing
             packages and web page editors now use Lorem Ipsum as their default model 
             text, and a search for 'lorem ipsum' will uncover many web sites still in
              their infancy. Various versions have evolved over the years, 
            sometimes by accident, sometimes on purpose (injected humour and the like).
        aking it look like readable English. Many desktop publishing packages
         and web page editors now use Lorem Ipsum as their default model text,
          and a search for 'lorem ipsum' will uncover many web sites still in
           their infancy. Various versions have evolved over the years,
         sometimes by  accident, sometimes on purpose (injected humour and the like).
    </p>
</div>
<div className="col-4">
    <div className="card bg-dark" >
  <img className="card-img-top" src="https://images.pexels.com/photos/6977377/pexels-photo-6977377.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940https://images.pexels.com/photos/6977377/pexels-photo-6977377.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title text-success">Just Click Photos</h5>
    <p className="card-text text-white"> and a search for 'lorem ipsum' will uncover many web sites still in
           their infancy. Various versions have evolved over the years,
         sometimes by accident, sometimes on purpose (injected humour and th</p>
         <Link to="#" className="btn btn-warning btn-block">{heading}</Link>
   
  </div>
</div>
</div>
            </div>
        </div>
            
        </section>
    )
}
