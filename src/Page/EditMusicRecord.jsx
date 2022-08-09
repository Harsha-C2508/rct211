import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const EditMusicRecord = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const [music,setMusic] = useState("");
  const [artist,setArtist] = useState("");
  const musicRecords = useSelector((store) => store.AppReducer.musicRecords)
  const [currentMusicAlbum,setCurrentMusicAlbum] = useState({});

  useEffect(()=>{
    if(id){
      const currentMusic = musicRecords.find((album) => album.id === id);

      currentMusic && setCurrentMusicAlbum(currentMusic);
    }
  },[id,musicRecords])
 const handleEdit =()=>{

 }
  return (
    <div>
      <h1>Edit Page</h1>
      <form onSubmit={handleEdit}>

      <div>
        <label>Music Name</label>
        <input type="text" value={ music } onChange={(e)=>setMusic(e.target.value)} />
      </div>

      <div>
        <label>Artist Name</label>
        <input type="text" value={ artist } onChange={(e)=>setArtist(e.target.value)}/>
      </div>

<button onClick={}>Updata</button>
      </form>
    </div>
  )
}

export default EditMusicRecord