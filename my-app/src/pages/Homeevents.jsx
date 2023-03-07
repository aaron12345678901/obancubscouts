
function Homeevents() {

  // function showDate(){  
  //   const monthNames = ["January", "February", "March", "April", "May", "June",
  //   "July", "August", "September", "October", "November", "December"];
  //   const d = new Date();
  //   document.getElementById("date").innerHTML = monthNames[d.getMonth()];
  // }
  // showDate();
  



// const date1 = new Date();

// let day = date1.getDate();
// let month = date1.getMonth() + 1;
// let currentDate = `${day}-${month}`;
// console.log(currentDate);


    return (
      <div className="Homeevents">
        <div className="home-events-control">
            <div className="arrow-container-1">
              <div className="arrow-container-1-image"></div>
            </div>
            <div className="arrow-container-2">
              <div className="arrow-container-2-image"></div>
            </div>

           <div className="date">
       
            <p id="date">date</p>
          
        </div>

        </div>

        

        
      </div>
    );

    
 
    
  }
  

 
  export default Homeevents;
 