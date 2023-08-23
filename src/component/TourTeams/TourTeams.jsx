import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Container from "../../Shared/Container/Container";
import img from "../../assets/img/website-logo.png"
import { FaCheckCircle, FaUsers, FaProjectDiagram } from 'react-icons/fa';
import { GoRocket } from 'react-icons/go';
import { MdHeadsetMic } from 'react-icons/md';
import { VscSettings } from 'react-icons/vsc';
import { useState } from "react";
import './TourTeams.css';

AOS.init({
  duration: 1200,
});
const TourTeams = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [activeSection, setActiveSection] = useState('software-engineers'); // Default active section

  const handleSectionClick = (sectionName) => {
    setActiveSection(sectionName === activeSection ? null : sectionName);
  };

  
  return (
    <>
       <Container>
          <div className="bg-gray-900 p-10">
            <div>
            <div className=" text-center">
             <img className="mx-auto" src={img} alt="" />
             <h2 className="text-2xl text-orange-500 text-center font-bold">FOR TEAMS</h2>
              <h2 className="text-3xl font-bold font-serif mt-7 lg:mx-48 text-white text-center">Capture your company’s knowledge and context in a <br />discoverable format to <span className="text-orange-500">unblock your team</span></h2>
              <button className="btn bg-blue-600 border-0 hover:bg-blue-700 mt-6 text-white p-3 px-8 rounded-lg">Take of tour of Teams</button>
            </div>
            <div className="lg:flex gap-5 text-center my-10">
            <div
              data-aos="zoom-out-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              className="max-w-sm p-6  border-2 border-b-violet-400 border-x-0 border-t-0 border-violet-400 hover:-translate-y-2 hover:transition hover:delay-100 hover:duration-1000 rounded-lg shadow dark:bg-violet-400 dark:border-gray-800 text-center hover:bg-slate-800 hover:border-b-violet-400 dark:hover:text-slate-900"
            >
              <div> 
                <FaCheckCircle className="mx-auto text-green-500 mb-4" size={20}/>
               <h2 className="text-2xl font-bold text-white font-serif">Increase productivity</h2>
               <p className="text-gray-400 mt-4">If somebody somewhere has the right answer, suddenly you have it too. Collaborate better in a remote-first world.</p>
              </div>
            </div>

            <div
              data-aos="zoom-out-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              className="max-w-sm p-6  border-2 border-b-violet-400 border-x-0 border-t-0 border-violet-400 hover:-translate-y-2 hover:transition hover:delay-100 hover:duration-1000 rounded-lg shadow dark:bg-violet-400 dark:border-gray-800 text-center hover:bg-slate-800 hover:border-b-violet-400 dark:hover:text-slate-900"
            >
              <div> 
                <FaCheckCircle className="mx-auto text-green-500 mb-4" size={20}/>
               <h2 className="text-2xl font-bold text-white font-serif">Increase productivity</h2>
               <p className="text-gray-400 mt-4">If somebody somewhere has the right answer, suddenly you have it too. Collaborate better in a remote-first world.</p>
              </div>

            </div>
            <div
              data-aos="zoom-out-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              className="max-w-sm p-6  border-2 border-b-violet-400 border-x-0 border-t-0 border-violet-400 hover:-translate-y-2 hover:transition hover:delay-100 hover:duration-1000 rounded-lg shadow dark:bg-violet-400 dark:border-gray-800 text-center hover:bg-slate-800 hover:border-b-violet-400 dark:hover:text-slate-900"
            >
              <div> 
                <FaCheckCircle className="mx-auto text-green-500 mb-4" size={20}/>
               <h2 className="text-2xl font-bold text-white font-serif">institutional knowledge</h2>
               <p className="text-gray-400 mt-4">People come and people go, but if you capture their contributions in one central place, that expertise sticks around.</p>
              </div>
            </div>
            </div>
            </div>
             
            <div className="mt-14">
              <h2 className="text-3xl font-bold text-center text-white">Ensure your company stays on course</h2>
              <p className="text-center mt-3 mb-8 text-gray-400">Here are just a few types of technologists that we help.</p>
            </div>

      <div className="lg:flex gap-3">
        <div onClick={() => handleSectionClick('devops')} className={`section ${activeSection === 'devops' ? 'active' : 'inactive'}`}>
          <div className="icon">
          <GoRocket className="mx-auto" size={80} />
          </div>
          <h2 className="text-2xl font-bold text-white my-3 text-center">DevOps engineers</h2>
          {activeSection === 'devops' && <p className="text-gray-400">Shipping new products and features requires teamwork and coordination. Forget checklists and long docs no one ever reads.</p>}
        </div>

        <div onClick={() => handleSectionClick('data-scientists')} className={`section ${activeSection === 'data-scientists' ? 'active' : 'inactive'}`}>
          <div className="icon">
            <FaProjectDiagram className="mx-auto" size={80} />
          </div>
          <h2 className="text-2xl font-bold text-white my-3 text-center">Data scientists</h2>
          {activeSection === 'data-scientists' && <p className="text-gray-400">Business decisions are better when backed by data. Give visibility to the data that support your strategies.</p>}
        </div>

        <div onClick={() => handleSectionClick('software-engineers')} className={`section ${activeSection === 'software-engineers' ? 'active' : 'inactive'}`}>
          <div className="icon">
           <VscSettings className="mx-auto" size={80} />
          </div>
          <h2 className="text-2xl font-bold text-white my-3 text-center">Software engineers</h2>
          {activeSection === 'software-engineers' && <p className="text-gray-400">Help engineers be more efficient and streamline knowledge sharing using a tool they already love and trust.</p>}
        </div>

        <div onClick={() => handleSectionClick('support-teams')} className={`section ${activeSection === 'support-teams' ? 'active' : 'inactive'}`}>
          <div className="icon">
            <MdHeadsetMic className="mx-auto" size={80} />
          </div>
          <h2 className="text-2xl font-bold text-white my-3 text-center">Support teams</h2>
          {activeSection === 'support-teams' && <p className="text-gray-400">Level up your support by providing information to your customers using a natural interface: questions and answers.</p>}
        </div>

        <div onClick={() => handleSectionClick('engineering-leaders')} className={`section ${activeSection === 'engineering-leaders' ? 'active' : 'inactive'}`}>
          <div className="icon">
            <FaUsers className="mx-auto" size={80} />
          </div>
          <h2 className="text-2xl font-bold text-white my-3 text-center">Engineering leaders</h2>
          {activeSection === 'engineering-leaders' && <p className="text-gray-400">Help your team get the information they need to do their job - reduce burnout and help engineers grow and learn together.</p>}
        </div>
    </div>       

          </div>
       </Container>
    </>
  );
};

export default TourTeams;