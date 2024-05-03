import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./LeaguesDetails.css"
export default function LeaguesDetails() {
  const { id } = useParams();
  const [leagueData, setLeagueData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeagueData = async () => {
      try {
        const response = await axios.get('https://api-football-v1.p.rapidapi.com/v3/leagues', {
          params: {
            type: 'league',
            id
          },
          headers: {
            'X-RapidAPI-Key': '96d6e2db0bmshaefc24c363be681p18096ejsn20efc89ac5c0',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
          }
        });
        setLeagueData(response.data.response[0]);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchLeagueData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!leagueData) {
    return <div>League not found!</div>;
  }

  return (
    <div className='maincontent'>
    <div className='container' >
      <h1 className='text-4xl text-gray-900 dark:text-white mt-4'><strong>{leagueData.league.name}</strong></h1>
      </div>
      {/* Add more league details as needed */}
    </div>
  );
}

