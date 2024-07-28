import { ReactElement, ReactNode } from 'react'

import PersonIcon from '@mui/icons-material/Person'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'
import MergeTypeIcon from '@mui/icons-material/MergeType';

interface ListItem {
  title: string
  path: string
  Icon: ReactElement | null
  children?: ListItem[]
}

export const listVerticalItem: ListItem[] = [
  {
    title: 'System',
    path: '',
    Icon: <SettingsSuggestIcon />,
    children: [
      {
        title: 'Product',
        Icon: <ProductionQuantityLimitsIcon />,
        path: '/product',
        children: [{ title: 'Product type', path: '/product-type', Icon: <MergeTypeIcon /> }]
      },
      {
        title: 'User',
        path: '/user',
        Icon: <PersonIcon />
      }
    ]
  }
]
