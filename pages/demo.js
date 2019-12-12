import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Heading,
  Flex,
  Card,
  Text,
  Box,
  Button
} from 'rebass/styled-components'
import {
  Label,
  Input
} from '@rebass/forms'
import Head from 'next/head'
import Link from 'next/link'

const Page = styled.div`
  height: 100%;
  min-height: 100vh;
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

class Demo extends Component {

  render() {
    return (
      <Page className="sweetmenu__page">
        <Head>
          <title>Get a demo | Sweetmenu</title>
          <link rel="icon" type="image/png" href="/static/sweetmenu-favicon.png"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
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
              color="background"
              mr=".5rem"
            >
              Questions?
            </Text>
            <a href="mailto:chris@sweetmenu.co">
              <Button
                p=".5rem 1rem"
                fontWeight="bold"
                bg="black"
                color="white"
                fontSize={1}
              >
                Email Chris
              </Button></a>
          </Box>
        </Box>
        <Flex
          flexDirection={['column', 'column', 'column', 'row']}
          alignItems="stretch"
          justifyContent="flex-start"
          height="100%"
          minHeight="100vh"
        >
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            pt={3}
            p={[2,2,3]}
            bg="black"
            className="sweetmenu__aside">
            <Heading
              fontSize={[ 5, 5, 6 ]}
              color='primary'
              fontFamily="inherit"
              mb={2}
              className="sweetmenu__aside--title">
              Seeing is believing
            </Heading>
            <Text
              color="white"
              fontSize={[2,2, 3]}
              className="sweetmenu__aside--caption">
              We could go on and on about how Sweetmenu can transform your restaurant's website. But we don't want you to have to take our word for it.
              <br/>
              <br/>
              So fill out the form and you can see for yourself, risk-free, exactly how revolutionary Sweetmenu is.
            </Text>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            alignItems="stretch"
            p={[1,2,3]}
            className="sweetmenu__form">
            <form method="post" data-netlify="true" data-netlify-honeypot="bot-field" name="demo">
              <input type="hidden" name="form-name" value="demo" />
              <input type="hidden" name="bot-field" />
              <Box
                mb={1}
                className="sweetmenu__form--inputGroup">
                <Label
                  mb={1}
                  mb={1}
                  fontWeight="bold"
                  htmlFor="fullName"
                  className="sweetmenu__form--inputLabel">
                  Full name
                </Label>
                <Input
                  autoFocus
                  required
                  bg="#efefef"
                  sx={{
                    borderRadius: "4px",
                    border: 0
                  }}
                  p={3}
                  placeholder="Thomas Keller"
                  type="text"
                  name="fullName" />
              </Box>
              <Box
                mb={1}
                className="sweetmenu__form--inputGroup">
                <Label
                  mb={1}
                  fontWeight="bold"
                  htmlFor="email"
                  className="sweetmenu__form--inputLabel">
                  Email
                </Label>
                <Input
                  required
                  bg="#efefef"
                  sx={{
                    borderRadius: "4px",
                    border: 0
                  }}
                  p={3}
                  placeholder="tkeller@thefrenchlaundry.com"
                  type="email"
                  name="email" />
              </Box>
              <Box
                mb={1}
                className="sweetmenu__form--inputGroup">
                <Label
                  mb={1}
                  fontWeight="bold"
                  htmlFor="restaurant"
                  className="sweetmenu__form--inputLabel">
                  Restaurant
                </Label>
                <Input
                  required
                  bg="#efefef"
                  sx={{
                    borderRadius: "4px",
                    border: 0
                  }}
                  p={3}
                  placeholder="The French Laundry"
                  type="text"
                  name="restaurant" />
              </Box>
              <Box
                mb={1}
                className="sweetmenu__form--inputGroup">
                <Label
                  mb={1}
                  fontWeight="bold"
                  htmlFor="website"
                  className="sweetmenu__form--inputLabel">
                  Website
                </Label>
                <Input
                  required
                  bg="#efefef"
                  sx={{
                    borderRadius: "4px",
                    border: 0
                  }}
                  p={3}
                  placeholder="https://thefrenchlaundry.com"
                  type="url"
                  name="website" />
              </Box>
              <Box
                className="sweetmenu__form--submitGroup">
                <Input
                  display="inline-flex"
                  bg="black"
                  color="white"
                  width="initial"
                  fontWeight="bold"
                  p="1rem 1.5rem"
                  sx={{
                    float: 'right',
                    borderRadius: '4px'
                  }}
                  type="submit"
                  value="Request demo" className="sweetmenu__form--submit">
                </Input>
              </Box>
            </form>
          </Box>
        </Flex>
      </Page>
    );
  }

}

export default Demo;
