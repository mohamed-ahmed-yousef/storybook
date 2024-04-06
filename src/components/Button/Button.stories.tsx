import Button from "./Button";

export default {
    title: 'Form/Button',
    component: Button,
    args: {
        variant: 'primary',
    },
}

export const Primary = () => <Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">Secondary</Button>
export const Success = () => <Button variant="success">Success</Button>
export const Danger = () => <Button variant="danger">Danger</Button>

export const PrimaryA = {
    args: {
        children: 'Primary Args',
    }
}

export const LongPrimaryA = {
    args: {
        ...PrimaryA.args,
        children: 'Long Primary Args',
    }
}

