
export default function Banner() {
    let style = {
        width: "50vw",
        maxWidth: "689px",
        height: '10vw',
        maxHeight: '182px',
        borderRadius: '0.5rem',
        overflow: "hidden"
    }
    let imgStyle = {
        width: "100%",
        height: '100%',
        objectFit: "cover"
    }
    return (
        <div style={style}>
            <img style={imgStyle} src="img.png" alt="" />
        </div>
    )
}