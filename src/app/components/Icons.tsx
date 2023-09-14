type IconProps = JSX.IntrinsicElements['svg'] & {
    direction?: 'up' | 'right' | 'down' | 'left';
    filled?: boolean;
};

function Icon({
    children,
    className,
    fill = 'currentColor',
    width,
    stroke,
    filled,
    ...props
}: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            {...props}
            fill={fill}
            stroke={stroke}
            className={`${className} w-5 h-5`}
        >
            {children}
        </svg>
    );
}

export function IconArrow({ direction = 'right' }: IconProps) {
    let rotate;

    switch (direction) {
        case 'right':
            rotate = 'rotate-0';
            break;
        case 'left':
            rotate = 'rotate-180';
            break;
        case 'up':
            rotate = '-rotate-90';
            break;
        case 'down':
            rotate = 'rotate-90';
            break;
        default:
            rotate = 'rotate-0';
    }

    return (
        <Icon className={`w-5 h-5 ${rotate}`}>
            <title>Arrow</title>
            <path d="M7 3L14 10L7 17" strokeWidth="1.25" />
        </Icon>
    );
}

export function IconClose(props: IconProps) {
    return (
        <Icon {...props} stroke={props.stroke || 'currentColor'}>
            <title>Close</title>
            <line
                x1="4.44194"
                y1="4.30806"
                x2="15.7556"
                y2="15.6218"
                strokeWidth="1.25"
            />
            <line
                y1="-0.625"
                x2="16"
                y2="-0.625"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 16 4.75)"
                strokeWidth="1.25"
            />
        </Icon>
    );
}

export function IconMenu(props: IconProps) {
    return (
        <Icon {...props} stroke={props.stroke || 'currentColor'}>
            <svg width={props.width || "100%"} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13H12" stroke={props.stroke} strokeWidth="2" strokeLinecap="round" />
                <path d="M1 7H15" stroke={props.stroke} strokeWidth="2" strokeLinecap="round" />
                <path d="M1 1H18" stroke={props.stroke} strokeWidth="2" strokeLinecap="round" />
            </svg>
        </Icon>
    )
}