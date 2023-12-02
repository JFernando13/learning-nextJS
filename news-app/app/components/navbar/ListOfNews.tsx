import { Card, CardBody, Grid, Heading, Image, Link, Stack, Text } from "@chakra-ui/react"

interface Props {
  news: TNews[]
}

export function ListOfNews({ news }: Props) {
  return (
    <Grid templateColumns='repeat(auto-fit, minmax(500px, 1fr))' gap={6} px="2rem" pb="3rem">
      {
        news.map(news => (
          <Link key={news.title} href={`${news.url}`}>
            <Card key={news.title}>
              <Image
                alt={news.title}
                src={news.urlToImage ?? "https://www.caspianpolicy.org/no-image.png"}
                aspectRatio={"16/9"}
                borderRadius="lg"
                objectFit='cover'
              />
              <Stack>
                <CardBody>
                  <Heading size="md" noOfLines={3}>{news.title}</Heading>

                  <Text>
                    {news.author} - {news.publishedAt}
                  </Text>
                </CardBody>
              </Stack>
            </Card>
          </Link>
        ))
      }
    </Grid>
  )
}