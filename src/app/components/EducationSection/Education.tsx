import Image from 'next/image';
import { Typography } from '@mui/material';
import VTC from '@/assets/vtc.jpg';
import styles from './Education.module.css';

export default function Education() {


  return (
    <div className={styles.root}>
      <div>
        <Typography sx={{ fontSize: { xs: '36px', md: '48px', lg: '64px' }, fontFamily: 'Poppins', fontWeight: 600, textAlign: 'center', color: 'var(--main-color)' }}>Education</Typography>
        <Typography sx={{ mt: 4, fontSize: { xs: '16px', md: '24px', lg: '24px' }, fontFamily: 'Poppins', fontWeight: 500, textAlign: 'center', color: 'var(--main-color)' }}>Bachelor’s Degree in Computer Science and Informatics</Typography>
        <Typography sx={{ mb: 3, mt: 1, fontStyle: 'oblique', fontSize: { xs: '16px', md: '24px', lg: '24px' }, fontFamily: 'Poppins', fontWeight: 500, textAlign: 'center', color: 'var(--main-color)' }}>State Engineering University of Armenia</Typography>
      </div>
      <Image
        className={styles.img}
        src={VTC}
        alt="University"
        priority={true}
        style={{ position: 'initial', width: '100%' }}
      />
      <span className={styles.animate} styles="--i:1;"></span>
    </div>
  );
}
