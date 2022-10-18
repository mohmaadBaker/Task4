import React from "react";
class Comptwo extends React.Component{
constructor(props){
    super(props)
    this.state={
        datas:[],
        a:0,
        index:'',
    }
}
componentDidMount(){
    this.refs.txttile.focus();
    this.refs.txtdescription.focus();

} 
handeladd(e){
    e.preventDefault()
    let datas=this.state.datas;
    let title=this.refs.txttile.value;
    let description=this.refs.txtdescription.value;
    if(this.state.a===0){
        let data={
            title,description
        }
        datas.push(data)
    }
    else{
        let index=this.state.index;
        datas[index].title=title;
        datas[index].description=description;
    }
    this.setState({
        datas:datas,
        a:0,
    })
    this.refs.myform.reset();
}
edithandle(i){
let data=this.state.datas[i];
this.refs.txttile.value=data.title;
this.refs.txtdescription.value=data.description
this.setState({
a:1,
index:i,
})
this.refs.title.focus();
this.refs.txtdescription.focus();
}
deletehandel(i){
let datas=this.state.datas;
datas.splice(i,1);
this.setState({
    datas:datas,
})
}
render(){
    return(<div>
        <form ref="myform" style={{float: 'left',margin:"20px"}}>
        <label >Title</label>
        <br></br>
        <input type="text" ref="txttile"></input>
        <br></br>
        <label >description</label>
        <br></br>
        <textarea style={{rows:10 ,cols:50}} ref="txtdescription"> </textarea>
        <br></br>
        <button style={{marginLeft:50} } onClick={this.handeladd.bind(this)}> Add</button>
        <button style={{marginLeft:50} }> Rest</button>
        </form>
        <hr style={{width:1400}}/>
   <pre style={{textAlign:'left'}}>
   
   {this.state.datas.map((data,i)=><div key={i} style={{textAlign:'left'}}> {data.title}<br></br>
   
   <div>{data.description}</div> 
   <br></br>
   <button onClick={()=>this.edithandle(i)} style={{marginLeft:50} }> Edit</button>
   <button onClick={this.deletehandel.bind(this,i)} style={{marginLeft:50} }> Delete</button>
   <hr style={{width:1400,borderTop:"1px dashed black"}}/>
   </div>)}
   </pre>
        
        </div>)
}
}

export default Comptwo
// class Comptwo extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             title:'',
//             description:'',
//           titles:[],
//           descriptions:[],
//           textadd:'',
//           textreast:'',
//           Toggleadd:true,

//     }
// }
// titletext(e){
// let titlevalue=e.target.value
// this.setState({
//     title:titlevalue
// })


//     }
//     descriptiontext(e){
//         let descriptionvalue=e.target.value;
//         this.setState({
//             description:descriptionvalue
//         })

//     }
//     onSubmitfunc(e){
//         e.preventDefault()
//         const t=this.state.title;
//         const d=this.state.description;
//         this.setState({
//             resulttitle:t,
//             resultdescription:d,

//         })
//         this.clear()
//     }

// clear(){
//     this.setState({
//         title:'',
//         description:''
//     })
// }
// changeText = (e) => {
//     e.preventDefault()
//     this.setState({
//         title:'',
//         description:'',
//         titles:[...this.state.titles,this.state.title],
//         descriptions:[...this.state.descriptions,this.state.description]
//     })
//   } 
// clickadd(){
//     this.setState(state=>(
// {Toggleadd:!state.Toggleadd}

//     ))

// }
// handelDelete(i){
// let t=this.state.titles;
// let d=this.state.descriptions
// t.splice(i,1);
// d.splice(i,1);
//     this.setState({
//         titles:t,
//         descriptions:d,
//     })

// }
// render(){
//     let c=this.state.Toggleadd ?"Add": "Edit" 
// return(<div>
    
//     <form style={{float: 'left',margin:"20px"}} onSubmit={this.changeText}>
//     <label htmlFor='title'>Title</label>
//     <br></br>
//     <input type="text" id='title' value={this.state.title} onChange={this.titletext.bind(this)}></input>
//     <br></br>
//     <label htmlFor='title'>Description</label>
//     <br></br>
//     <textarea style={{rows:10 ,cols:50}} name="comment" value={this.state.description} onChange={this.descriptiontext.bind(this)}> </textarea>
//     <br></br>
// <button style={{marginLeft:50} } onClick={this.clickadd.bind(this)} > Add
// </button>
// <button style={{marginLeft:50}} > Rest </button>

//     </form>
//     <hr style={{width:1400}}/>

//        <div style={{textAlign:'left'}}> {this.state.titles.map((e,i)=><div key={i}>{e}</div>)}    </div>
       
//       <div style={{textAlign:'left'}}> {this.state.descriptions.map((e,i)=><div key={i}>{e}</div>)}    </div>
     
// <button onClick={this.handelEdit.bind(this)}>Edit </button>
// <button onClick={this.handelDelete.bind(this)}>Delete </button>

//     </div>)
// }
// }
// <button style={{marginLeft:50} } onClick={()=>{this.changebuttonadd("Edit")}}  > {this.state.textadd} </button>
// <button style={{marginLeft:50}} onClick={this.changeText}  > {this.state.text ? "Edit" :"Add"} </button>
// <button style={{marginLeft:50}}   onClick={this.changeText }  > {this.state.text ? "Delete" :"Reast"} </button>