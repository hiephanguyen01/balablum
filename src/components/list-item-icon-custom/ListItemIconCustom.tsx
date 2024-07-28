import { ListItemIcon } from '@mui/material'
import { NextPage } from 'next'
import React, { ReactNode } from 'react'

type Tprops = {
  children: ReactNode
}
const ListItemIconCustom: NextPage<Tprops> = ({ children }) => {
  return <ListItemIcon sx={{ marginRight: '20px' }}>{children}</ListItemIcon>
}

export default ListItemIconCustom
