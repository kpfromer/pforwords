import React from "react"
import { Flex, Text, Box, BoxProps } from "rebass"
import {
  FacebookShareCount,
  PinterestShareCount,
  RedditShareCount,
  PinterestShareButton,
} from "react-share"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
} from "react-share"
import { FaFacebookF, FaPinterestP, FaRedditAlien } from "react-icons/fa"
import { IconContext } from "react-icons"

const ShareButton = ({ color, icon, children, ...rest }) => (
  <Box
    {...rest}
    sx={{
      display: "inline-block",
      color,
      px: 3,
      py: 2,
      borderRadius: 9999,
      borderColor: color,
      borderStyle: "solid",
      borderWidth: "2px",
      "&:hover": {
        bg: color,
        color: "white",
      },
      ...rest.sx,
    }}
  >
    <Box my="auto" sx={{ display: "inline-block" }} mr={2}>
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        {icon}
      </IconContext.Provider>
    </Box>
    {children}
  </Box>
)

interface Props {
  shareUrl: string
  imageUrl?: string
}

export const Share: React.FC<Props & BoxProps> = ({
  shareUrl,
  imageUrl,
  ...rest
}) => {
  return (
    // @ts-ignore
    <Box {...rest}>
      {/* todo: counts */}
      <Box>
        <FacebookShareButton url={shareUrl}>
          <ShareButton icon={<FaFacebookF />} color="#3b5998">
            Facebook
            <FacebookShareCount url={shareUrl}>
              {shareCount => <Text>{shareCount}</Text>}
            </FacebookShareCount>
          </ShareButton>
        </FacebookShareButton>

        {imageUrl && (
          <PinterestShareButton url={shareUrl} media={imageUrl}>
            <ShareButton icon={<FaPinterestP />} color="#BD081C" ml={2}>
              Pinterest
            </ShareButton>
          </PinterestShareButton>
        )}

        {/* <PinterestShareCount url={shareUrl}>
          {shareCount => <Text>{shareCount}</Text>}
        </PinterestShareCount> */}

        <RedditShareButton url={shareUrl}>
          <ShareButton icon={<FaRedditAlien />} color="#ff4500" ml={2}>
            Reddit
          </ShareButton>
        </RedditShareButton>

        <RedditShareCount url={shareUrl}>
          {shareCount => <Text>{shareCount}</Text>}
        </RedditShareCount>
      </Box>
    </Box>
  )
}
