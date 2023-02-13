import { useState } from 'react';

const Home = () => {

    // let name = 'mario'

    //making reactive by setting 
    //setSomething is the second re-render
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    
    const handleClick = () => {
        setName('luigi');
        setAge('30');
    }

    /*
    const handleClickAgain = (name, e) => (
        console.log('hello ' + name, e.target)
    )
    */

    //make it reactive
    //let name = 'mario';


    return ( 
        
        <div className="home">
            <h2>Homepage</h2>
            {/* using parenthesis in the event will induce it automatically, we don't want that */}
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
            
            {/* Use an anonymous function to put inputs without firing automatically */}
            {/*<button onClick={(e) => handleClickAgain('mario', e)}>Click Me Again</button> */}
        </div>
    );
}
 
export default Home;