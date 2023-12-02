import { Link, List, ListItem, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import NextLink from "next/link";

const categories = ["business", "entertainment", "general", "health", "science", "sport", "technology"]

export function NavBar() {
  return (
    <nav>
      <List display={"flex"} justifyContent={"center"} gap={10} padding={6}>
        <ListItem>
          <NextLink href="/">All News</NextLink>
        </ListItem>
        <ListItem>
          <Menu isLazy>
            <MenuButton as={"button"}>
              Categories
            </MenuButton>
            <MenuList>
              {categories.map(category => (
                <Link as={NextLink} href={`/${category}`} key={category}>
                  <MenuItem>
                    {category}
                  </MenuItem>
                </Link>
              ))}
            </MenuList>
          </Menu>
        </ListItem>
      </List>
    </nav>
  )
}