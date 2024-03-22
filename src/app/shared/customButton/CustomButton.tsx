import { Button } from "@mui/material";
import styles from './Button.module.css';
import { StyledEngineProvider } from '@mui/material/styles';

function CustomButton({
  title,
  type = 'primary',
  onClick,
  sx = {},
  disabled = false
}: {
  title: string,
  type?: 'primary' | 'secondary'
  onClick: () => void,
  sx?: any,
   disabled?: boolean
}) {
  return (
    <StyledEngineProvider injectFirst>
      <Button disabled={disabled} sx={{ ...sx }} onClick={onClick} className={`${styles.btn} ${styles[`btn_${type}`]}`}>{title}</Button>
    </StyledEngineProvider>
  )
}

export default CustomButton;