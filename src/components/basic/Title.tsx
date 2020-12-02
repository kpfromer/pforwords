import React from 'react';
import { Flex } from 'rebass';
import { Heading, HeadingProps } from 'theme-ui';

export const Title: React.FC<HeadingProps> = ({ children, sx, ...rest }) => (
  // todo: fix typing
  <Flex>
    <Heading
      {...(rest as any)}
      display="inline-block"
      mx="auto"
      sx={{
        ...sx,
        fontSize: 5,
        px: '30px',
        position: 'relative',
        '&:before': {
          content: "''",
          position: 'absolute',
          left: 0,
          top: '50%',
          mt: '-2px',
          width: '20px',
          height: '4px',
          borderTop: '1px solid #c4c4c4',
          borderBottom: '1px solid #c4c4c4',
        },
        '&:after': {
          content: "''",
          position: 'absolute',
          left: 'auto',
          right: '0',
          top: '50%',
          mt: '-2px',
          width: '20px',
          height: '4px',
          borderTop: '1px solid #c4c4c4',
          borderBottom: '1px solid #c4c4c4',
        },
      }}
    >
      {children}
    </Heading>
  </Flex>
);
