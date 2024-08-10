import { Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"


function Post({ tags, id, title, content, createdAt }) {
  return (
    <Card as={Link} href={`/post/${id}`}>
      <CardHeader paddingBottom={0}>
        <Heading noOfLines={2} mb={2} fontSize='lg'>
          {title}
        </Heading>
        <Text fontSize='sm' color='gray.500'>
          {createdAt?.toDate().toDateString()}
        </Text>
      </CardHeader>
      <CardBody>
        <Text noOfLines={3}>{content}</Text>
      </CardBody>
      <CardFooter color='blue.600'>
        {tags?.map(tag => `#${tag} `)}
      </CardFooter>
    </Card>
  )
}

export default Post