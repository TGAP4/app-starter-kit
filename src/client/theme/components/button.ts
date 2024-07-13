import {theme as chakraTheme} from '@chakra-ui/react'


const { Button } = chakraTheme.components

export default  {
  ...Button,
  defaultProps: {
    ...Button.defaultProps,
    colorScheme: 'blue'
  },
}