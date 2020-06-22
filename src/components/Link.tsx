import React from "react"
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby"
import { Link as RebassLink } from "rebass"

type Props = { variant?: string } & Omit<GatsbyLinkProps<any>, "ref">

export const Link: React.FC<Props> = ({ children, ...rest }) => (
  // @ts-ignore
  <RebassLink as={GatsbyLink} {...rest}>
    {children}
  </RebassLink>
)
