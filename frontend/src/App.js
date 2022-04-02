import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Kanban from './components/Kanban';

export default function SimpleContainer() {
  return (

    <React.Fragment>
      <CssBaseline />
      <Kanban />
    </React.Fragment >
  );
}