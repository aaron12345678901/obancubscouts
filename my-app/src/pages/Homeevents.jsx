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
          <p id="date">today</p>
        </div>
        <div className="date2">3rd-july</div>
      </div>

    <div className="Homeevents-main-content">
      <div className="event-date">
        <p>july-3</p>
      </div>

      <div className="event-details"><p>Young Leader Training Weekend
       Fri 4 -
       Scout Adventures Lochgoilhead, Lochgoilhead
       Cairndow</p>
</div>

<div className="event-img-container">
  <div className="event-img"></div>
</div>


    </div>

    <div className="events-border-line"></div>




    <div className="Homeevents-main-content">
      <div className="event-date">
        <p>10 - jul</p>
      </div>

      <div className="event-details"><p>Scouts Kirby Shield Competition
Sat 10 -
Dilston Scout Campsite (No Public Camping),</p>
</div>

<div className="event-img-container">
  <div className="event-img2"></div>
</div>


    </div>


    <div className="events-border-line"></div>

    <div className="Homeevents-main-content">
      <div className="event-date">
        <p>14 - jul</p>
      </div>

      <div className="event-details"><p>Scouts Thunderbird Competition
Sat 14 jul -
Blanchland
Blanchland, Consett</p>
</div>

<div className="event-img-container">
  <div className="event-img3"></div>
</div>


    </div>


    <div className="events-border-line"></div>
    <div className="Homeevents-main-content">
      <div className="event-date">
        <p>24 - jul</p>
      </div>

      <div className="event-details"><p>Dark Skies Run @ Kielder Gold (14M & 26.5M)
Sat, 17:30
Scout Adventures Hawkhirst, Plashetts
Hexham</p>
</div>

<div className="event-img-container">
  <div className="event-img4"></div>
</div>


    </div>


    </div>
  );
}

export default Homeevents;
