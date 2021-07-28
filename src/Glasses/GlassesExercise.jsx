import React, { Component } from 'react';
import './GlassesStyle.css'; // External Style

export default class GlassesExercise extends Component {
    glassesList = [
        {
            id: 1,
            price: 30,
            name: "GUCCI G8850U",
            url: "./glassesImage/v1.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 2,
            price: 50,
            name: "GUCCI G8759H",
            url: "./glassesImage/v2.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 3,
            price: 30,
            name: "DIOR D6700HQ",
            url: "./glassesImage/v3.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 4,
            price: 70,
            name: "DIOR D6005U",
            url: "./glassesImage/v4.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 5,
            price: 40,
            name: "PRADA P8750",
            url: "./glassesImage/v5.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 6,
            price: 60,
            name: "PRADA P9700",
            url: "./glassesImage/v6.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 7,
            price: 80,
            name: "FENDI F8750",
            url: "./glassesImage/v7.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 8,
            price: 100,
            name: "FENDI F8500",
            url: "./glassesImage/v8.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            id: 9,
            price: 60,
            name: "FENDI F4300",
            url: "./glassesImage/v9.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]
    state = {
        // state object, when state changes, render() is called
    
        modelGlasses: "...",
        glassName: "Choose Glasses",
        glassDesc: "Click to try on glasses",
    }
    changeGlasses(url, name, desc) {
        this.setState({
            modelGlasses: url,
            glassName: name,
            glassDesc: desc
        },() => {
            console.log(this.state.glassName) 
        })
    }
    renderGlassesButton = () => {
        return this.glassesList.map((glasses,index) => {
            const {id, price, name, url, desc} = glasses;
            return (
                <div className="col-2" key={index}>
                    <button onClick={() => this.changeGlasses(glasses.url, glasses.name, glasses.desc)}>
                        <img src={glasses.url} alt="" />
                    </button>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="container" id="glassesContainer">
                <div className="glassesTop">
                    <div className="card">
                        <img src={this.state.modelGlasses} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.state.glassName}</h5>
                            <p className="card-text">{this.state.glassDesc}</p>
                        </div>
                    </div>
                    <div className="card">

                    </div>
                </div>

                <div className="row glassesBot">
                    {this.renderGlassesButton()}
                    {/* <div className="col-2">
                        <button onClick={this.changeGlasses}>
                            <img src="./glassesImage/v1.png" alt="" />
                        </button>
                    </div>
                    <div className="col-2">
                        <button>
                            <img src={`./glassesImage/v2.png`} alt="" />
                        </button>
                    </div>
                    <div className="col-2">
                        <button>
                            <img src={`./glassesImage/v9.png`} alt="" />
                        </button>
                    </div>
                    <div className="col-2">
                        <button>
                            <img src={`./glassesImage/v3.png`} alt="" />
                        </button>
                    </div>
                    <div className="col-2">
                        <button>
                            <img src={`./glassesImage/v5.png`} alt="" />
                        </button>
                    </div>
                    <div className="col-2">
                        <button>
                            <img src={`./glassesImage/v6.png`} alt="" />
                        </button>
                    </div>
                    <div className="col-2">
                        <button>
                            <img src={`./glassesImage/v8.png`} alt="" />
                        </button>
                    </div>
                    <div className="col-2">
                        <button>
                            <img src={`./glassesImage/model.jpg`} alt="" />
                        </button>
                    </div>
                    <div className="col-2">
                        <button>
                            <img src={`./glassesImage/model.jpg`} alt="" />
                        </button>
                    </div> */}
                </div>
            </div>

        )
    }
}
