import React, { Component } from 'react';
import { Row, Col } from 'antd';

class footer extends Component {
    state = {  }
    render() { 
        return ( 

            <Row>
                <Col span={2}></Col>
                <Col span={20} style={{marginTop:'2%',marginLeft:'-12%'}}>
                <p style={{display:'inline'}}>English (UK)&nbsp;&nbsp;&nbsp;</p>
                <a  className='_8esh' href="https://ta-in.facebook.com/" title="Tamil">தமிழ்</a>&nbsp;&nbsp;&nbsp;
                <a  className='_8esh' href="https://te-in.facebook.com/" title="Telugu">తెలుగు</a>&nbsp;&nbsp;&nbsp;
                <a  className='_8esh' href="https://kn-in.facebook.com/" title="Kannada">ಕನ್ನಡ</a>&nbsp;&nbsp;&nbsp;
                <a  className='_8esh' href="https://ur-pk.facebook.com/" title="Urdu">اردو</a>&nbsp;&nbsp;&nbsp;
                <a  className='_8esh' href="https://si-lk.facebook.com/" title="Sinhala">සිංහල</a>&nbsp;&nbsp;&nbsp;
                <a  className='_8esh' href="https://ml-in.facebook.com/" title="Malayalam">മലയാളം</a>&nbsp;&nbsp;&nbsp;
                <a  className='_8esh' href="https://hi-in.facebook.com/" title="Hindi">हिन्दी</a>&nbsp;&nbsp;&nbsp;
                <a  className='_8esh' href="https://mr-in.facebook.com/" title="Marathi">मराठी</a>&nbsp;&nbsp;&nbsp;
                <a  className='_8esh' href="https://gu-in.facebook.com/" title="Gujarati">ગુજરાતી</a>&nbsp;&nbsp;&nbsp;
                <a  className='_8esh' href="https://bn-in.facebook.com/" title="Bengali">বাংলা</a>&nbsp;&nbsp;&nbsp;
                {/* <div className="contentCurve"></div> */}
                <hr style={{marginLeft:'27%',marginTop:'1%'}}></hr>
                <div style={{textAlign:'left',marginLeft:'27%'}}>
                    <a className='_8esh' href="/r.php" title="Sign up for Facebook">Sign Up</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="/login/" title="Log in to Facebook">Log In</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="https://messenger.com/" title="Take a look at Messenger.">Messenger</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="/lite/" title="Facebook Lite for Android.">Facebook Lite</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="https://www.facebook.com/watch/" title="Browse our Watch videos."> Watch </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="/directory/people/" title="Browse our people directory.">People</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="/directory/pages/" title="Browse our Pages directory.">Pages</a>&nbsp;&nbsp;
                    <a className='_8esh' href="/pages/category/">Page categories</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="/places/" title="Take a look at popular places on Facebook.">Places</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="/games/" title="Check out Facebook games.">Games</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="/directory/places/" title="Browse our places directory.">Locations</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="/marketplace/" title="Buy and sell on Facebook Marketplace.">Marketplace</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="/directory/groups/" title="Browse our Groups directory.">Groups</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2F&amp;h=AT3AYjcU7DrC7ieAR86qnEF2tdITL8hPEqW-ObKRnWGL84IwZUh4LdxXj9mSZsZrPOw1AsJgZNPIL2ttaADJ3eG5Ok1YuhzjUMbn3vpysYZzfwOmWcswjWErODZ8ym0BPouA8q-AWtjtmWAexDRuqw" title="Take a look at Instagram" rel="noopener nofollow" data-lynx-mode="asynclazy">Instagram</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="/local/lists/245019872666104/" title="Browse our Local Lists directory.">Local</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="/fundraisers/" title="Donate to worthy causes.">Fundraisers</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="/biz/directory/" title="Browse our Facebook Services directory.">Services</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="/facebook"  title="Read our blog, discover the resource centre and find job opportunities.">About</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="/ad_campaign/landing.php?placement=pflo&amp;campaign_id=402047449186&amp;extra_1=auto" title="Advertise on Facebook">Create ad</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="/pages/create/?ref_type=site_footer" title="Create a Page">Create Page</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="https://developers.facebook.com/?ref=pf" title="Develop on our platform.">Developers</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="/careers/?ref=pf" title="Make your next career move to our brilliant company.">Careers</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="/privacy/explanation" title="Learn about your privacy and Facebook.">Privacy</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="/policies/cookies/" title="Learn about cookies and Facebook.">Cookies</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="https://www.facebook.com/help/568137493302217" title="Learn about AdChoices.">AdChoices</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="/policies?ref=pf"  title="Review our terms and policies.">Terms</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="/help/?ref=pf"  title="Visit our Help Centre.">Help</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="/settings" title="View and edit your Facebook settings.">Settings</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className='_8esh' href="/allactivity?privacy_source=activity_log_top_menu" title="View your activity log">Activity log</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                </div>
                <div className="mvl" style={{marginTop:12,marginLeft:'-38%'}}><div><span>Subrat Kmr © 2020</span></div></div>

                </Col>
                <Col span={2}>
                </Col>
                
            </Row>
            
         );
    }
}
 
export default footer;