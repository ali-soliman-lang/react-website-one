import React from 'react';
import { CreativeDiv , CreativeInfo ,  InfoTitle , SpanOne , InfoDir , InfoDesc , A} from './style.js';


const About = () => {
    return (
      <CreativeDiv>
          <div className="container">
              <CreativeInfo>
                  <InfoTitle><SpanOne>This is</SpanOne> Me</InfoTitle>
                  <InfoDir>Creative Director</InfoDir>
                  <InfoDesc>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <A href="#">explicabo</A> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                  </InfoDesc>
                  <InfoDesc>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                  </InfoDesc>
              </CreativeInfo>
          </div>
      </CreativeDiv>
    )
}

export default About;
