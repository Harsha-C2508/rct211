import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getMusicRecords } from '../Redux/AppReducer/action';

const SingleMusicRecord = () => {

  const {id} = useParams();
  const dispatch = useDispatch();

  const musicRecords = useSelector((store) => store.AppReducer.musicRecords)
  const [currentMusicAlbum,setCurrentMusicAlbum] = useState({});

  useEffect(() =>{
    if(musicRecords.length === 0){
      dispatch(getMusicRecords())
    }
  },[dispatch,musicRecords.length])
  useEffect(()=>{
    if(id){
      const currentMusic = musicRecords.find((album) => album.id === id);

      currentMusic && setCurrentMusicAlbum(currentMusic);
    }
  },[id,musicRecords])

  return (
    <div>

      <h1>{currentMusicAlbum.name}</h1>
      <img src={currentMusicAlbum.img} alt="" />
      <Link to={`/music/${id}/edit`}>Edit</Link>
    </div>
  )
}

export default SingleMusicRecord