import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer =()=>{
return(

<div className="Footer">
<div className="row">
<div className="col-md-4">
<h6>CUSTOMER POLICIES</h6>
<ul>Contact Us</ul>
<ul>FAQ</ul>
<ul>T&C</ul>
<ul>Terms Of Use</ul>
<ul>Track calls</ul>
<ul>Shipping</ul>
<ul>Cancellation</ul>
<ul>Returns</ul>
<ul>Privacy policy</ul>
</div>
<div className="col-md-4">
<h6>USEFUL LINKS</h6>

<ul>Blog</ul>
<ul>Care</ul>
<ul>Site</ul>
<ul>orpo</ul>
<ul>Whitehat</ul>
</div>
<div className="col-md-4">
<h6>EXPERIENCE COCONUT APP ON MOBILE</h6>
<FacebookIcon/>
<InstagramIcon/>
<EmailIcon/>
<TwitterIcon/>
</div>
</div>


</div>




);
}
export default Footer;