import React from 'react'

export default function WeatherDetails({weather: { main: { temp }, name }}) {
    return (
        <>
            <div className="row">
                <div>The weather in {name} is currently {temp}</div>
            </div>
        </>
    )
}