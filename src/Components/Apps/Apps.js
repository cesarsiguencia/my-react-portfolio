import React from 'react';

// const Apps= (props) => {
// //   const { app } = props;

  



    const displayApp = () => {
        const applications = [
            { name: 'Dine-N-Wine',},
            { name: 'Robot-Gladiators' },
            { name: 'Run-Buddy'},
            { name: 'Weather-Dashboard'},
            { name: 'Taskmaster-Pro'}
        ]

        const generate = applications.map((app) => {
            console.log(app)
            var lowercaseName = app.name.toLowerCase()
            console.log(lowercaseName)

            return(
                <div>
                    <div >
                        <a  target="_blank" href={`https://cesarsiguencia.github.io/${lowercaseName}`} >
                            <img  className="container" src={require(`../../media/app-images/${app.name}.png`)} width="45%"></img>    
                            
                        </a>
                        <div>
                        <h5 className='app-name'>{app.name}</h5>
                        </div>
                    </div>
                </div> 
            )
        })

        return(
            <div>{generate}</div>
        )



     
}
export default displayApp;

// {/* <p>{currentCategory.description}</p>
// <PhotoList category={currentCategory.name} /> */}

{/* <div >
    
      
<a  target="_blank" href={`https://cesarsiguencia.github.io/${lowercaseName}`} >
    <img className="container" src={require(`../../media/app-images/${app.name}.png`)} width="45%" />
</a>
<div>
    <h4>{app.name}</h4>
</div>
</div> */}