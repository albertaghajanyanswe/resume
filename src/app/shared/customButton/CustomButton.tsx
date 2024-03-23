import { Button } from "@mui/material";
import styles from './Button.module.css';
import { StyledEngineProvider } from '@mui/material/styles';

function CustomButton({
  title,
  type = 'primary',
  onClick,
  sx = {},
  disabled = false,
  children
}: {
  title: string,
  type?: 'primary' | 'secondary'
  onClick: () => void,
  sx?: any,
  disabled?: boolean
  children?: React.ReactNode
}) {
  return (
    <StyledEngineProvider injectFirst>
      <Button disabled={disabled} sx={{ ...sx }} onClick={onClick} className={`${styles.btn} ${styles[`btn_${type}`]}`}>{title}{children}</Button>
    </StyledEngineProvider>
  )
}

export default CustomButton;