import React, { useState } from 'react';
import '../../styles/css/main.css';
import ProjectsCard from '../Modal/ProjectsCard';

const About = () => {
  
  const [showProjectCard, setShowProjectCard] = useState(false);

  const closeBtn = () => setShowProjectCard(false);

  return (
    <>
      <section className="_about_portfolio_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="_page_portfolio_title">
                <h2 className='_page_portfolio_title1'>about <span className='_page_portfolio_title1_span'>me</span>
                </h2>
                <span className='_page_portfolio_title_bg_span'>portfolio</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="_about_portfolio_left_info">
                  <h3 className='_about_portfolio_left_info_txt'>
                    personal information
                  </h3>
                  <div className="_about_portfolio_left_info_list">
                    <ul className='_about_portfolio_left_info_list_ul'>
                      <li className='_about_portfolio_left_info_list_li'>
                        <p className='_about_portfolio_left_info_list_li_para'>Name : Kazi Md. Emran</p>
                      </li>
                      <li className='_about_portfolio_left_info_list_li'>
                        <p className='_about_portfolio_left_info_list_li_para'>Address : Mirabazar, Sylhet, Bangladesh</p>
                      </li>
                      <li className='_about_portfolio_left_info_list_li'>
                        <p className='_about_portfolio_left_info_list_li_para'>Language : Bangla, English, Hindi</p>
                      </li>
                      <li className='_about_portfolio_left_info_list_li'>
                        <p className='_about_portfolio_left_info_list_li_para'>Freelance : <b>Available</b></p>
                      </li>
                      <li className='_about_portfolio_left_info_list_li'>
                        <p className='_about_portfolio_left_info_list_li_para'>Phone/Whatsapp : <b>+8801866-749596</b></p>
                      </li>
                      <li className='_about_portfolio_left_info_list_li'>
                        <p className='_about_portfolio_left_info_list_li_para'>Email : <b>kaziamran4@gmail.com</b></p>
                      </li>
                    </ul>
                  </div>

                  <div className="_home_portfolio_cnt_btns">
                      <a href='https://drive.google.com/file/d/1j2VTZlGG4YYFgo_Rhl95Zkdhrgb8Uh-0/view?usp=share_link' className='_home_portfolio_cnt_btn1' target='_blank'>
                          Download cv
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z" fill="#fff"></path></svg>
                      </a>
                  </div>  
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="_about_portfolio_r8_info">
                  <h3 className='_about_portfolio_left_info_txt'>
                    job experience
                  </h3>
                  <div className="_about_portfolio_r8_job_info">
                    <h4 className='_about_portfolio_r8_job_info_txt1'>2021-Present</h4>
                    <h3 className='_about_portfolio_r8_job_info_txt2'>web designer</h3>
                    <p className='_about_portfolio_left_info_list_li_para'>working with figma, html5, css3, react js, JavaScript</p>
                  </div> 
              </div>
            </div>
          </div>

          {/* my projects */}
          <div className="row mt-5">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="_page_portfolio_title">
                <h2 className='_page_portfolio_title1'>my <span className='_page_portfolio_title1_span'>project</span>
                </h2>
                <span className='_page_portfolio_title_bg_span'>portfolio</span>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="_project_portfolio_card">
                <div className="_project_portfolio_card_img">
                  <img src="../../images/projects/project01.png" className='img-fluid _project_portfolio_card_img_tag' alt="image" />
                </div>
                <div className="_project_portfolio_card_modal">
                  <button onClick={() => setShowProjectCard(true)} className='_project_portfolio_card_modal_btn'>
                    client porject
                    { showProjectCard && <ProjectsCard closeBtn= {closeBtn}/> }
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="_project_portfolio_card">
                <div className="_project_portfolio_card_img">
                  <img src="../../images/projects/project01.png" className='img-fluid _project_portfolio_card_img_tag' alt="image" />
                </div>
                <div className="_project_portfolio_card_modal">
                  <button className='_project_portfolio_card_modal_btn'>
                    client porject
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="_project_portfolio_card">
                <div className="_project_portfolio_card_img">
                  <img src="../../images/projects/project01.png" className='img-fluid _project_portfolio_card_img_tag' alt="image" />
                </div>
                <div className="_project_portfolio_card_modal">
                  <button className='_project_portfolio_card_modal_btn'>
                    client porject
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;