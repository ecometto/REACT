import React from 'react'

import { useParams } from "react-router-dom";




export default function CountryDet(props) {

  

    let { id, algo } = useParams();

    console.log(id);
    console.log(algo);
    // return <div style={{ fontSize: "50px" }}>
    //          Now showing post {id}
    //        </div>;
  return (        
    <div>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7502057.158091136!2d-${}5932209!3d-23.34788963718881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945c083490f13d63%3A0xb3faff611d582ef3!2sParaguay!5e0!3m2!1ses-419!2sar!4v1669217902509!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
  )
}
