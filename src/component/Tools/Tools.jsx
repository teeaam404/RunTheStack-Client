import AOS from "aos";
import "aos/dist/aos.css";
import Container from "../../Shared/Container/Container";
import { BsSlack, BsMicrosoftTeams, BsGithub, BsTrello } from 'react-icons/bs';
import { SiOkta } from 'react-icons/si';
import { MdOutlineKey } from 'react-icons/md';
import { AiOutlineLock } from 'react-icons/ai';
import { HiUserGroup } from 'react-icons/hi';
import { PiHeadsetBold } from 'react-icons/pi';
import { useEffect } from "react";

AOS.init({
  duration: 1200,
});

const Tools = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Container>
        <div className="bg-gray-800 py-28  my-20">
          <div className="lg:flex gap-3 text-center px-10">
            <div className="text-white border border-slate-600 p-5 rounded-lg w-full"><h2>A Forrester Consulting study shows <span className="font-bold text-2xl text-blue-600">191% return on investment</span> with Stack Overflow for Teams.</h2></div>

            <div className="text-white border border-slate-600 p-5 rounded-lg w-full"><h2>The world’s largest telecom firm <span className="font-bold text-2xl text-blue-600">saved $10M</span> in deflected support cases with our centralized knowledge base.</h2></div>

            <div className="text-white border border-slate-600 p-5 rounded-lg w-full"><h2>Subject-matter experts at software platform Unqork had <span className="font-bold text-2xl text-blue-600">27% more time</span> to work on projects after using Teams.</h2></div>

            <div className="text-white border border-slate-600 p-5 rounded-lg w-full"><h2>You can save time and money with stack overflow for teams.</h2>
             <button className="btn btn-outline mt-3 border-cyan-700 hover:border-cyan-800 text-blue-600 hover:text-blue-600">Calculate your ROI</button>
            </div>
          </div>
          <div className="text-white text-center lg:mx-72 mt-5">
            <h2 className="text-5xl font-bold mb-5">Integrates with and improves other tools</h2>
            <p className="text-gray-400">All plans come with integrations for Can <span className="text-blue-500">Slack & Microsoft Teams</span> in order to cut down on pings, limit distractions and make the tools even more powerful. Business and Enterprise customers get access to Trello, GitHub & Okta integrations.</p>
            <div className="flex gap-4 lg:mx-36 mt-5">
             <div className="bg-slate-100 p-4 rounded-lg text-indigo-500">
              <BsSlack size={40}/>
             </div>
             <div className="bg-slate-100 p-4 rounded-lg text-indigo-500">
              <BsMicrosoftTeams size={40} />
             </div>
             <div className="bg-slate-100 p-4 rounded-lg text-black">
              <BsGithub size={40} />
             </div>
             <div className="bg-slate-100 p-4 rounded-lg text-indigo-500">
              <BsTrello size={40} />
             </div>
             <div className="bg-slate-100 p-4 rounded-lg text-blue-400">
              <SiOkta size={40} />
             </div>
            </div>
            <h2 className="my-10 text-center text-gray-400">
              Some of the premium features available with paid tiers
            </h2>
          </div>
          <div className="lg:flex gap-4 mx-32">
          <div
              data-aos="zoom-out-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="4000"
              className="max-w-sm p-6 w-full bg-gray-200 border-2 border-b-violet-400 border-x-0 border-t-0 border-violet-400 hover:-translate-y-2 hover:transition hover:delay-100 hover:duration-1000 rounded-lg shadow dark:bg-violet-400 dark:border-gray-800 text-center  dark:hover:bg-slate-300 dark:hover:text-slate-900"
            >
              <MdOutlineKey className="text-indigo-500 mx-auto mb-3" size={40} />
             <h2>Robust read and write API</h2>
            </div>
          
          <div
              data-aos="zoom-out-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="150000"
              className="max-w-sm p-6 w-full bg-gray-200 border-2 border-b-violet-400 border-x-0 border-t-0 border-violet-400 hover:-translate-y-2 hover:transition hover:delay-100 hover:duration-1000 rounded-lg shadow dark:bg-violet-400 dark:border-gray-800 text-center  dark:hover:bg-slate-300 dark:hover:text-slate-900"
            >
              <AiOutlineLock className="text-indigo-500 mx-auto mb-3" size={40} />
             <h2>
              Single sign-on with AD or SAML
             </h2>
            </div>
          <div
              data-aos="zoom-out-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="max-w-sm p-6 w-full bg-gray-200 border-2 border-b-violet-400 border-x-0 border-t-0 border-violet-400 hover:-translate-y-2 hover:transition hover:delay-100 hover:duration-1000 rounded-lg shadow dark:bg-violet-400 dark:border-gray-800 text-center dark:hover:bg-slate-300 dark:hover:text-slate-900"
            >
              <HiUserGroup className="text-indigo-500 mx-auto mb-3" size={40} />
             <h2>
              Your own customer success representative
             </h2>
            </div>

            <div
              data-aos="zoom-out-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="100000"
              className="max-w-sm p-6 w-full bg-gray-200 border-2 border-b-violet-400 border-x-0 border-t-0 border-violet-400 hover:-translate-y-2 hover:transition hover:delay-100 hover:duration-1000 rounded-lg shadow dark:bg-violet-400 dark:border-gray-800 text-center dark:hover:bg-slate-300 dark:hover:text-slate-900"
            >
              <PiHeadsetBold className="text-indigo-500 mx-auto mb-3" size={40} />
             <h2>
              99.5% uptime SLA and priority support
             </h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Tools;