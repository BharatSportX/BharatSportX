import React from 'react'
import Navbar from '../Navbar'
import AllGamesNavbarContent from './AllGamesNavbarContent/AllGamesNavbarContent'

import Footer from '../../../FrontPage/Footer'


export default function AllGameNavbar() {
  return (
    <div>
      <React.Fragment>
        <Navbar/>
        <AllGamesNavbarContent/>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
  
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-orange-600 "> Content Adding Soon</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
       
        <Footer/>

      </React.Fragment>
    </div>
  )
}