import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Box } from "rebass"

const Header = ({ siteTitle }) => (
  <Box as="header">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/content">Content</Link>
        </li>
      </ul>
    </div>
  </Box>
)

export default Header
