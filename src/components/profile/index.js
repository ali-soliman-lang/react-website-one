import React from 'react';
import { ProfileSkills ,
         ProfileDiv , 
         H2 , 
         SpanTitle , 
         ProfileList , 
         ProfileItem , 
         SpanLi , 
         SkillsDiv , 
         SkillsDesc , 
         Bar , 
         Title , 
         Perc , 
         Parent , 
         SpanSp1 , 
         SpanSp2 , 
         SpanSp3 ,
         LastSpan
} from './style.js';


const Profile = () => {
    return (
      <ProfileSkills>
          <div className="container">
              <ProfileDiv>
                  <H2><SpanTitle>My </SpanTitle>Profile</H2>
                  <ProfileList>
                      <ProfileItem>
                          <SpanLi>Name</SpanLi>
                          ALi Soliman
                      </ProfileItem>
                      <ProfileItem>
                          <SpanLi>Birthday</SpanLi>
                          27/8/1999
                      </ProfileItem>
                      <ProfileItem>
                          <SpanLi>Address</SpanLi>
                          Smoha
                      </ProfileItem>
                      <ProfileItem>
                          <SpanLi>Phone</SpanLi>
                          4444 5555 6666
                      </ProfileItem>
                      <ProfileItem>
                          <SpanLi>Email</SpanLi>
                          Ali@Ali.com
                      </ProfileItem>
                      <ProfileItem>
                          <SpanLi>Website</SpanLi>
                          <LastSpan>www.google.com</LastSpan>
                      </ProfileItem>
                  </ProfileList>
              </ProfileDiv>
              
              <SkillsDiv>
                  <H2>Some <SpanTitle>skills</SpanTitle></H2>
                  <SkillsDesc>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                  </SkillsDesc>
                  <Bar>
                      <Title>Bootstrap</Title>
                      <Perc>100%</Perc>
                      <Parent>
                          <SpanSp1></SpanSp1>
                      </Parent>
                  </Bar>
                  
                  <Bar>
                      <Title>CSS3</Title>
                      <Perc>90%</Perc>
                      <Parent>
                          <SpanSp2></SpanSp2>
                      </Parent>
                  </Bar>
                  
                  <Bar>
                      <Title>Photoshop</Title>
                      <Perc>80%</Perc>
                      <Parent>
                          <SpanSp3></SpanSp3>
                      </Parent>
                  </Bar>
              </SkillsDiv>
          </div>
      </ProfileSkills>
    )
}

export default Profile;
