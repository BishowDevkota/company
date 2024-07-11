import React from 'react'
import '../style/KnowMore.css'
import Know from "../../../Data/About/KnowMore.json"
const KnowMore = () => {
  return (
    <div className="KnowMoreBox">
  <h2>{Know.heading}</h2>
  <p>{Know.discription}</p>
  <a href="https://api.whatsapp.com/send/?phone=%2B9779846139572&text&type=phone_number&app_absent=0" target="_blank" className="ancor">{Know.number}</a>
  <a href="mailto:bigskytreks@gmail.com" className="ancor">{Know.gmail}</a>
</div>

  )
}

export default KnowMore