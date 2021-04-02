import React from 'react'

export default (props) => {

    const post = props.element;

    return (<div className="shadow p-8 bg-white mr-4 rounded">
        <h4 className="font-bold">
            <a href={post.url} target="_blank">{post.title}</a>
        </h4>  


        <div className="text-center">
            <a className="btn" href={post.link}>Leer</a>
        </div>


    </div>
    );
}