import { NextPage } from 'next'
import React, { Fragment, ReactElement, ReactNode, useEffect, useState, Dispatch, SetStateAction } from 'react'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import SendIcon from '@mui/icons-material/Send'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import ListItemIconCustom from '../../components/list-item-icon-custom/ListItemIconCustom'
import { listVerticalItem } from 'src/configs/layout'

type TProps = { open: boolean }
interface ListItem {
  title: string
  path: string
  Icon: ReactElement | null
  children?: ListItem[]
}

type TListItems = {
  items: ListItem[]
  level: number
  openItems: { [key: string]: boolean }
  setOpenItems: Dispatch<SetStateAction<{ [key: string]: boolean }>>
  disabled: boolean
}
const RecursiveListItems: NextPage<TListItems> = ({ items, level, disabled, openItems, setOpenItems }) => {
  const handleClick = (title: string) => {
    if (!disabled) {
      setOpenItems(prev => ({ ...prev, [title]: !prev[title] }))
    }
  }
  return (
    <>
      {items?.map((item: any) => {
        return (
          <Fragment key={item.title}>
            <ListItemButton
              sx={{ pl: level * 5 }}
              onClick={() => {
                if (item.children) handleClick(item.title)
              }}
            >
              <ListItemIconCustom>{item.Icon}</ListItemIconCustom>
              {!disabled && <ListItemText primary={item.title} />}
              {item.children && item.children.length > 0 && (
                <>{openItems[item.title] ? <ExpandLess /> : <ExpandMore />}</>
              )}
            </ListItemButton>
            {item.children && item.children.length > 0 && (
              <>
                <Collapse in={openItems[item.title]} timeout='auto' unmountOnExit>
                  <RecursiveListItems
                    items={item.children}
                    level={level + 1}
                    openItems={openItems}
                    setOpenItems={setOpenItems}
                    disabled={disabled}
                  />
                </Collapse>
              </>
            )}
          </Fragment>
        )
      })}
    </>
  )
}

const ListVerticalLayout: NextPage<TProps> = ({ open }) => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    if (!open) {
      setOpenItems({})
    }
  }, [open])
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component='nav'
      aria-labelledby='nested-list-subheader'
      //   subheader={
      //     <ListSubheader component='div' id='nested-list-subheader'>
      //       Nested List Items
      //     </ListSubheader>
      //   }
    >
      <RecursiveListItems
        items={listVerticalItem}
        level={1}
        openItems={openItems}
        setOpenItems={setOpenItems}
        disabled={!open}
      />
    </List>
  )
}

export default ListVerticalLayout
