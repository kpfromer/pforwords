import React from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import { Link as ThemeLink, LinkProps } from 'theme-ui';

type Props = LinkProps & Omit<GatsbyLinkProps<any>, 'ref'>;

export const Link: React.FC<Props> = ({ children, ...rest }) => (
  <ThemeLink as={GatsbyLink} {...rest}>
    {children}
  </ThemeLink>
);
