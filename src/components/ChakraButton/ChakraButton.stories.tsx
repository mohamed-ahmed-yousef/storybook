import { Button } from '@chakra-ui/react'
import {actions, action} from "@storybook/addon-actions"
export default {
    title: 'Chakra/Button',
    component: Button
}

export const Success = () => <Button colorScheme="teal" onClick={action("Clicked")}>Success</Button>
export const Danger = () => <Button colorScheme="red" {...actions("onClick", "onMouseOver")}>Danger</Button>
export const Clicked = (args : {children: string}) => <Button {...args}/>

Clicked.args ={
    children: 'Clicked',
    colorScheme: 'teal',
    onClick: () => console.log("Clicked")
    
}