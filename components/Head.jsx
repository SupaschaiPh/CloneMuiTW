import { IconButton, Tab, Tabs, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function Head(props) {
  const [indexTab, setIndexTab] = [props.indexTab, props.setIndexTab];
  return (
    <div className="border-b border-gray-100 w-full sticky top-0 bg-white/80 z-50 backdrop-blur	">
      <div className="flex  p-3 items-center">
        {props.leftIcon ? <IconButton color="secondary">{props.leftIcon}</IconButton> : ''}
        <h6 className="text-black font-bold text-xl w-11/12">{props.name}</h6>
        {props.icon ? (<div className="justify-self-end w-1/12"><IconButton color="secondary">{props.icon}</IconButton></div>) : ''}
      </div>
      {props.tabs ? (
        <Tabs
          variant="fullWidth"
          textColor="secondary"
          value={indexTab}
          onChange={(e, newVal) => {
            setIndexTab(newVal);
          }}
          className="text-black  w-full"
        >
          {props.tabs.map((tab, index) => (
            <Tab
              value={index}
              key={'t' + tab}
              sx={{ color: 'black' }}
              label={tab}
            ></Tab>
          ))}
        </Tabs>
      ) : (
        ''
      )}
    </div>
  );
}
