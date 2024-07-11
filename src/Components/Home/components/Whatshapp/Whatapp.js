import React from 'react'
import '../../style/Whatshapp/Whatshapp.css'
import { Link } from 'react-router-dom'
const Whatapp = () => {
  return (<>
    <a href='https://api.whatsapp.com/send/?phone=%2B9779846139572&text&type=phone_number&app_absent=0' target='_blank'> <div className='whatapp'>

        <img src="/Image/Whatshapp-logo.png" alt="" />

    </div>
    </a>
    </>
  )
}

export default Whatapp