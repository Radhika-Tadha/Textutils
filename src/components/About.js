// import React, { useState } from 'react'

export default function About(props) {
  // const [mystle, setMyStle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white',
  // })
  // const [btntext, setBtnText] = useState('Enable dark Mode');
  // const toggleStyle = () => {
  //   if (mystle.color === 'black') {
  //     setMyStle({
  //       color: 'white',
  //       backgroundColor: 'black',

  //     })
  //     setBtnText("Enable light Mode")
  //   } else {
  //     setMyStle({
  //       color: 'black',
  //       backgroundColor: 'white',
  //     })
  //     setBtnText("Enable dark Mode")
  //   }
  // }
  let mystle = {

    color: props.mode === 'dark' ? 'white' : 'rgb(6 51 72)',
    backgroundColor: props.mode === 'dark' ? 'rgb(6 51 72)' : 'white',
    // border: '2px solid',
    // borderColor: props.mode === 'dark' ? 'white' : 'rgb(6 51 72)',
  }

  return (
    <>
      <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'rgb(6 51 72)'}}>
        <h1 className='my-3'>About Us</h1>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" style={mystle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Simple & Efficient
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={mystle}>
                TextUtils is a fast and easy-to-use text manipulation tool. Whether you're cleaning, formatting,
                or analyzing text, TextUtils helps you do it in just a few clicks.
                It's perfect for quick edits and boosts productivity with minimal effort.

              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" style={mystle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                All-in-One Text Utility
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={mystle}>
                From converting case to removing extra spaces or copying clean text, TextUtils offers all
                the essential tools to streamline your writing and editing tasks.
                Designed with a clean interface, it's ideal for both casual users and professionals.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" style={mystle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Smart Text Analyzer
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={mystle}>
                With real-time word count, character analysis, and readability estimation, TextUtils empowers writers,
                students, and developers to better understand their text.
                Stay focused and write more effectively with instant feedback at your fingertips.
              </div>
            </div>
          </div>
        </div>
        <div className='container my-3'>
          {/* <button className='btn btn-outline-secondary' onClick={toggleStyle}>{btntext}</button> */}
        </div>
      </div>


    </>
  )
}
