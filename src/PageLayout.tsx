import { Grid, Box } from 'grommet';
import React from 'react'

interface PageLayoutProps {
  page: JSX.Element
}

const PageLayout = (props: PageLayoutProps) => {
  return (
    <Grid
      height={{
        height: '100%'
      }}
      rows={['xxsmall', 'auto']}
      columns={['xsmall', 'auto']}
      gap='none'
      areas={[
        { name: 'header', start: [0, 0], end: [1, 0] },
        { name: 'nav', start: [0, 1], end: [0, 1] },
        { name: 'main', start: [1, 1], end: [1, 1] },
      ]}
    >
      <Box gridArea='header' background='brand' />
      <Box gridArea='nav' background='secondary' />
      <Box gridArea='main' background='background'>
        {props.page}
      </Box>
    </Grid>
  )
};

export default PageLayout