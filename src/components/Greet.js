export default function Greet({ name }) {
    let spanStyle = {
        opacity: 0.7,
        fontWeight: 400,
        fontSize: "1rem"
    }
    let style = {
        fontWeight: 600,
        fontSize: '1.5rem',
        textAlign: 'left'
    }
    return (
        <h2 style={style}>Hi 👋 {name}, <span style={spanStyle}>here's your site overview</span> </h2>
    )
} 