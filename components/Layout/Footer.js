import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className='footer-area'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <Link href='/' className='d-inline-block logo'>
                  <h1  style={{color:"var(--mainColor)", fontFamily:"var(--fontFamily3)"}}>
                    Corporate Gate
                  </h1>
                </Link>

                <div className='newsletter-form'>
                  <p>SUBSCRIBE TO OUR NEWSLETTER</p>

                  <form>
                    <input
                      type='email'
                      className='input-newsletter'
                      placeholder='Enter your email'
                      name='EMAIL'
                      required
                    />
                    <button type='submit'>
                      Subscribe Now <i className='bx bxs-paper-plane'></i>
                    </button>
                  </form>
                </div>

                <ul className='social-links'>
                  <li>
                    <a href='#' target='_blank' className='facebook'>
                      <i className='bx bxl-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#' target='_blank' className='twitter'>
                      <i className='bx bxl-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#' target='_blank' className='linkedin'>
                      <i className='bx bxl-linkedin'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#' target='_blank' className='instagram'>
                      <i className='bx bxl-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-2 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <h3>Blogs</h3>
                <ul className='services-links'>
                  <li>
                    <Link href='/buy'>Buy Bitcoin</Link>
                  </li>
                  <li>
                    <Link href='/buy'>Buy BNB</Link>
                  </li>
                  <li>
                    <Link href='/buy'>Buy Ethereum</Link>
                  </li>
                  <li>
                    <Link href='/buy'>Buy Ripple</Link>
                  </li>
                  <li>
                    <Link href='/buy'>Buy Litecoin</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget pl-5'>
                <h3>Template</h3>
                <ul className='quick-links'>
                  <li>
                    <Link href='/trade'>Trade</Link>
                  </li>
                  <li>
                    <Link href='/guides'>Guides</Link>
                  </li>
                  <li>
                    <Link href='/wallet'>Wallets</Link>
                  </li>
                  <li>
                    <Link href='/faq'>FAQ</Link>
                  </li>
                  <li>
                    <Link href='/contact'>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <h3>Contact Info</h3>
                <ul className='footer-contact-info'>
                  <li>Address: 2750, Quadra Street Victoria, Canada</li>
                  <li>
                    Email: <a href='mailto:hello@novis.com'>hello@novis.com</a>
                  </li>
                  <li>
                    Phone: <a href='tel:+44587154756'>+1416-555-0896</a>
                  </li>
                  <li>
                    Fax: <a href='tel:+44587154756'>+1416-555-0477</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='copyright-area'>
          <div className='container'>
            <p>
              Copyright <strong>Novis</strong>. All Rights Reserved by{' '}
              <Link href='https://envytheme.com/' target='_blank'>
                EnvyTheme
              </Link>
            </p>
          </div>
        </div> */}
      </footer>
    </>
  );
};

export default Footer;
