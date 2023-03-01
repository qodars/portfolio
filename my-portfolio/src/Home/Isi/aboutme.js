import '../Sidebar/Folio.css';

function About() {
    return(
        <div className='w3-main' style={{marginLeft:'300px'}}>
         <div className="w3-container w3-padding-large" style={{marginBottom:'32px'}}>
         <h4><b>About Me</b></h4>
         <p>My name is Rinaldy, I am a graduate student of Raharja University majoring in Engineering
            Informatics (software engineering). I have an internship experience in
            PT.indofood fortuna Makmur in HR department fullstack development section
        </p>
        <hr />
        <h4>Technical Skills</h4>
        
        <p>Pogramming</p>
        <div className="w3-grey">
          <div className="w3-container w3-dark-grey w3-padding w3-center" style={{width:"85%"}}>85%</div>
        </div>
        <p>Microsoft Office</p>
        <div className="w3-grey">
          <div className="w3-container w3-dark-grey w3-padding w3-center" style={{width:"70%"}}>70%</div>
        </div>
        <p>Photoshop</p>
        <div className="w3-grey">
          <div className="w3-container w3-dark-grey w3-padding w3-center" style={{width:"80%"}}>80%</div>
        </div>
       
        <hr />

        <h4>Education</h4>
        
            <p>&#10146; SMKN 1 Kab.Tangerang</p>
            <p>&#10146; Universitas Raharja</p>

        <hr />

        <h4>Work Experience</h4>
        <p>&#10146; PT. Indofood Fortuna Makmur(internship) <br />
            <ul>
           <li> Responsible for making or designing softrawe E-Training using php programming language and postgreeSql database,
            starting from the stage data collection, prototype design to software optimization.    
            </li>
            <li> Responsible for creating or designing Fixed Asset software using NetBeans java in the company's needs, starting from the stage
                data collection, prototype design to software optimization.</li>
            </ul>
        </p>
        </div>
    </div>
    )
   
}

export default About;