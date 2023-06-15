import React from 'react';
import Component2 from './Component2';
export const data = React.createContext();
const Component1 = () =>
{
    const mobilesdata=[
        {
            name:"realme6",
            brand:"6",
            battery:5000
        },
        {
            name:"redmi9",
            brand:"9",
            battery:6000
        }
    ]
    
    return(
        <data.Provider value={mobilesdata}>
            <Component2/>
        </data.Provider>
    )
}
export default Component1;
