import React from 'react'

export default function ColleagueCard(props) {
  const { colleague, skills, color } = props;
  
  return (  
    <div className='row'>
      <div className='col s12 m12'>
        <div className='grey lighten-5 z-depth-1'>
          <div className='row valign-wrapper hoverable'>
            <div className='col s4 m4'>
              <img src={colleague.img} alt='foto rosto' className='circle responsive-img'/>
            </div>
            <div className='col s8 m7'>
              <h4 className={`row ${color} darken-1 white-text center`}>
                {colleague.name}                
              </h4>
              <h5 className='row black-text center'>
                {colleague.experience}                
              </h5>
              {
                colleague.skills.map(i => {
                  const skill = skills.find(x => x.id === i);
                  return (
                    <div className="col s4" key={i}>
                    <img src={skill.img} alt='skill logo' className='circle responsive-img' />
                    </div>
                  );
                })
              }              
            </div>                               
          </div>
        </div>
      </div>
    </div>
  
  )
}

