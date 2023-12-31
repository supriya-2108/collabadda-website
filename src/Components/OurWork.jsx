import React from 'react';
import styled from 'styled-components';
import images from './Images';
const OurWork = () => {

  console.log(images);
  return (
    <>  
      <h2>OUR WORK</h2>
      <ImageGridContainer>
      {images.map((image, index) => (
        <ImageWrapper key={index}>
          {image.img!=="Images/The_Times_of_India_campaign.png"?
          <Image src={image.img} alt={`Image ${index + 1}`} />:<Image src={image.img} alt={`Image ${index + 1}`} style={{objectFit:"contain"}}/>
          }<Content>
             
             <Logo src={image.logo}/>
             <div className='contentInWorkSection'>
                 <Column1>
                     <span>INFLUENCERS</span><br/><span>{image.Influencers}</span>
                 </Column1>
                 <Column1><span>LIKES</span><br/><span>{image.likes}</span>
                 </Column1>
                 <Column1><span>REACH</span><br/><span>{image.reach}</span>
                 </Column1>
             </div>
           </Content>
        </ImageWrapper>
        
      ))}
    </ImageGridContainer>
    </>
    
  );
};


const ImageGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap:5px;
  margin: 0 7rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left:22px;
  }
`;

const ImageWrapper = styled.div`
  overflow:hidden;
  height:32rem;
  width:40rem;
  border-radius:10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
       height:20rem;
       width:20rem;
    //    margin-bottom:2rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  cursor: pointer;
    cursor: pointer;
    border-radius: 0.5rem;
  transition: transform 2s ease-in-out;

  ${ImageWrapper}:hover & {
    transform: scale(0.9);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
        height: 80%;
        width: 100%;
      }
  
`;

const Content = styled.div`
position: relative;
bottom: 9.25rem;
left: 1.5rem;
width: 100%;
height: 30%;
// background-color: 
display: flex;
justify-content: center;
align-items: center;
color: #fff;
font-size: 18px;
text-align: center;
z-index:1;
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  font-size:1rem;
  bottom:4rem;
  left:0rem;
  span{
    font-size:0.8rem;
    height:10%;
  }
}
`;
  const Logo = styled.img`
  width: 20%;
  height: 20%;
  object-fit: contain;
  margin-left:-450px;
  margin-top:-150px;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin-left:-230px;
    margin-top:2rem;
    width:25%;
    height:40%;
  }

  
`;

const Column1 = styled.div`
  flex: 1;
  padding: 1px;
  margin: 1px;
  position:relative;
  height:4rem;
  width:55rem;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
   height:2rem;
   width:20rem;
   margin-bottom:2rem;

  
    
  }`;
export default OurWork;