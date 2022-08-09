import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMusicRecords } from "../Redux/AppReducer/action";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Styles from '../style/musicrec.module.css'
const MusicRecords = () => {
  const dispatch = useDispatch();
  const musicRecords = useSelector((store) => store.AppReducer.musicRecords);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (location || musicRecords.length === 0) {
      const sortBy = searchParams.get("sortBy");
      const queryParams = {
        params: {
          genre: searchParams.getAll("genre"),
          _sort: sortBy && "year",
          _order: sortBy,
        },
      };
      dispatch(getMusicRecords(queryParams));
    }
  }, [location.search]);
  console.log( musicRecords );
  return (
    <div className={Styles.main}>
      {musicRecords.length > 0 && musicRecords.map(album=>{
        return <div key={album.id} className={Styles.album}>
                  <div>{album.name}</div>
                  <Link to={`/music/${album.id}`}>
                    <div>
                      <img src={album.img} alt={album.name} className={Styles.img}/>
                    </div>
                  </Link>
                  <div>{album.year}</div>
               </div>
      })}
    </div>
  )
}

export default MusicRecords