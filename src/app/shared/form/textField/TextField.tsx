import React, { useCallback } from 'react';
import { InputAdornment, TextField, Box, Typography } from '@mui/material';
import { Path, useController, FieldValues } from 'react-hook-form';
import Tooltip from '@mui/material/Tooltip';
import InputError from '../../../../assets/input-error.svg';
import FormFieldTitle from '../fieldTitle/FieldTitle';
import { muiStyles } from './styles';

interface iFormTextField<T> {
  name: Path<T>;
  placeholder: string;
  label: string;
  rules?: any;
  variant?: 'filled' | 'outlined' | 'standard';
  type?: string
  sx?: any;
  sxContainer?: any;
  sxDescription?: any;
  sxTitle?: any;
  size?: 'small' | 'medium';
  withoutLabel?: boolean;
  multiline?: boolean;
  rows?: number;
  startIcon?: any;
  endIcon?: any;
  autoComplete?: string;
  title?: string;
  helperTooltip?: string;
  description?: string | React.ReactNode;
  borderRadius?: number;
  disabled?: boolean;
  showInputErrorIcon?: boolean;
  sxTooltip?: any;
  defaultValue?: string;
  insideSpan?: boolean;
  pattern?: string | RegExp;
}

const FormTextField = <T extends FieldValues>({
  rules,
  name,
  placeholder,
  label,
  autoComplete = '',
  sx = {},
  sxContainer = {},
  sxDescription = {},
  sxTitle = {},
  variant = 'outlined',
  type = 'text',
  size = 'medium',
  withoutLabel = true,
  multiline = false,
  rows = 3,
  startIcon: StartIcon = null,
  endIcon: EndIcon = null,
  title = '',
  helperTooltip = '',
  description = '',
  borderRadius = 4,
  disabled = false,
  showInputErrorIcon = true,
  sxTooltip = {},
  defaultValue = '',
  insideSpan = false,
  pattern,
}: iFormTextField<T>) => {
  const { field: { onChange, value, ref }, fieldState: { error } } = useController<T>({
    rules,
    name
  })

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => {
    if (!pattern || e.target.value.match(new RegExp(pattern))) {
      onChange(e)
    } else {
      return false
    }
  }, [pattern, onChange])

  const sxStyle = (hasError: boolean) => {
    return {
      ...muiStyles.textField,
      '& > .MuiOutlinedInput-root': {
        ...((hasError) && { pr: 2 }),
        ...(multiline && muiStyles.textArea),
        ...sx,
        ...((StartIcon && muiStyles.inputWithStartIcon)),
        borderRadius: `${borderRadius}px`,
      },
    }
  };

  return (
    <Box component={insideSpan ? "span" : "div"} sx={{ ...muiStyles.fieldContainer, ...sxContainer, ...(insideSpan ? { lineHeight: size === 'small' ? '40px' : '48px' } : {}) }}>
      {title && !insideSpan && <FormFieldTitle sxLabel={sxTitle} title={title} helperTooltip={helperTooltip} sxTooltip={sxTooltip} />}
      <TextField
        id={name}
        name={name}
        disabled={disabled}
        onChange={handleChange}
        value={defaultValue || value || ''}
        fullWidth
        error={Boolean(error?.message)}
        label={withoutLabel ? "" : label}
        {...(withoutLabel && { InputLabelProps: { shrink: false } })}
        variant={variant}
        placeholder={placeholder}
        {...(type === 'datetime-local' && { InputLabelProps: { shrink: true } })}
        sx={{ ...sxStyle(Boolean(error?.message)), ...(insideSpan ? { width: 'auto' } : {}) }}
        size={size}
        type={type}
        autoComplete={autoComplete}
        inputRef={ref}
        multiline={multiline}
        rows={rows}
        inputProps={{
          "data-testid": name,
        }}
        InputProps={{
          ...(StartIcon && { startAdornment: (<InputAdornment position="start" sx={muiStyles.startIconSx}> <StartIcon /> </InputAdornment>) }),
          ...(EndIcon && { endAdornment: (<InputAdornment sx={{ mr: 2 }} position="start"> {typeof EndIcon === 'object' ? EndIcon : <EndIcon />} </InputAdornment>) }),
          ...((Boolean(error?.message) || type === 'password') && {
            endAdornment:
              <>
                {showInputErrorIcon && Boolean(error?.message) && <Tooltip sx={{ zIndex: 1001 }} title={error?.message as string}>
                  <Box sx={{ display: 'flex', cursor: 'pointer' }}>
                    <InputError />
                  </Box>
                </Tooltip>}
              </>
          }),
        }}
      />
      {!insideSpan && description && <Box sx={{ ...muiStyles.descriptionBlock, ...sxDescription }}>
        {typeof description === 'string' ?
          (<Typography sx={muiStyles.descriptionText}>{description}</Typography>) :
          <>{description}</>
        }
      </Box>}
    </Box >
  );
};

export default FormTextField;