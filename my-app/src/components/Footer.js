function Footer() {
  return (
    <div className="Footer">
      <div className="footer-logo">
        <div className="footer-img"></div>
      </div>

      <div className="footer-first-text">
        <p>Contact us</p>
        <ul>
          {/* Displaying contact information */}
          <li>info.centre@scouts.org.uk</li>
          <li>0345 300 1818</li>
          <li>Open 9am-5pm Monday to Friday</li>
        </ul>
      </div>

      <div className="footer-second-text">
        <p>
          {/* Displaying footer text and copyright information */}
          &copy; Copyright The Scout Association 2023. All Rights Reserved.
          Charity numbers: 306101 (England and Wales) and SC038437 (Scotland).
          Registered address: The Scout Association, Gilwell Park, Chingford,
          London, England E4 7QW Website Terms and Conditions, Data Protection
          and Cookie Policy Last build at 9:32:08 AM on 29.11.2022
        </p>
      </div>
    </div>
  );
}

export default Footer;