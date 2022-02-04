import React from 'react'
import{FaFacebookF,FaTwitter,FaInstagram,FaLinkedin,FaGithub,FaPlay} from "react-icons/fa"
const Banner = () => {
//     const[state] = React.useState({title:'I am Anand Shirbhaiyye',
//     text:'i,m Anand , A Full Stack Devoloper',Image:''
// });
    return (
        <header className="header">
           <div className="container">
               <div className="row">
                   <div className="col-6">
                     <div className="header__content">
                         <div className="header__section">
                         <ul className="header__ul">
                        <li><FaFacebookF/></li>
                        <li><FaTwitter/></li>
                        <li><FaInstagram/></li>
                        <li><FaLinkedin/></li>
                        <li><FaGithub/></li>
                         </ul>
                         <h1>I am Anand Shirbhaiyye</h1>
                         <p>i,m Anand , A Full Stack Devoloper</p>
                         <div className="header__buttons">
                             <a href="" className="btn btn-outline">
                                  My PortFolio
                                  </a>
                                  &nbsp;&nbsp;&nbsp;
                             <a href="" className="btn btn-smart">
                             <FaPlay className="play"/>
                                  </a>
                         </div>
                         </div>
                     </div>
                   </div>
                   <div className="col-6">
                       {/* <div className="banner__img">
                           <img src="/images/a7c891f8-606e-4d16-8533-7f76fb17dd5f.jpg" alt=""/>
                       </div> */}
                   </div>
               </div>
           </div>
        </header>
    )
}

export default Banner
