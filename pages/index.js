import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Flex,
  Heading,
  Box,
  Card,
  Text,
  Button,
  Image
} from 'rebass/styled-components'
import Head from 'next/head'
import Link from 'next/link'

const Page = styled.div`

`;

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('/static/sweetmenu-background.jpg');
  background-size: cover;
  background-position: top;
  z-index: -1
`;

const FeatureIcon = styled.i`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #fff;
  margin-right: .5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  & svg {
    scale: .75
  }
`;

const Brand = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  cursor: pointer;
`;

const BrandIcon = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(/static/sweetmenu-favicon.png);
  background-size: cover;
  background-position: center;
  margin-right: 8px;
`;

class Index extends Component {

  render() {
    return (
      <Page className="sweetmenu">
        <Head>
          <title>Grow your brunch spot | Sweetmenu</title>
          <link rel="icon" type="image/png" href="/static/sweetmenu-favicon.png"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,.16)',
            zIndex: 1,
          }}
        >
        </div>
        <Box
          display="flex"
          p={[1, 1, "1rem 3rem"]}
          width="100vw"
          flexDirection="row"
          justifyContent="space-between"
          className="sweetmenu__nav"
          sx={{
            position: 'fixed',
            zIndex: 888,
          }}
          >
          <Link href="/">
            <Brand className="sweetmenu__nav--brand">
              <BrandIcon className="sweetmenu__nav--brandIcon" />
              Sweetmenu
            </Brand>
          </Link>
          <Box
            display="flex"
            flexDirection="row nowrap"
            alignItems="center"
          >
            <Text
              fontSize={1}
              color="primary"
              mr=".5rem"
            >
              Questions?
            </Text>
            <a href="mailto:chris@sweetmenu.co">
              <Button
                p=".5rem 1rem"
                fontWeight="bold"
                color="background"
                fontSize={1}
              >
                Email Chris
              </Button></a>
          </Box>
        </Box>
        <Background />
        <Flex
          height="calc(100vh - 96px)"
          width="100vw"
          alignItems="center"
          justifyContent="center"
          sx={{
            position: 'relative',
            zIndex: '8'
          }}
          className="sweetmenu__hero">
          <Heading
            fontSize={[ 4, 5, 6 ]}
            color='primary'
            fontFamily="inherit"
            className="sweetmenu__hero--title">
            Grow your <u>brunch spot</u>
          </Heading>
        </Flex>
        <Flex
          flexDirection={['column', 'column', 'column', 'row']}
          justifyContent="center"
          sx={{
            position: 'relative',
            zIndex: '8'
          }}
        >
          <Box width={[1,1,1/2]} p={[1,2,3]}>
            <Card
              bg="#000"
              color="#fff"
              p="3rem"
              sx={{
                boxShadow: '0 8px 16px -8px rgba(0,0,0,0.50)',
                borderRadius: 4
              }}
              className="sweetmenu__intro--card"
            >
              <Heading
                fontSize={[ 4,5,5 ]}
                mb={1}
                color='primary'
                fontFamily="inherit"
                className="sweetmenu__intro--title">
                Turn <u>browsers</u>
                <br/>
                into <u>diners</u>
              </Heading>
              <Text
                fontSize={[ 2,3,3 ]}
                mb={2}
                className="sweetmenu__intro--caption">
                Engage diners and grow your restaurant with just two lines of code.
              </Text>
              <Flex
                flexDirection="column"
                alignItems="flex-start"
                mb={3}
                className="sweetmenu__intro--features">
                <Box
                  display="inline-flex"
                  flexDirection="row nowrap"
                  alignItems="center"
                  bg="#4a4a4a"
                  color="primary"
                  p=".5rem 1rem .5rem .5rem"
                  sx={{
                    borderRadius: "32px"
                  }}
                  mb={1}
                  className="sweetmenu__intro--feature">
                  <FeatureIcon className="sweetmenu__intro--featureIcon">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0z" fill="none"/>
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </FeatureIcon>
                  <Text
                    fontSize={2}
                  >
                    Puts your menu front and center
                  </Text>
                </Box>
                <Box
                  display="inline-flex"
                  flexDirection="row nowrap"
                  alignItems="center"
                  bg="#4a4a4a"
                  color="primary"
                  p=".5rem 1rem .5rem .5rem"
                  sx={{
                    borderRadius: "32px"
                  }}
                  mb={1}
                  className="sweetmenu__intro--feature">
                  <FeatureIcon className="sweetmenu__intro--featureIcon">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0z" fill="none"/>
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </FeatureIcon>
                  <Text
                    fontSize={2}
                  >
                    Integrates with your current site
                  </Text>
                </Box>
                <Box
                  display="inline-flex"
                  flexDirection="row nowrap"
                  alignItems="center"
                  bg="#4a4a4a"
                  color="primary"
                  p=".5rem 1rem .5rem .5rem"
                  sx={{
                    borderRadius: "32px"
                  }}
                  mb={1}
                  className="sweetmenu__intro--feature">
                  <FeatureIcon className="sweetmenu__intro--featureIcon">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0z" fill="none"/>
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </FeatureIcon>
                  <Text
                    fontSize={2}
                  >
                    Complimentary onboarding
                  </Text>
                </Box>
              </Flex>
              <Link href="/demo" passHref>
                <a>
                  <Button
                    color="background"
                    fontWeight="bold"
                    fontSize={2}
                    p="1.5rem 2rem"
                    sx={{
                      cursor: 'pointer'
                    }}
                    className="sweetmenu__intro--button">
                    See Sweetmenu on your site
                  </Button>
                </a>
              </Link>
            </Card>
          </Box>
          <Box
            width={[1,1,1/2]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            className="sweetmenu__demo">
            <Image src="/static/sweetmenu-demo.png" width="392px" />
          </Box>
        </Flex>
      </Page>
    );
  }

}

export default Index;
