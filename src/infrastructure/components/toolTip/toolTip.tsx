import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { TooltipProps } from './tooltipModal';

const CustomTooltip: React.FC<TooltipProps> = ({ title, children, id }) => (
  <Tooltip title={title} id={id}>
    {children}
  </Tooltip>
);

export default CustomTooltip;
