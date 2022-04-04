import React from 'react'
import { Grid, Box } from 'grommet';
import { routes } from '../App';
import NavList from './NavList';

interface PageLayoutProps {
  page: JSX.Element
}

const PageLayout = (props: PageLayoutProps) => {
  return (
    <Grid
      height={{
        height: '100%'
      }}
      rows={['auto']}
      columns={['small', 'auto']}
      gap='none'
      areas={[
        { name: 'nav', start: [0, 0], end: [0, 0] },
        { name: 'main', start: [1, 0], end: [1, 0] },
      ]}
    >
      <Box gridArea='nav' background='secondary'>
        <NavList routes={routes} />
      </Box>
      <Box gridArea='main' background='background'>
        {props.page}
      </Box>
    </Grid>
  )
};

export default PageLayout