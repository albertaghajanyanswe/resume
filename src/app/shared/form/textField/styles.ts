const muiStyles = {
  textField: {
    '& .MuiOutlinedInput-root': {
      p: 0,
    }
  },
  textFieldPadding: {
    '& .MuiOutlinedInput-root': {
      pr: 2,
    }
  },
  textArea: {
    '& .MuiOutlinedInput-input': {
      pt: '12px',
      pb: '12px',
      pl: 2,
      pr: 2,
    }
  },
  fieldContainer: {
    mt: '20px',
    mb: 0
  },
  titleBlock: {
    mb: 1,
    display: 'flex',
    maxHeight: '16px'
  },
  title: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 600,
    color: 'primary.textColor3'
  },
  descriptionBlock: {
    mt: '2px'
  },
  descriptionText: {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 400,
    color: 'primary.textColor3'
  },
  inputWithStartIcon: {
    '& > .MuiInputBase-input': {
      p: '9.95px 16px 9.95px 8px',
    }
  },
  startIconSx: {
    mr: 0,
    ml: '12px'
  },
}
export { muiStyles }