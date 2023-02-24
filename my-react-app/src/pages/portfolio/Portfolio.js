import React from "react";
import './portfolio.css';
import Portfolio from "../../components/portfolio/Portfolio";



function PortfolioPage() {

    return (
        <>
            <section className="page-section" id="work">
                <h2>work.</h2>
                <div className="card-container">
                    <Portfolio injectData="0" />
                    <Portfolio injectData="1" />
                    <Portfolio injectData="2" />
                    <Portfolio injectData="3" />
                </div>
            </section>
        </>
    )
}


export default PortfolioPage;