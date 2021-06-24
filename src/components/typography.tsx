import React from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'

type TypographyProps = TextProps & {
  children: string
}

const H1 = ({ style, ...props }: TypographyProps): JSX.Element => {
  return <Text style={[styles.h1, style]} {...props} />
}

const H2 = ({ style, ...props }: TypographyProps): JSX.Element => {
  return <Text style={[styles.h2, style]} {...props} />
}

const H3 = ({ style, ...props }: TypographyProps): JSX.Element => {
  return <Text style={[styles.h3, style]} {...props} />
}

const H4 = ({ style, ...props }: TypographyProps): JSX.Element => {
  return <Text style={[styles.h4, style]} {...props} />
}

const H5 = ({ style, ...props }: TypographyProps): JSX.Element => {
  return <Text style={[styles.h5, style]} {...props} />
}

const P = ({ style, ...props }: TypographyProps): JSX.Element => {
  return <Text style={[styles.p, style]} {...props} />
}

const Small = ({ style, ...props }: TypographyProps): JSX.Element => {
  return <Text style={[styles.small, style]} {...props} />
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 49,
    lineHeight: 61,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 39,
    lineHeight: 49,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 31,
    lineHeight: 39,
    fontWeight: 'bold',
  },
  h4: {
    fontSize: 25,
    lineHeight: 31,
    fontWeight: 'bold',
  },
  h5: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
  },
  p: {
    fontSize: 16,
    lineHeight: 24,
  },
  small: {
    fontSize: 13,
    lineHeight: 19.5,
  },
})

const Typography = {
  H1,
  H2,
  H3,
  H4,
  H5,
  P,
  Small,
}

export default Typography
