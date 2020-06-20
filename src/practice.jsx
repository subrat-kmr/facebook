import React, { Component } from 'react'

var list = [
{
title: 'a',
url: 'https://facebook.github.io/react/',
author: 'subrat Walke',
num_comments: 3,
points: 4,
objectID: 0,
},
{
    title: 'b',
    url: 'https://facebook.github.io/react/',
    author: 'Walfe',
    num_comments: 3,
    points: 4,
    objectID: 0,
    },{
        title: 'c',
        url: 'https://facebook.github.io/react/',
        author: 'switzerland',
        num_comments: 3,
        points: 4,
        objectID: 0,
        },{
            title: 'd',
            url: 'https://facebook.github.io/react/',
            author: 'Dubai',
            num_comments: 3,
            points: 4,
            objectID: 0,
            },{
                title: 'e',
                url: 'https://facebook.github.io/react/',
                author: 'Miami',
                num_comments: 3,
                points: 4,
                objectID: 0,
                },{
                    title: 'f',
                    url: 'https://facebook.github.io/react/',
                    author: 'Las Vegas',
                    num_comments: 3,
                    points: 4,
                    objectID: 0,
                    },{
                        title: 'g',
                        url: 'https://facebook.github.io/react/',
                        author: 'Jordan',
                        num_comments: 3,
                        points: 4,
                        objectID: 0,
                        },{
                            title: 'h',
                            url: 'https://facebook.github.io/react/',
                            author: 'Tokya',
                            num_comments: 3,
                            points: 4,
                            objectID: 0,
                            }];
const searchTitle = ()=> {
list.map((item,index)=> {
    if(item === document.getElementById('input') ){
        return list.splice(1,index);
    }
} )
}
class Practice extends Component {

constructor(props) {
    super(props);
}
state = { list }

// this.clickHandler= searchTitle

render() { 
    return ( 

        
        
        
<div className="App">
    <div>
            <label>Search Box</label>
            <input id='input' type='text'  onClick= {(evt)=> {
                var inputValue = evt.target.value;
                                                    list.map((item,index)=> {
                                                        if(item.author !== inputValue ){
                                                            return list.splice(1,index);
                                                        }
                                                    } )
                                                }} />
        </div>
    <table>
        <thead>
            <th>Tiltle</th>
            <th>Url</th>
            <th>Author</th>
            <th>Num_comments</th>
            <th>Points</th>
            <th>ObjectID</th>
            {/* <th> Action </th> */}
        </thead>
        <tbody>
        {list.map((item)=> 
        <tr>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td>{item.points}</td>
            <td>{item.num_comments}</td>
            <td>{item.objectID}</td>
            <td>{item.url}</td>
            </tr>
        )}
        </tbody>
    </table>
</div>
    );
}
}

export default Practice;