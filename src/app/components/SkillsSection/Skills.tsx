import styles from './Skills.module.css';
import { Box, Grid, Typography } from '@mui/material';
import SkillItem from './SkillItem/SkillItem';

export default function Skills() {

  const skills = [
    'TypeScript', 'JavaScript', 'HTML/CSS', 'Node JS', 'Nest JS', 'Express JS',
    'React JS', 'Next JS', 'MUI', 'Antd', 'Bootstrap',
    'Redux', 'Redux Thunk', 'Redux Toolkit', 'RTK Query', 'MobX', 'React Query',
    'React Hook Form', 'GraphQL', 'PostgreSQL', 'MySQL', 'Sequelize', 'Typeorm', 'Axios', 'Socket.io', 'WebSockets',
    'Webpack', 'Docker', 'nginx', 'AWS', 'S3'
  ];
  const methods = [
    'Object-Oriented Programming', 'Design Patterns ',
    'Architectural Patterns (MVC)', 'Generic Programming', 'Agile/Scrum Methodology'
  ];
  const tools = [
    'Git', 'VIM', 'JIRA', 'Confluence', 'Github', 'Bitbucket', 'Visual Studio Code',
    'Xcode', 'Jenkins', 'Appium', 'Maven', 'npm'
  ];

  return (
    <div className={styles.root}>
      <div className={styles.show_animate}>
        <Typography sx={{ mb: 4, fontSize: { xs: '36px', md: '48px', lg: '64px' }, fontFamily: 'Poppins', fontWeight: 600, textAlign: 'center', color: 'var(--main-color)' }}>Skills</Typography>
        <span className={styles.animate} styles="--i:1;"></span>
      </div>
      <Grid container spacing={1}>
        {skills.map(i =>
          <Grid key={i} item xs={6} sm={6} md={4} lg={3}>
            <SkillItem title={i} />
          </Grid>

        )}
      </Grid>

      <Box className={styles.show_animate} sx={{ mt: 6 }}>
        <Typography sx={{ mb: 3, fontSize: { xs: '16px', md: '16px', lg: '24px' }, fontFamily: 'Poppins', fontWeight: 600, textAlign: 'center', color: 'var(--main-color)' }}>Tools</Typography>
        <span className={styles.animate} styles="--i:2;"></span>
      </Box>
      <Grid container spacing={1}>
        {tools.map(i =>
          <Grid key={i} item xs={6} sm={6} md={4} lg={3}>
            <SkillItem title={i} />
          </Grid>

        )}
      </Grid>

      <Box className={styles.show_animate} sx={{ mt: 6 }}>
        <Typography sx={{ mb: 3, fontSize: { xs: '16px', md: '16px', lg: '24px' }, fontFamily: 'Poppins', fontWeight: 600, textAlign: 'center', color: 'var(--main-color)' }}>Methodologies</Typography>
        <span className={styles.animate} styles="--i:3;"></span>
      </Box>
      <Grid container spacing={1}>
        {methods.map(i =>
          <Grid key={i} item xs={6} sm={6} md={4} lg={4}>
            <SkillItem title={i} />
          </Grid>
        )}
      </Grid>
    </div>
  );
}
