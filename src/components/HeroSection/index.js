import React from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import profile_pic from '../../images/profile_pic-1.jpg';
import { 
    HeroContainer, 
    HeroBg, 
    HeroLeftContainer, 
    Img, 
    HeroRightContainer, 
    HeroInnerContainer, 
    TextLoop, 
    Title, 
    Span, 
    SubTitle, 
    SocialMediaIcons, 
    SocialMediaIcon, 
    ResumeButton 
} from './HeroStyle';
import Typewriter from 'typewriter-effect';

const HeroSection = ({ heroData }) => {
    return (
        <section id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <Title>Hi, I am SDE <br /> {heroData?.name}</Title>
                        <TextLoop>
                            I am a Developer
                    
                        </TextLoop>
                        <SubTitle>Hi, I’m Thejaswi Gadhiraju — a passionate and results-driven Software Engineer with strong expertise in backend development and full-stack solutions. I’ve had the privilege of working at industry-leading companies like Apple and Volkswagen Group of America, where I contributed to building scalable systems, enhancing application performance, and solving complex engineering challenges.

With a solid foundation in computer science and a commitment to writing clean, efficient, and maintainable code, I take pride in delivering high-quality solutions that drive real-world impact. Outside of coding, I enjoy traveling, staying active with sports, and immersing myself in music and movies.</SubTitle>
                        
                    </HeroLeftContainer>

                    <HeroRightContainer>
                        <Img src={profile_pic} alt={`Thejaswi Gadhiraj - Profile Picture`}/>
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </section>
    );
};

export default HeroSection;
