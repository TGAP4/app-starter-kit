import { makeSchema, queryField } from 'nexus'
 
const helloField = queryField('hello', {
  type: 'String',
  resolve: () => 'world'
})
 
export const schema = makeSchema({ types: [helloField] })