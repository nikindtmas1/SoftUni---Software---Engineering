import { NavLink } from 'react-router-dom';
import { Component } from 'react';
import Pet from '../Pet/Pet';

import * as petsService from '../../services/PetService'

class Dashboard extends Component {

    constructor(props){
        super(props)

        this.state = {
            pets: [],
            currantCategory: 'all'
        }
    }

    componentDidMount(){
       petsService.getAll()
       .then(res => this.setState({pets: res}))
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.category == this.props.match.params.category){
            return;
        }
        petsService.getAll(this.props.match.params.category)
       .then(res => this.setState({pets: res, currantCategory: this.props.match.params.category}))
    }

    render(){
    return (

        <section className="dashboard">
                <h1>Dashboard</h1>
                <nav className="navbar">
                    <ul>
                        <li><NavLink activeClassName='nav-link-selected' to='/dashboard/all'>All</NavLink></li>
                        <li><NavLink to='/dashboard/cats'>Cats</NavLink></li>
                        <li><NavLink to='/dashboard/dogs'>Dogs</NavLink></li>
                        <li><NavLink to='/dashboard/parrots'>Parrots</NavLink></li>
                        <li><NavLink to='/dashboard/reptiles'>Reptiles</NavLink></li>
                        <li><NavLink to='/dashboard/other'>Other</NavLink></li>
                    </ul>
                </nav>
                <ul className="other-pets-list">

                    {this.state.pets.map(x => <Pet 
                    key={x.id}
                    name={x.name}
                    id={x.id}
                    description={x.description}
                    imageURL={x.imageURL}
                    category={x.category}
                    likes={x.likes}
                    />)}
            
                </ul>

                <style jsx>
                    {`
                    .pet-info {
                        padding-bottom: 1rem;
                    }
                    a {
                        text-decoration: none;
                        display: inline-block;
                    }
                    
                    li {
                        list-style-type: none;
                    }
                    .fa-heart {
                        color: red;
                    }
                    .detailsMyPet>p:nth-child(2),
                    .deletePet>p:nth-child(2),
                    .otherPet>p:nth-child(2),
                    .myPet>p:nth-child(2) {
                        font-size: 1.2rem;
                        font-weight: bold;
                    }
                    .detailsOtherPet,
                    .detailsMyPet,
                    .deletePet,
                    .otherPet,
                    .myPet {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    
                    .dashboard>nav>ul {
                        display: flex;
                    
                    }
                    
                    .dashboard>nav>ul li:not(:last-child) {
                        padding-right: 1rem;
                    }
                    
                    .dashboard .navbar {
                        justify-content: center;
                    }

                    .basic h1,
                    .my-pets h1,
                    .dashboard h1 {
                        text-align: center;
                        margin: 0rem;
                        padding: 2rem 0 1rem 0;
                    }
                    .my-pets .my-pets-list,
                    .dashboard .other-pets-list {
                        display: flex;
                        justify-content: space-around;
                        flex-wrap: wrap;
                    }
                    .navbar-dashboard{
                        display: flex;
                        justify-content: space-between;    
                        width: 100vw;
                    }
                    nav.navbar ul li a {
                        display: block;
                        padding: 0.4rem 0.8rem;
                        border-radius: 0.4rem;
                        text-decoration: none;
                        font-weight: bold;
                        background: cadetblue;
                        color: rgb(255, 255, 255);
                      }
                      nav.navbar ul {
                        background: transparent;
                        padding: 0.5rem;
                        border-radius: 0.3rem;
                        margin: 0;
                      }
                      nav.navbar ul li {
                        display: block;
                        list-style: none outside;
                        position: relative;
                      }
                      
                    .img {
                        width: 15rem;
                        position: relative;
                        overflow: hidden;
                        padding: 0rem;
                    }
                    
                    img {
                        display: block;
                        position: absolute;
                        left: 0;
                        right: 0;
                        width: 100%;
                        height: auto;
                        object-fit: cover;
                    }
                    
                    .img::after {
                        display: block;
                        content: "";
                        padding-top: 100%;
                    }

                    .button {
                        display: block;
                        padding: 0.6rem 1rem;
                        border-radius: 0.4rem;
                        text-decoration: none;
                        font-weight: bold;
                        background: cadetblue;
                        color: rgb(255, 255, 255);
                        border: none;
                        font-size: 1rem;
                    
                    }
                    .button:hover,
                    nav.navbar ul li a:hover,
                    nav.navbar ul li:hover > a {
                      background: rgb(248, 215, 107);
                      color: rgb(0, 0, 0);
                      font-weight: bold;
                    }
                    h3 {
                        margin-bottom: 0;
                    }
                    
                    .pet-info {
                        padding-bottom: 1rem;
                    }
                    `}
                </style>
            </section>

    )
    }
}

export default Dashboard;