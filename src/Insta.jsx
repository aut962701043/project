function Insta(props){
    return(
    <div className="header">
        <div className="edit">
            <img src={props.plus} alt="plus"/>

          <div className="bird">
              <img  src={props.lock} alt="lock"/>
            
              <h3>{props.name}</h3>
              <img className="snake" src={props.arrow} alt="arrow"/>
          </div>


          <img className="animal"src={props.threads} alt="threads"/>
          <img src={props.bar} alt="bar"/>
        </div>
        < div className="post">
              <img src={props.image} alt="image"/>

             <div className="stats">

                  <div className="item">
                     <h5 >{props.number1}</h5>
                      <p >{props.postname}</p>
                  </div>


                   <div className="item">
                      <h5 >{props.number2}</h5>
                      <p >{props.followersname}</p>
                    </div>


                    <div className="item">
                       <h5>{props.number3}</h5>
                       <p >{props.followingname}</p>
                    </div>
                </div>
                
          </div>
        
            
          <div>
             <span>• "stay positive and keep smiling🙂"</span>
           </div>  
          <div className="that">
              <span>• "One journey,endless dreams❤️🖤"</span>
           </div>
           <button className="text">+ Add banners</button>
           <div className="change">
              <button className="current">Edit profile</button>
              <button className="current">Share profile</button>
              <button className="solt">+👤</button> 
           </div> 
          <div className="modi"> 
             <div className="car">
                <img src={props.baby} alt="baby"/>
                <p>ME✨</p>
              </div>
              <div className="car">
                   <img src={props.baby} alt="baby"/>
                  <p>Memories✨</p>
               </div>
                
               <div className="car">    
              <img src={props.baby} alt="baby"/>
              <p>Friend✨</p>
              </div>
              <div className="car">
              <img src={props.baby} alt="baby"/>
              <p>UCET✨</p>
              </div>
           </div>   
           <div className="tab">   
              <img className="equal" src={props.squre} alt="squre" /> 
               <img className="equal" src={props.repeat} alt="repeat" />
               <img className="equal"src={props.man} alt="man" />
            </div>
            <hr className="line"></hr>
            <div className="cow">
            <div className="control">
               <img className="not" src={props.photo1} alt="photo1"/>
               <img className="not" src={props.photo2} alt="photo2"/>
               <img className="not" src={props.photo3} alt="photo3"/>
               <img className="not" src={props.photo4} alt="photo4"/>

            </div>
            </div>
    </div>
            
            

        
        
    );

    
}
export default Insta