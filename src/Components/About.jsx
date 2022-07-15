import React, { Component } from 'react'
import homeimg from '../Components/Image/home1.png'

class About extends Component {
    render() { 
        return (
            <div className="abo" id="abo_1">
                <h3>About</h3>
                <div className="cards">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem possimus nulla aliquam totam odit, qui delectus sint ipsam ad iste ratione rem minus dolores laudantium reprehenderit iusto consectetur necessitatibus earum illum! Quod reprehenderit officiis earum esse animi praesentium neque voluptatibus provident, fugiat aliquam, quis voluptates rerum facere laborum ipsa itaque.
                    </p>
                    <span></span>
                    <img src={homeimg} alt="Error" />
                </div>
            </div>
        );
    }
}
 
export default About;