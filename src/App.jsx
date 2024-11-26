import Hello from "./components/Hello.jsx";

const App = () => {
    const numbers = [1,2,3,4]
    return (
    <div>
        {numbers.map((elmenent)=>(
            <ul key={Math.random()}>
                <li>Ismi : {elmenent}</li>
                <Hello/>
            </ul>
        ))}
    </div>
)
}

export default App
