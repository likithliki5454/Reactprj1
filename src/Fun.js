import React from 'react'
import JsonData from './Students.json'
function Fun(){
	const DisplayData=JsonData.map(
		(info)=>{
			return(
                <div
                style={{
                  textAlign: "center",
                  margin: 20,
                  padding: "0,10px",
                  width: 220,
                  boxShadow: "0 1px 6px 0 rgb(32 33 36 /58%)",
                }}
              >
                <img
                  className="imgs"
                  src={info.image1}
                  alt=""
                  style={{ width: "100%", height: "20vh", objectFit: "contain" }}
                />
          
                <p style={{ fontSize: "1vw", padding: "0.9vw 0", color: " #4CAF50" }}>
                 {info.id}
                </p>
          
                <p>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "grey",
                      marginRight: 7,
                      fontWeight: 300,
                    }}
                  >
                   {info.name}
                  </span>
          
                  <span style={{ color: "grey", marginRight: 7, fontWeight: 300 }}>
                  {info.city}
                  </span>
                </p>
          
                <button>Add to cart</button>
              </div>








			)
		}
	)

	return(
		<div>
		
					
					{DisplayData}
				
		</div>
	)
}

export default Fun;
     