import React from 'react'
import { Image, ImageProps } from 'react-native'

import useImageCaching from '../hooks/use-image-caching'

type CacheImageProps = Omit<ImageProps, 'source'> & {
  source: string
}

const CacheImage = ({
  source: uri,
  ...props
}: CacheImageProps): JSX.Element | null => {
  const { source } = useImageCaching(uri)

  return source ? <Image source={source} {...props} /> : null
}

export default CacheImage
