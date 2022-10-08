import React from "react";
import { Link } from "react-router-dom";
import './about.css';


export default function About(props) {
    return (
        <>  <div className={`container pt-3 text-${props.mode === "light" ? "dark" : "light"}`}><h3>About content here you can create your own card here by editing thesse cards. </h3></div> <div className="mt-4 container cards ">
            <div className={`card m-4 bg-${props.mode}`} style={{ width: `18rem` }}>
                <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" className="card-img-top" alt="Card" />
                <div className={`card-body bg-${props.mode}`}>
                    <h5 className={`card-title bg-${props.mode}`}>Instgram Handle</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quo officia earum ad delectus quis..</p>
                    <Link className="btn btn-primary" to="#" >Instagram</Link>
                </div>
            </div>
            <div className={`card m-4  bg-${props.mode}`} style={{ width: `18rem` }}>
                <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" className="card-img-top" alt="Card" />
                <div className={`card-body bg-${props.mode}`}>
                    <h5 className={`card-title bg-${props.mode}`}>Twitter</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam possimus tempora sapiente voluptates, culpa quasi!</p>
                    <Link className="btn btn-primary" to="#" >Twitter</Link>
                </div>
            </div>
            <div className={`card m-4  bg-${props.mode}`} style={{ width: `18rem` }}>
                <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" className="card-img-top" alt="Card" />
                <div className={`card-body bg-${props.mode}`}>
                    <h5 className={`card-title bg-${props.mode}`}>Facebook</h5>
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam natus doloribus vel. Culpa, distinctio veritatis?</p>
                    <Link className="btn btn-primary" to="#" >Facebook</Link>
                </div>
            </div>
            <div className={`card m-4  bg-${props.mode}`} style={{ width: `18rem` }}>
                <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" className="card-img-top" alt="Card" />
                <div className={`card-body bg-${props.mode}`}>
                    <h5 className={`card-title bg-${props.mode}`}>LinkedIn</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatibus magni maiores suscipit odit hic?</p>
                    <Link className="btn btn-primary" to="#" >LinkedIn</Link>
                </div>
            </div>
        </div>
        </>
    )
}  