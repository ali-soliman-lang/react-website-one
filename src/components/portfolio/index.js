import React , { useState , useEffect } from 'react';
import { PortfolioSection , PortfolioTitle , Span , PortfolioList, PortfolioItem , BoxDiv , Img , Overlay , SpanTwo } from './style.js';
import axios from 'axios';


const Portfolio = () => {

    const [ img , setImg ] = useState([])

    useEffect( () => {
        axios.get('js/data.json').then( res => { setImg(res.data.portfolio)})
    } , [] ) 

    const PortfolioImg = img.map( (imageItem) => {
        return (
            <BoxDiv key={imageItem.id}>
            <Img src={imageItem.image} alt="" />
            <Overlay>
                <SpanTwo>
                    Show Image
                </SpanTwo>
            </Overlay>
        </BoxDiv>
        )
    });

    

    return (
      <PortfolioSection>
          <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
          <PortfolioList>
              <PortfolioItem active >All</PortfolioItem>
              <PortfolioItem>HTML</PortfolioItem>
              <PortfolioItem>Photoshop</PortfolioItem>
              <PortfolioItem>Wordpress</PortfolioItem>
              <PortfolioItem>Mobile</PortfolioItem>
          </PortfolioList>
          
          <div className="box">
              {PortfolioImg}
          </div>
      </PortfolioSection>
    )
}

export default Portfolio;
