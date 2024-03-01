import { useEffect, useState } from "react";
import Card from "../../components/card/card";
import './nowPlaying.css'; 
import getMovies from "../../helpers/fetch";
import { useNavigate } from "react-router-dom";

const NowPlaying = () => {
  const [data,setData] = useState([]);
  const navigate = useNavigate();
  useEffect(()=> {
    getMovies("/movie/now_playing").then(setData)
  },[])
  const handleCardClick = (cardData) => {
    navigate(`/movie/${cardData.id}`, {state: cardData});
  };
  return ( 
    <>
      <div className="container">
      {
          data.map((item,index)=>{
              return(
                <Card key={index} onClick={handleCardClick} data={item}/>
                )
          })
      }
      </div>
    </>
  )
}
export default NowPlaying;