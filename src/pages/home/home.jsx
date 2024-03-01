import { Outlet, useNavigate } from "react-router-dom";
import Card from "../../components/card/card";
import { useEffect, useState } from "react";
import getMovies from "../../helpers/fetch";

const Home = () => { 
    const [data,setData] = useState([]);
    const navigate = useNavigate();

  useEffect(()=> {
        getMovies('/movie/popular').then(setData)
  },[])

  const handleCardClick = (cardData) => {
    navigate(`/movie/${cardData.id}`, {state: cardData});
};

    return (
    <div className='container'>
    {
        data.map((item,index)=>{
            return <Card key={index} onClick={handleCardClick} data={item} />
        })
    }
    <Outlet />
    </div>
    )
};

export default Home;