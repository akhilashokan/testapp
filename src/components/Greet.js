export default function Greet({ name }) {
    let spanStyle = {
        opacity: 0.7,
        fontWeight: 400,
        fontSize: "0.8em"
    }
    return (
        <h2 style={{ textAlign: "left" }}>Hi 👋 {name}, <span style={spanStyle}>here's your site overview</span> </h2>
    )
} 