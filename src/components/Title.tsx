import React from "react"
import { Heading, HeadingProps, Box } from "rebass"

export const Title: React.FC<HeadingProps> = ({ children, sx, ...rest }) => (
  // todo: fix typing
  <Box textAlign="center" my={4}>
    <Heading
      fontSize={5}
      {...(rest as any)}
      display="inline-block"
      sx={{
        ...sx,
        px: "30px",
        position: "relative",
        "&:before": {
          content: "''",
          position: "absolute",
          left: 0,
          top: "50%",
          mt: "-2px",
          width: "20px",
          height: "4px",
          borderTop: "1px solid #c4c4c4",
          borderBottom: "1px solid #c4c4c4",
        },
        "&:after": {
          content: "''",
          position: "absolute",
          left: "auto",
          right: "0",
          top: "50%",
          mt: "-2px",
          width: "20px",
          height: "4px",
          borderTop: "1px solid #c4c4c4",
          borderBottom: "1px solid #c4c4c4",
        },
      }}
    >
      {children}
    </Heading>
  </Box>
)
