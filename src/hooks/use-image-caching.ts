import { useEffect, useState } from 'react'
import { ImageSourcePropType } from 'react-native'
import * as RNFS from 'react-native-fs'
// @ts-ignore
import * as shorthash from 'shorthash'

const useImageCaching = (remoteUri: string) => {
  const [source, setSource] = useState<ImageSourcePropType | null>(null)

  useEffect(() => {
    const execute = async () => {
      const name = shorthash.unique(remoteUri)
      const path = `${RNFS.CachesDirectoryPath}${name}`
      const uri = `file:///${path}`

      const imageExists = await RNFS.exists(path)

      if (imageExists) {
        setSource({ uri })
        return
      }

      await RNFS.downloadFile({
        fromUrl: remoteUri,
        toFile: path,
      }).promise

      setSource({ uri })

      return
    }

    execute()
  }, [remoteUri])

  return {
    source,
  }
}

export default useImageCaching
