const muiStyles = {
  titleBlock: {
    mb: 1,
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    pl: '4px'
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: '16px',
    lineHeight: '16px',
    fontWeight: 500,
    color: 'var(--text-color)',
    '&.Mui-focused': {
      color: 'var(--text-color)'
    },
    cursor: 'text'
  },
  tooltip: {
    fontFamily: 'Poppins',
    maxWidth: '250px',
    width: '180px',
    '& > .MuiTooltip-tooltip': {
      maxWidth: '250px',
      borderRadius: '8px',
      p: '8px 12px',
      display: 'flex',
      textAlign: 'start',
      fontSize: '14px',
      lineHeight: '16px',
      mt: '4px!important',
      backgroundColor: 'var(--main-color)',
      color: 'var(--second-bg-color)',
      fontWeight: '500'
    }
  },
}

export { muiStyles };