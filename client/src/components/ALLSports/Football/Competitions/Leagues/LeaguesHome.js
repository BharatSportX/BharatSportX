// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './LeagueHomestyles.css'
// export default function LeaguesHome() {
//     return (
//         <section className=" dark:bg-gray-900 h-full relative overflow-x-hidden  top-36 section-card ">
//             <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 ">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {/* World Cup Card */}
//                     <div className=" card bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8 ">
//                         <NavLink to="/football" className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2" >
//                             <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
//                                 <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
//                             </svg>
//                             Live
//                         </NavLink>
//                         <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">World Cup</h1>
//                         <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6"> The World Cup is an international football competition held every four years, featuring teams from around the world competing for the prestigious title. It's one of the most-watched sporting events globally, captivating millions with thrilling matches and memorable moments..</p>
//                         <NavLink  to="/football/league/world-cup" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
//                             Click here
//                             <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//                             </svg>
//                         </NavLink>
//                     </div>

//                     {/* Leagues Card */}
//                     <div className=" card bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
//                         <NavLink to="/football" className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2">
//                             <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
//                                 <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
//                             </svg>
//                             Live
//                         </NavLink>
//                         <h2 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Leagues</h2>
//                         <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Leagues is an elite football competition showcasing top-tier talent from around the world. From Premier Leagues to Champions Leagues, experience thrilling matches and follow your favorite teams' journeys.</p>
//                         <NavLink to="/football/FootballLeagues" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
//                             Click here
//                             <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//                             </svg>
//                         </NavLink>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LeaguesHome = () => {
    const [activeButtons, setActiveButtons] = useState([true, false, false, false, false]);
    const navigate = useNavigate();

    const handleClick = (index, path) => {
        const updatedButtons = activeButtons.map((_, idx) => idx === index);
        setActiveButtons(updatedButtons);
        navigate(path);
    };

    return (
        <section className="dark:bg-gray-900 mt-1 h-full relative overflow-x-hidden top-36 bg-cover bg-center" style={{ backgroundImage: 'url()' }}>
            <div className="py-2 px-3   mx-auto max-w-screen-xl lg:py-3 ">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 justify-center mt-2 ">
                    <div>
                        <button
                            className={
                                activeButtons[0]
                                    ? "w-full border-2 text-lg font-medium px-4 py-0.5 rounded-full cursor-pointer border-orange-800 text-orange-800 bg-orange-200"
                                    : "w-full border-2 border-orange-800 text-lg font-medium px-4 py-0.5 rounded-full cursor-pointer bg-orange-800 text-orange-300"
                            }
                            onClick={() => handleClick(0, '/football/league/world-cup')}
                        >
                            World Cup
                        </button>
                    </div>
                    <div>
                        <button
                            className={
                                activeButtons[0]
                                    ? "w-full border-2 text-lg font-medium px-4 py-0.5 rounded-full cursor-pointer border-orange-800 text-orange-800 bg-orange-200"
                                    : "w-full border-2 border-orange-800 text-lg font-medium px-4 py-0.5 rounded-full cursor-pointer bg-orange-800 text-orange-300"
                            }
                            onClick={() => handleClick(0, '/football/womens-football')}
                        >
                            Womens <span className="hidden xl:inline-block"> Football</span>
                        </button>
                    </div>
                    <div>
                        <button
                            className={
                                activeButtons[0]
                                    ? "w-full border-2 text-lg font-medium px-4 py-0.5 rounded-full cursor-pointer border-orange-800 text-orange-800 bg-orange-200"
                                    : "w-full border-2 border-orange-800 text-lg font-medium px-4 py-0.5 rounded-full cursor-pointer bg-orange-800 text-orange-300"
                            }
                            onClick={() => handleClick(0, '/football/leagues')}
                        >
                            Leagues
                        </button>
                    </div>
                    <div>
                        <button
                            className={
                                activeButtons[0]
                                    ? "w-full border-2 text-lg font-medium px-4 py-0.5 rounded-full cursor-pointer border-orange-800 text-orange-800 bg-orange-200"
                                    : "w-full border-2 border-orange-800 text-lg font-medium px-4 py-0.5 rounded-full cursor-pointer bg-orange-800 text-orange-300"
                            }
                            onClick={() => handleClick(0, '/football/clubs')}
                        >
                            Clubs
                        </button>
                    </div>
                    <div>
                        <button
                            className={
                                activeButtons[0]
                                    ? "w-full border-2 text-lg font-medium px-4 py-0.5 rounded-full cursor-pointer border-orange-800 text-orange-800 bg-orange-200"
                                    : "w-full border-2 border-orange-800 text-lg font-medium px-4 py-0.5 rounded-full cursor-pointer bg-orange-800 text-orange-300"
                            }
                            onClick={() => handleClick(0, '/football/international')}
                        >
                            International
                        </button>
                    </div>

                    <div>
                        <button
                            className={
                                activeButtons[0]
                                    ? "w-full border-2 text-lg font-medium px-4 py-0.5 rounded-full cursor-pointer border-orange-800 text-orange-800 bg-orange-200"
                                    : "w-full border-2 border-orange-800 text-lg font-medium px-4 py-0.5 rounded-full cursor-pointer bg-orange-800 text-orange-300"
                            }
                            onClick={() => handleClick(0, '/football/international')}
                        >
                         Rankings
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeaguesHome;
