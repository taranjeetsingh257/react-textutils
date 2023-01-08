import React from 'react'

export default function About(props) {
    let myStyle ={
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode ==='dark'?'#302e3e':'white'
    }

  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Manipulate your Text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                With this React App you can:
                <br />
                <code>Convert your text to lowercase</code>
                <br />
                <code>Convert your text to UPPERCASE</code>
                <br />
                <code>Clear text</code>
                <br />
                <code>Remove extra spaces</code>
                <br />
                <code>Copy text</code>
                <br />
                <code>Analyse text</code>
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Our app is <code>Free to use</code>
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Our app is <code>Compatible with all modern browsers</code>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
