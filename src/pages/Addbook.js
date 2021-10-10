import React, { Component } from "react";

class Addbook extends Component{

    state ={
        
            image:null
        
    }
 
     prevuImage=(e)=>{
        console.log(e.target.files[0]);
        const reader=new FileReader();
        reader.onload=()=>{
            if(reader.readyState===2){
                this.setState({image: reader.result});
            }
        }
        console.log(this.state.image);
        reader.readAsDataURL(e.target.files[0]);

    }

    render(){

    return(
        <div style={{width:'80%', margin:'auto'}}>
        <div className="container" style={{marginTop:'10px'}} >Add Book Here</div>
        <div className="input-group mb-3">
  <input type="file" className="form-control" id="inputGroupFile02" onChange={e=>this.prevuImage(e)}/>
  <label className="input-group-text" for="inputGroupFile02">Upload</label>
  </div>

  <div className="card" style={{width:'18rem'}}>
  <img src={this.state.image} className="card-img-top" alt="image preview"/>
  <div className="card-body">
    <h5 className="card-title">Image preview</h5>
    
  </div>
  
  </div>
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label" style={{marginTop:'10px'}}>Book Title</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="eg.Robert Kiyosaki"/>

  <label for="exampleFormControlInput1" class="form-label" style={{marginTop:'10px'}}>Author</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="eg.Rich dad poor dad"/>

  <label for="exampleFormControlInput1" class="form-label" style={{marginTop:'10px'}}>Prize</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="eg.299RS"/>


</div>




<button type="button" class="btn btn-outline-primary" style={{marginTop:'10px'}}>Primary</button>
</div>
    );

}
   
}

export default Addbook;