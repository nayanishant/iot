import React, { Component } from 'react'
import person from './Data'


class Contact extends Component {
    render() { 
        return (
            person.map((persons) => {
              return(
                <div id='con_1' className='card'>
                  <div className="container">
                    <div className="cover-photo">
                      <img key={persons.id} src={persons.picture} className="profile" alt='Error'/>
                    </div>
                    <div className="profile-name">
                      {persons.name}
                    </div>
                    <div className="social-links">
                      <a href={persons.linkedin} target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                      <a href={persons.github}  target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })
        );
  }
}
 
export default Contact;