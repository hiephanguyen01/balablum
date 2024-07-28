import { Box, styled, BoxProps } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'

type TProps = { children: React.ReactNode }
const BlankLayoutWrapper = styled(Box)<BoxProps>(({ theme }) => ({ height: '100vh' }))
const BlankLayout: NextPage<TProps> = ({ children }) => {
  return (
    <BlankLayoutWrapper>
      <Box sx={{ overflow: 'hidden', height: '100vh' }}>{children}</Box>
    </BlankLayoutWrapper>
  )
}

export default BlankLayout
