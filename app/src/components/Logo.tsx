export default function Logo({height, ...props}: any) {
    height = height || '100%'
    return <img src={props.black ? "./compass.png" : "./compass.png"} height={height} {...props} />
}