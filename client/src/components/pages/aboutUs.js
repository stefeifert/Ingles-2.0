import React from "react";
// import { Link } from 'react-router-dom'
// import './landing.css'
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './aboutUs.css'


class AboutUs extends React.Component {
  state = {};

  render() {
    return (

  <Container className="aboutContainer">
  <Row>
    <Col className="aboutTitle">about us</Col>
    <Col sm={8} className="aboutBody">
          <p>Robert Ingle's background certainly qualified him to know the
            preferences of shoppers in his territory. A member of a third
            generation grocery family, he worked in a grocery store started by his
            grandfather in Asheville, North Carolina where the company
            headquarters is still located.</p>
            <p>Elmer Ingle closed the family store in 1956 and young Robert attended
            the University of Miami. From 1961 to 1963 he was back in the
            Carolinas working for the chain of Colonial Stores until he secured
            financing to open his first Ingles store in Asheville in 1963.</p>
            <p>
            Robert Ingle opened the first Ingles supermarket in Asheville, North
            Carolina in 1963. He saw an opportunity to invest in smaller towns and
            rural communities throughout North and South Carolina that were being
            underserved by large grocery chains. It was a strategy that proved so
            successful that expansion into similar communities in Georgia,
            Tennessee, Alabama and Virginia soon followed. Ingles now operates
            approximately 200 stores in six southeastern states with annual sales
            of almost $4 billion.
            </p>
            </Col>
            <div className="aboutImgBox">
            <img className="aboutImg" src = '/images/bobingles.jpeg' alt='bobIngles'/>
            </div>

            <div className="aboutBody">
            <p>
            The first facility was small, crowded and staffed by Ingle, his wife
            and a small dedicated group of employees. Competition was fierce, with
            chains such as Winn-Dixie, A&P and Colonial controlling 93 percent of
            the area's food sales. Yet Ingle was determined to break in.
            </p>
            <p>
            Early on, Ingles implemented a successful strategy of real estate
            investment in the communities it served, often owning the real estate
            on which its stores are located. Ingles today owns two-thirds of the
            real estate on which it operates.
          </p>
          <p>
            He cut prices, extended store hours to include Sundays and holidays,
            advertised specials, expanded the supermarket, set up mass merchandise
            displays, offered games, stamps and other promotional items and
            generally, ran what he called "a circus" in order to get people in the
            door.
          </p>
          
          <div>
    
  </div>
          <p>
            In 1982, Ingles found a strategic partner by purchasing a milk
            processing facility. Milkco, Inc., a wholly owned subsidiary, not only
            supplies Ingles stores with the freshest dairy products, fruit juices
            and bottled waters, but also sells its products to other retailers,
            wholesalers and food service distributors. Annual production at Milkco
            has grown from 5 million gallons in 1982 to over 60 million gallons
            today.
          </p>
          <p>
            In 1987, the Company became publicly traded on the Nasdaq Stock
            Markets's National Market under the symbol IMKTA.
          </p>
          <p>
            Ingles self-distributes its stores' merchandise from its distribution
            center on the outskirts of Asheville, North Carolina, where its
            headquarters is also located. The distribution center is strategically
            located adjacent to Interstate 40 and in close proximity to Interstate
            26. To facilitate its high standards of quality and freshness, the
            company's highly efficient warehouse and distribution center is within
            250 miles of Ingles' 200+ retail stores.
          </p>
          <p>
            Ingles strives to provide one-stop shopping convenience to its valued
            customers. Ingles supermarkets offer customers a wide variety of
            nationally advertised food products, including grocery, meat, produce,
            deli and bakery departments. In addition, the company offers
            pharmacies and fuel at the majority of its 200 plus locations.
          </p>
          <p>
            The same customer focus and commitment to quality and convenience on
            which Robert Ingle founded the business in 1963, continues today
            throughout the organization.
          </p>
          <p>
            Ingles offers a full variety of brand name products supplemented with
            Ingles' own Laura Lynn brand products which are equal or superior to
            National Brands and guaranteed by Ingles Markets. Ingles Private Label
            products are named after Mr. Ingle's daughter, Laura Lynn Ingle.
          </p>
          </div>
    
    </Row>
</Container>

    );
  }
}

export default AboutUs;
