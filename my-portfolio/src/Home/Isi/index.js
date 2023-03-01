import React from 'react';
import '../Sidebar/Folio.css';


const Homes = () => {
return (
	<div className='w3-main' style={{marginLeft:'300px'}}>
	<div className='w3-container'>
    <h1><b>My Portfolio</b></h1>
        <div className='w3-section w3-bottombar w3-padding-16'>
            <span className='w3-margin-right'>Filter:</span>
            <button className='w3-button w3-black'>ALL</button>
            <button className='w3-button w3-white w3-hide-small' onClick={sayHello}><i className='w3-margin-right'></i>Project</button>
            <button className='w3-button w3-white w3-hide-small' onClick={sayHello}><i className='w3-margin-right'></i>Photos</button>
            
        </div>
    </div>
	</div>
);
};
function sayHello() {
    alert('Belum ada Data!');
  }

export default Homes;
