import { CONFIG } from "../../config";
import Container from "../common/container/Container";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <Container>
      <div className="footer-header" id="footer">
        {
          CONFIG.footerConfig.footer_header.map(({id, title}) => {
            return (
              <h2 key={id}>
                {title}
              </h2>
            )
          })
        }
      </div>
      <div className="footer-body">
        <div className="first-footer-list">
          <ul >
            {
              CONFIG.footerConfig.first_footer_list.map(({id, title}) => {
                return (
                  <li key={id}>{title}</li>
                )
              })
            }
          </ul>
        </div>
        <div className="second-footer-list">
        <ul>
          {
            CONFIG.footerConfig.second_footer_list.first_column.map(({id, title}) => {
              return (
                <li key={id} >{title}</li>
              )
            })
          }
        </ul>
        <ul>
        {
            CONFIG.footerConfig.second_footer_list.second_column.map(({id, title}) => {
              return (
                <li key={id} className={`${ id === 3 ? "closed" : "" }`}>{title}</li>
              )
            })
          }
        </ul>
        </div>
          <div className="third-footer-list">
          <ul>
          {
            CONFIG.footerConfig.third_footer_list.map(({id, title}) =>{
              return(
                <li key={id}>{title}</li>
              )
            })
          }
        </ul>
          </div>

      </div>
      <div className="copy-text">
        <div>
          <p>
          © Library all Rights Reserved. Designed by 
          <a href="">Lilith Vardanyan</a>
          </p>
        </div>
        <div className="footer-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram/></a>
        </div>
      </div>
      </Container>
    </footer>
  )
}

export default Footer
