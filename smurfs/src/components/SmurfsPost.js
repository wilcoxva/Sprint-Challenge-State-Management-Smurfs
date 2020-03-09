import React, { useState } from 'react';
import axios from 'axios';

const SmurfsPost = () => {

  const [smurf, setSmurf] = useState({name: "", age: "", height: ""});
  console.log('post:', smurf);

  const changeHandler = (e) => {
    e.preventDefault();
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(response => {
            console.log(response);
        })
    }; 

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" name="name" placeholder="name" value={smurf.name} onChange={changeHandler} />
                <input type="text" name="age" placeholder="age" value={smurf.age} onChange={changeHandler} />
                <input type="text" name="height" placeholder="height" value={smurf.height} onChange={changeHandler} />
                <button type="Submit">Submit</button>
            </form>
        </div>
    )
}

export default SmurfsPost;