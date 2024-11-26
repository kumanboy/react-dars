const App = () => {
    const odamlar = [
        {
            id:1,
            name: 'John Doe',
            age:22
        },
        {
            id:2,
            name: 'James KOok',
            age:23
        }
    ]
    return (
    <div>
        {odamlar.map((qulpinisa)=>(
            <ul key={qulpinisa.id}>
                <li>Ismi : {qulpinisa.name}</li>
                <li>Yoshi : {qulpinisa.age}</li>
            </ul>
        ))}
    </div>
)
}

export default App
