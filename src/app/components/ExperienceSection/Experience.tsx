import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import styles from './Experience.module.css';

type ExperienceItem = {
  companyName: string,
  date: string,
  position: string,
  description: string,
  responsibilities: string[] | null,
  technologies: string
}
export default function Experience() {

  const experienceList: ExperienceItem[] = [
    {
      companyName: 'Zealous (Instigate mobile)',
      date: 'September 2017 - January 2019',
      position: 'Software Development Engineer',
      description: 'UI testing of web and mobile apps.',
      responsibilities: null,
      technologies: 'Swift, XCTest, Java, Maven, Git, Cucumber, Selenium, Appium, Confluence'
    },
    {
      companyName: 'Zealous (Instigate mobile)',
      date: 'January 2019 – September 2019',
      position: 'Software Development Engineer',
      description: 'A system that allows companies to manage projects and employees. Quickly find suitable employees for new projects.',
      responsibilities: ['Maintained frontend components', 'Maintained backend', 'Conducted code reviews', 'Fixed bugs', 'Provided daily report'],
      technologies: 'JavaScript, Node.JS, React.JS, Redux Thunk, Antd, Express.JS, PostgreSQL, Sequelize, Git.'
    },
    {
      companyName: 'Zealous (Instigate mobile)',
      date: 'September 2019 - January 2020',
      position: 'Software Development Engineer',
      description: 'Developed a system for moving things. Created 3 dashboards. <br />1. Agency dashboard (used by drivers) <br />2. Client dashboards (used by users who have things to move) <br />3. Customer dashboard (administrators used to manage the entire transportation process)',
      responsibilities: ['Designed the frontend part of the application', 'Designed user experience, user interaction, responsive design', 'Performed work estimations', 'Provided monthly report'],
      technologies: 'JavaScript, React.JS, Redux Thunk, SCSS, Google Map, Git.'
    },
    {
      companyName: 'Zealous (Instigate mobile)',
      date: 'January 2020 – July 2022',
      position: 'Software Development Engineer',
      description: 'A system for buying various products from freezers using a QR code. Developed different workspaces for different types of users (admins, providers, users...).',
      responsibilities: ['Designed and implemented the web app and database', 'Provided daily report.'],
      technologies: 'JavaScript/Typescript, Node.JS, React.JS, Axios, MobX, MUI, Express.JS, Sequelize, MySQL, Git, AWS, docker, nginx WebSocket.'
    },
    {
      companyName: 'Flexy Global',
      date: 'July 2022 – August 2023',
      position: 'Senior Software Development Engineer',
      description: 'A system for obtaining a state certificate for different types of companies. Developed different workspaces for different user types (30+ user types).',
      responsibilities: ['Designed and implemented the web app', 'Designed user experience, user interaction, responsive and perfect pixel design', 'Performed work estimations', 'Provided daily report'],
      technologies: 'JavaScript/Typescript, React.JS, Next.JS, React Query, React Hook Form, GraphQL, MUI, Webpack, Git, Bitbucket, AWS, docker.'
    },
  ]
  return (
    <div className={styles.root}>
      <div>
        <Typography sx={{ mb: 8, fontSize: { xs: '36px', md: '48px', lg: '64px' }, fontFamily: 'Poppins', fontWeight: 600, textAlign: 'center', color: 'var(--main-color)' }}>Professional Experience</Typography>
      </div>
      <Box>
        {experienceList.map(i => {
          return (
            <Accordion key={i.date} sx={{ color: 'var(--text-color)', backgroundColor: 'var(--second-bg-color)', boxShadow: '0px 0px 8px var(--main-color)' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'var(--main-color)', fontSize: '24px' }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Box>
                  <Typography sx={{ color: 'var(--main-color)', fontFamily: 'Poppins', fontSize: { xs: '18px', sm: '18px', md: '24px' } }}>{i.companyName}</Typography>
                  <Typography sx={{ fontStyle: 'oblique', fontSize: '18px' }}>{i.date}</Typography>
                  <Typography sx={{ fontSize: '18px' }}>{i.position}</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  {i.description.split('<br />').map((text, index) => (
                    <React.Fragment key={index}>
                      <Typography component={'p'} sx={{ fontStyle: index === 0 ? 'unset' : 'oblique', ml: index === 0 ? 0 : '10px', fontFamily: 'Poppins', fontSize: '16px' }}>{text}</Typography>
                    </React.Fragment>
                  ))}
                  {i.responsibilities && (
                    <Box component={'ul'} sx={{ mt: 2 }}>
                      <Typography sx={{ mb: 1, fontFamily: 'Poppins', fontSize: '16px' }}>Responsibilities:</Typography>
                      <Box sx={{ p: '0 0 0 24px' }}>
                        {i.responsibilities.map(j => {
                          return (
                            <Box sx={{ fontStyle: 'oblique', fontFamily: 'Poppins', fontSize: '14px' }} component={'li'} key={j}>{j}</Box>
                          )
                        })}
                      </Box>
                    </Box>
                  )
                  }
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Typography sx={{ mb: 1, fontFamily: 'Poppins', fontSize: '18px' }}>Used languages and technologies:</Typography>
                  <Typography component={'span'} sx={{ ml: 2, fontStyle: 'oblique', fontFamily: 'Poppins', fontSize: '16px' }}>{i.technologies}</Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
          )
        })}
      </Box>
    </div>
  );
}
