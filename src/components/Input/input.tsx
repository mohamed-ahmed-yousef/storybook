import "./input.css";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Input({placeholder,  variant, ...rest }: {placeholder: string, variant: string, rest?: any}) {
    return (
        <div>
            <input className={`input ${variant}`} {...rest} placeholder={placeholder} />
        </div>
    )
}