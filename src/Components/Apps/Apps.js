import React from 'react';

const Apps= (props) => {
  const { app } = props;

    var lowercaseName = app.name.toLowerCase()

  return (
    <div >
    
      
        <a  target="_blank" href={`https://cesarsiguencia.github.io/${lowercaseName}`} >
            <img className="container" src={require(`../../media/app-images/${app.name}.png`)} width="45%" />
        </a>
        <div>
            <h4>{app.name}</h4>
        </div>
    </div>
  );
}
export default Apps;

// {/* <p>{currentCategory.description}</p>
// <PhotoList category={currentCategory.name} /> */}