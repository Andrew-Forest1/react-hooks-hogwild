import {useState} from 'react';

function Hog({name, specialty, greased, weight, image, medal}){
    //console.log({name, specialty, greased, weight, image})
    //console.log(medal)
    const [showDetials, setShowDetials] = useState(false);
    
    const handleClick = () => {
        setShowDetials(!showDetials)
    }

    return(
        <div class="ui card" onClick={handleClick}>
            {!showDetials ? 
                <div class="image">
                    <h3>{name}</h3>
                    <img src={image} alt={name}/>
                </div>
                :
                <div class="content">
                    <ul>
                        <li>{specialty}</li>
                        <li>{greased ? 'greased' : 'not greased'}</li>
                        <li>{weight}</li>
                        <li>{medal}</li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default Hog