/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext/TabContext';
import TabList from '@mui/lab/TabList/TabList';
import TabPanel from '@mui/lab/TabPanel/TabPanel';
import './tabs.scss';
import { CustomTabsProps } from './tabsModal';


const CustomTabs: React.FC<CustomTabsProps> = ({ data }) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {data &&
              data.length > 0 &&
              data.map((value: any, index: any) => (
                <Tab
                  key={index}
                  label={value.label}
                  value={value.value}
                  disabled={value.disabled}
                  icon={value.icon}
                  iconPosition={value.iconPosition}
                />
              ))}
          </TabList>
        </Box>
        {data &&
          data.length > 0 &&
          data.map((value: any, index: any) => (
            <TabPanel key={index} value={value.value}>
              {value.component}
            </TabPanel>
          ))}
      </TabContext>
    </Box>
  );
};

export default CustomTabs;
