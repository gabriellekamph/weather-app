import React from 'react';
import './styles.css';

function Week(props) {

    console.log(props.weatherData.name)

    return (
        <div className="week">

            <p className="next-five">Next 5 days</p>

            <div className="day">
                <p>First</p>
            </div>

            <div className="day">
                <p>Second</p>
            </div>

            <div className="day">
                <p>Third</p>
            </div>

            <div className="day">
                <p>Fourth</p>
            </div>

            <div className="day">
                <p>Fifth</p>
            </div>

            <div className="day">
                <p>Sixth</p>
            </div>  

        </div>
    )
}

export default Week;