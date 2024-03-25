import Checked from '../../../../assets/checked.svg';
import styles from './SkillItem.module.css';
import { Typography } from '@mui/material';


export default function SkillItem({ title }: { title: string }) {
  return (
    <div className={styles.root}>
      <Checked />
      <Typography sx={{ ml: 1, fontSize: '1.6rem' }}>{title}</Typography>
      <span className={styles.animate} style={{ '--i': '1' } as React.CSSProperties}></span>
    </div>
  )
}