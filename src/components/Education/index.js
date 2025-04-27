import React from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EducationCard from '../Cards/EducationCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 60px;
  position: relative;
  z-index: 1;
  @media (max-width: 960px) {
    padding: 0;
  }
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

const Title = styled.div`
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

const Desc = styled.div`
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
  @media (max-width: 660px) {
    align-items: flex-end;
  }
`;

const EducationTimeline = ( ) => {
  const education = [
    {
      "date": " Graduated May 2020",
      "degree": "Master of Science in Computer Science",
      "desc": "Completed a 30-credit program focusing on both theoretical and practical aspects of computer science. Coursework included Algorithm Design, Database Systems, Software Engineering, and Artificial Intelligence. Engaged in a capstone project, applying learned skills to real-world problems.",
      "grade": "GPA: 3.6",
      "id": 0,
      "img": "https://upload.wikimedia.org/wikipedia/en/0/02/University_of_Dayton.svg",
      "school": "University of Dayton, Ohio"
    },
    {
      "date": "2014 - 2018",
      "degree": "Bachelor of Technology (B.Tech) in Electronics and Computer Engineering",
      "desc": "Completed a comprehensive undergraduate program integrating core concepts from both Computer Science and Electronics Engineering. The curriculum encompassed foundational and advanced courses, providing a multidisciplinary skill set.",
      "grade": "GPA: 3.47 (First Class with Distinction)",
      "id": 1,
      "img": "https://free-images.com/md/71bc/snist_logo.jpg",
      "school": "Sreenidhi Institute of Science and Technology, Hyderabad, India"
    },
    {
      "date": "2012 - 2014",
      "degree": "Intermediate Education (Class XI & XII)",
      "desc": "Completed a rigorous two-year intermediate program with a focus on Mathematics, Physics, and Chemistry. Achieved a commendable aggregate of 91%, laying a strong foundation for advanced studies in engineering and technology.",
      "grade": "Percentage: 91%",
      "id": 2,
      "img": "https://www.narayanagroup.com/images/logo.png",
      "school": "Narayana Junior College, Hyderabad, India"
    }
  ]
  
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          My education has been a journey of self-discovery and growth. My educational details are as follows.
        </Desc>
        <TimelineSection>
          <Timeline>
            {education.map((edu, index) => (
              <TimelineItem key={edu.id}>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <EducationCard education={edu} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index < education.length - 1 && (
                    <TimelineConnector style={{ background: '#854CE6' }} />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default EducationTimeline;
