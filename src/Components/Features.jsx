import React, { Component } from 'react';
import featureOfBot from './BotFeature';

class Feature extends Component {
    render() { 
        return (
            <div className="fea" id="fea_1">
                <h1>Features</h1>
                {
                    featureOfBot.map((e) => {
                        return (
                            <div className="card-one">
                                <div className="card1">
                                    <h3>{e.topic}</h3>
                                    <p>
                                        
                                    </p>
                                </div>
                                <div className="card1one">
                                    <img src={e.picture} alt="Error" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>      
        );
    }
}
 
export default Feature;