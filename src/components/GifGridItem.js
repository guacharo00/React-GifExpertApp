import React from 'react'

export const GifGridItem = ( {title, id, url}) => {

    // console.log( props )

    return (
        <div className="card animate__backInDown">
            <img src={ url } alt={ title } />
            <p> {title} </p>
        </div>
    )
}
