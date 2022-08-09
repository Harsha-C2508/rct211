import React from 'react'
import FilterSort from '../Component/FilterSort'
import MusicRecords from './MusicRecords'
import Styles from '../style/home.module.css'

const Home = () => {
  return (
    <div className={Styles.homemain}>
      <div className={Styles.filterpart}>
         <FilterSort/>
      </div>
      
      <div className={Styles.musicpart}>
          <MusicRecords/>
      </div>
    </div>
  )
}

export default Home