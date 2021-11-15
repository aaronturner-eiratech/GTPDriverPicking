import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import useStyles from './PageContainerStyles';

/**
 * MUI Container with fixed padding to be used across all pages
 *
 * @component
 * @prop {string}       id            page ID
 * @prop {array,object} children      nodes to be displayed on a page
 *
 * @example
 *
 * return (
 *   <PageContainer id="Sku">
 *     <div>Page Content</div>
 *   </PageContainer>
 * )
 */
export default function PageContainer(props) {
  const classes = useStyles();
  const { id, children } = props;

  return (
    <Container
      maxWidth="lg"
      className={classes.pageContainer}
      id={id}
    >
      {children}
    </Container>
  );
}

PageContainer.defaultProps = {
  id: '',
};

PageContainer.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
