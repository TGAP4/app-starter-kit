import {
  extendBaseTheme,
} from '@chakra-ui/react'
import styles from './styles'
import Button from './components/button'
import Heading from './components/heading' 
import Text from './components/text' 


const theme = extendBaseTheme({
  ...styles,
  components: {
    Button,
    Heading,
    Text
  },
})

export default theme