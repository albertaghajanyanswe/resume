import React, { FC } from 'react';
import { Box, Tooltip, IconButton, FormLabel } from '@mui/material';
import InfoSvg from '../../../../assets/info.svg';

import { muiStyles } from './styles';

interface iProps {
  title: string;
  helperTooltip?: string
  sxLabel?: any;
  sx?: any;
  sxTooltip?: any;
}
function FormFieldTitle(
  { title,
    helperTooltip = '',
    sxLabel = {},
    sx = {},
    sxTooltip = {},
  }: {
    title: string;
    helperTooltip?: string
    sxLabel?: any;
    sx?: any;
    sxTooltip?: any;
  }
  ) {

  return (
    <Box component="div" sx={{...muiStyles.titleBlock, ...sx}}>
      <FormLabel sx={{...muiStyles.title, ...sxLabel}}> {title} </FormLabel>
      {helperTooltip &&
        <Tooltip PopperProps={{ sx: {...muiStyles.tooltip, ...sxTooltip} }} title={helperTooltip}>
          <IconButton sx={{ display: 'flex', ml: '4px', p: 0 }} disableRipple>
            <InfoSvg />
          </IconButton>
        </Tooltip>
      }
    </Box>
  );
}

export default FormFieldTitle;