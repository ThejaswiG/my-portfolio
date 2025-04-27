import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
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

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 80%;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;



const Skills = ({ skillsData }) => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which I have been working!</Desc>
        <SkillsContainer>
          {[
  {
    "title": "Frontend",
    "skills": [
      {
        "name": "React JS",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
      {
        "name": "Angular",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
      },
      {
        "name": "HTML",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      },
      {
        "name": "CSS",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
      },
      {
        "name": "JavaScript",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      }
    ]
  },
  {
    "title": "Backend",
    "skills": [
      {
        "name": "Java",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
      },
      {
        "name": "Spring Boot",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
      },
      {
        "name": "Node.js",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      },
      {
        "name": "REST API",
        "image": "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.svg"
      }
    ]
  },
  {
    "title": "Databases",
    "skills": [
      {
        "name": "MySQL",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      },
      {
        "name": "MongoDB",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
      },
      {
        "name": "Cassandra",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg"
      },
      {
        "name": "Oracle DB",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"
      }
    ]
  },
  {
    "title": "Big Data",
    "skills": [
      {
        "name": "Hadoop",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg"
      },
      {
        "name": "Hive",
        "image": "data:image/png;base64,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"
      },
      {
        "name": "Spark",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg"
      }
    ]
  },
  {
    "title": "Cloud & DevOps",
    "skills": [
      {
        "name": "AWS",
        "image": "data:image/png;base64,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"
      },
      {
        "name": "Microsoft Azure",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
      },
      {
        "name": "Docker",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
      },
      {
        "name": "Kubernetes",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
      },
      {
        "name": "Jenkins",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
      },
      {
        "name": "GitHub",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZLYBiovD__L58iSOJAp3KTs0-MrXk4qLQwA&s"
      }
    ]
  },
  {
    "title": "Testing",
    "skills": [
      {
        "name": "Selenium",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg"
      },
      {
        "name": "Cucumber",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain.svg"
      },
      {
        "name": "Karate",
        "image": "data:image/png;base64,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"
      },
      {
        "name": "TestNG",
        "image": "data:image/png;base64,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"
      }
    ]
  },{
    "title": "Programming Languages",
    "skills": [
      {
        "name": "Python",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
      },
      {
        "name": "C",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
      },
      {
        "name": "C++",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
      },
      {
        "name": "Java",
        "image": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
      }
    ]
  }
  
]
.map((skill, index) => (
            <Skill key={index}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, i) => (
                  <SkillItem key={i}>
                    <SkillImage src={item.image} alt={`${item.name} - Thejaswi Gadhiraj skills`} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
