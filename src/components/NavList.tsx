import React from 'react'
import { Anchor, Box, InfiniteScroll } from 'grommet';
import { RouteConfig } from '../App';

interface NavListProps {
  routes: Array<RouteConfig>
}

const NavList = (props: NavListProps) => {
  const { routes } = props

  return (
    <Box overflow='auto'>
      <InfiniteScroll items={routes}>
        {(route: RouteConfig) => (
          <Box
            key={route.name}
            align='center'
            height='xsmall'
            flex={false}
            justify='center'>
            <Anchor href={route.path} label={route.name} />
          </Box>
        )}
      </InfiniteScroll>
    </Box>
  )
};

export default NavList