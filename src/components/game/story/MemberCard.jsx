import React from 'react'

export default function MemberCard(props) {
  return (  
    <div className="row">
      <div className="col s8 m8">
        <div className="grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s4 m4">
              <img src="./img/dev.png" alt="dev" className="circle responsive-img"/>
            </div>
            <div className="col s8 m8">
              <span className="black-text">
                {props.data}
              </span>
            </div>                        
          </div>
        </div>
      </div>
    </div>
  
  )
}

