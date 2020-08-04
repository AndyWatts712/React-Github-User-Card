import React from 'react'


export default function Followers(props) {
console.log(props)

    return(
        <div>
        {props.followers.map(item => {
            console.log(item.login)
            return <p>{item.login}</p>
          })}
        </div>
    )
}