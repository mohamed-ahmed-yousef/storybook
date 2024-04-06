import Input from "./input";

export default {
    title: "Form/Input",
    component: Input,
    
}
export const Large = () => <Input variant="large" placeholder="Large Input" />
export const Medium = () => <Input variant="medium" placeholder="Medium Input" />
export const Small = () => <Input variant="small" placeholder="Small Input" />

Small.storyName="Small input"