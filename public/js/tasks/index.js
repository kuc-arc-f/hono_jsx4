let items = [];
let message = "";
//
function App() {
    const [updatetime, setUpdatetime] = React.useState("");
    React.useEffect(() => {
        (async () => {
            console.log("#start");
            message = "hoge"; 
            updateTimestap();
            /*
            items = [
                {id: 1, title:"t1" },
                {id: 2, title:"t2" },
            ];
            */
        })()
    }, []);
    //
    const updateTimestap = function() {
        const dt = new Date().toString();
        setUpdatetime(dt);
    }
    //
    return (
    <div className="App">
        <h1>Hello React 123</h1>
        <hr />
        <p>updatetime:{updatetime}</p>
        <p>message: {message}</p>
        <hr />
    </div>
    );
};
//
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
);
