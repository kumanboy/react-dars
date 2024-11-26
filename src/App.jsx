const App = () => {    return (
    <div>
        <User name={"Husan"} age={20} />
    </div>
)
}

const User = ({name,age}) => {
    return (
        <>
            <h1>My name is {name}</h1>
            <h1>I am  {age} years old</h1>
        </>
    )
}


export default App
