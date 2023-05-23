import * as React from 'react';
import LogoImage from '../resources/images/logo.svg'

export default function LogoIcon ()
{
  return (
    <div style={{display: "inline-flex", alignItems: 'center'}}>
      <img
        src={LogoImage}
        alt="ARKutlur logo"
        style={{marginRight: "0.75rem", height: "2.25rem"}}
      />
      <p
        style={{fontWeight: "600", fontSize: "1.25rem", lineHeight: "1.75rem", color: "white", whiteSpace: "nowrap"}}
      >
        ARKultur
      </p>
    </div>
  )
}
