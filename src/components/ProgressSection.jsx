import React from 'react';
import '../assets/css/ProgressSection.css';
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CircularProgress from "./CircularProgress";
import _ from "lodash";

function ProgressSection() {
    const perDegree = 0.00277777777;
    const turns = 1 / 8;
    return(
        <div className="progressBox d-flex flex-wrap">
            <div className='m-4' style={{ width: 150, height: 150 }}>
                <span>Precipitation</span>
                <CircularProgress valueStart={0} valueEnd={44}>
                    {(value) => <CircularProgressbar value={value} text={`${value}%`} />}
                </CircularProgress>
            </div>

            <div className='m-4' style={{ width: 150, height: 150 }}>
                <span>Humidity</span>
                <CircularProgress valueStart={0} valueEnd={67}>
                    {(value) => <CircularProgressbar value={value} text={`${value}%`} />}
                </CircularProgress>
            </div>

            <div className='m-4' style={{ width: 150, height: 150 }}>
                <span>UV Index</span>
                <CircularProgress valueStart={0} valueEnd={7}>
                    {(value) => <CircularProgressbarWithChildren value={value} text={`${value}`}>
                    <div style={{ fontSize: 20, marginTop: 50 }}>
                        High
                    </div>
                    </CircularProgressbarWithChildren>}
                </CircularProgress>
            </div>

            <div className='m-4' style={{ width: 150, height: 150 }}>
                <span>Max Wind</span>
                <span className='east'>East</span>
                <CircularProgress valueStart={0} valueEnd={5} circleRatio={0.5}>
                    {(value) => <CircularProgressbarWithChildren value={value} text={`${value}`} styles={{
                        // Customize the root svg element
                        root: {},
                        path: {
                            transform: 'rotate(0.1turn)',
                            transformOrigin: 'center center',
                        },
                        trail: {
                            transform: 'rotate(1turn)',
                            transformOrigin: 'center center',
                            zIndex: 1000,
                        },
                        background: {
                            fill: '#3e98c7',
                        },
                    }}>
                    <i class="bi bi-caret-up-fill"></i>
                    <div style={{ fontSize: 12, marginTop: 50 }}>
                        km/h
                    </div>
                    { _.range(8).map(index => (
                    <div
                        style={{
                            position: "absolute",
                            height: "100%",
                            transform: `rotate(${index * turns}turn)`
                        }}
                        >
                        <div style={{
                            background: "#fff",
                            width: "3px",
                            height: `${10}%`
                        }} />
                    </div>
                    )) }

                    </CircularProgressbarWithChildren>}
                </CircularProgress>
            </div>
        </div>
    );
}

export default ProgressSection;