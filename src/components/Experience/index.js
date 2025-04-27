import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { ref, onValue } from "firebase/database"; 
import { database } from "../../FirebaseConfig"; 
import { Padding } from '@mui/icons-material';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 60px;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  @media (max-width: 400px) {
    align-items: flex-end;
  }
`;

const ExperienceTimeline = () => {
const experiences = [
  {
    "company": "Apple Inc.",
    "date": "Dec 2020 - Present",
    "desc": "Worked across three major teams — Ads Platform, Notification Services, and IDMS — contributing to ad campaign management, secure identity services, and real-time notifications using technologies like Spring Boot, React, Kafka, AWS, and Jenkins.",
    "id": 0,
    "img": "https://media.licdn.com/dms/image/v2/C560BAQHdAaarsO-eyA/company-logo_100_100/company-logo_100_100/0/1630637844948/apple_logo?e=1750896000&v=beta&t=OvhAJwkL4eUhjmSHJuC4w6WktbUVqHCmiJwQ8lo4nTQ",
    "link": "https://www.apple.com",
    "role": "Software Engineer",
    "skills": [
      "Spring Boot", "ReactJS", "Kafka", "AWS", "Jenkins", "OAuth2", "JWT", "Docker", "Kubernetes", "MySQL", "MongoDB", "Hive", "Spark", "Hadoop"
    ]
  },
  {
    "company": "Volkswagen Group of America",
    "date": "Sept 2020 – Dec 2020",
    "desc": "Maintained and optimized the Volkswagen dealer application, developed responsive UIs using React and AngularJS, improved performance through lazy loading, and ensured cross-browser compatibility.",
    "id": 1,
    "img": "data:image/png;base64,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",
    "link": "https://www.vw.com",
    "role": "Full Stack Developer",
    "skills": [
      "ReactJS", "AngularJS", "JavaScript", "HTML", "CSS", "API Integration", "Performance Optimization"
    ]
  },
  {
    "company": "YKS IT Services",
    "date": "Jan 2018 – Dec 2018",
    "desc": "Developed backend features for shopping sites like Snapdeal and Lime Road using Angular and Node.js, ensured secure and scalable code, performed unit testing, and maintained deployed systems.",
    "id": 2,
    "img": "https://media.licdn.com/dms/image/v2/C4D0BAQEEUATFuNX0KQ/company-logo_100_100/company-logo_100_100/0/1659949932508?e=1750896000&v=beta&t=7cnBRXPgzptn60KTo-Eupjmr7ISx1xCeUU_dziGghAc",
    "link": "#",
    "role": "Software Engineer",
    "skills": [
      "Angular", "Node.js", "MySQL", "JavaScript", "HTML", "Security", "Scrum", "Unit Testing"
    ]
  },
  {
    "company": "DRDO - Advanced Systems Laboratory",
    "date": "June 2017",
    "desc": "Worked on servo controller systems for electromechanical actuators. Debugged circuits using lab equipment and applied signal processing in MATLAB for defense-grade applications.",
    "id": 3,
    "img": "https://media.licdn.com/dms/image/v2/C4D0BAQHr0-w-4HF1ow/company-logo_100_100/company-logo_100_100/0/1630576665362?e=1750896000&v=beta&t=9aFrgGD45PNPSSJ7X9KwSyHEIcg5QRJtScfOAbZp1YM",
    "link": "https://drdo.gov.in",
    "role": "Software Developer Intern",
    "skills": [
      "MATLAB", "Signal Processing", "Electronics Debugging", "Sensors & Actuators"
    ]
  },
  {
    "company": "Smart Bridge",
    "date": "2017",
    "desc": "Built an IoT-based Automatic Toll Gate and Accident Response System using JavaScript, C++, and React to automate toll collection and incident reporting.",
    "id": 4,
    "img": "https://media.licdn.com/dms/image/v2/C4E0BAQE6IrOttCF2xQ/company-logo_100_100/company-logo_100_100/0/1631352490257?e=1750896000&v=beta&t=sa71LV1IyZ-78ZUIWSKCnL2_hF-yif8Jz8LAJHzr-AQ",
    "link": "#",
    "role": "Software Intern",
    "skills": [
      "JavaScript", "C++", "React", "IoT"
    ]
  }
]




  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>
          My work experience as a Developer and other roles on different clubs and team projects.
        </Desc>
        <TimelineSection>
            {experiences.map((experience, index) => (
              <TimelineItem key={experience.id} aria-label={`Experience item ${index + 1}`} >
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index < experiences.length - 1 && (
                    <TimelineConnector style={{ background: '#854CE6' }} />
                  )}
                </TimelineSeparator>
                <TimelineContent>
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default ExperienceTimeline;
