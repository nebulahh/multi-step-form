import React from 'react'
import thankIcon from '../assets/icon-thank-you.svg'

const Thanks = () => {
  const thankYouText = {
    fontSize: "14px",
    textAlign: "center"
  }

  const bold = {
    fontWeight: "700",
    color: "#02295a",
    fontSize: "20px"

  }
  return (
    <section className='form flex flex-col items-center justify-center gap-3'>
      <div>
        <img src={thankIcon} alt="" />
      </div>
      <b style={bold}>Thank you</b>
      <p style={thankYouText}>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </section>
  )
}

export default Thanks