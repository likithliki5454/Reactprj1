// import React from 'react';
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// import Slider from 'react-slick';
// import    "./Corosel.css"
// import { data } from './data';
// import { ArrowBackIos, ArrowForwardIos, Slideshow } from '@material-ui/icons';
// import { slidesOnLeft } from 'react-slick/lib/utils/innerSliderUtils';



// const PreviousBtn=(props)=>{
//   const {className,onClick}=props
//   return(
// <div className={className} onClick={onClick}>
//   <ArrowBackIos style={{color:"blue",fontSize:"30px"}}/>
// </div>
//   )
// }


// const NextBtn=(props)=>{
//   const {className,onClick}=props
//   return(
//     <div className={className} onClick={onClick}>
//   <ArrowForwardIos style={{color:"blue",fontSize:"30px"}}/>
// </div>
    
//   )
// }



// const Pagess = () => {
//   return (<div style={{margin:"30px"}}>
//       <h1>basic corousel</h1>
// <Slider prevArrow={<PreviousBtn/>}  nextArrow={<NextBtn/>} slidesToShow={4}
// >
//   {
//     data.map(item=>(
//      <Card item={item}/>
//     ))
//   }


// </Slider>

//   </div>
//   )
// };

// const Card=({item})=>{
//     return(
//         <div style={{textAlign:'center' }}>
//             <img className='imgs' src={item} alt='' style={{width:"100%",height:"20vh",objectFit:'contain' ,backgroundColor:'blue' }}/>
//             <p style={{fontSize:'1vw',padding:'0.9vw 0'}}>gakgcaklgclahc;lahc;ljalcjkla</p>
//             <p style={{fontSize:'1vw',padding:'0.9vw 0' ,color:'green'}}>gk;whqilfhqwiohcilqhc</p>
//             <p style={{fontSize:'1vw',padding:'0.9vw 0' ,color:'grey'}}>lghflqhlqjhlqwjlfjq</p>
//         </div>
//     )
// }

// export default Pagess;
