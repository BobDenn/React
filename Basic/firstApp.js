function MyButton() {
    return (
        <button>
            I'm a button
        </button>
    );
}

export default function myApp(){
    return (
        <div>
            <h1>Welcome to my App</h1>
            <MyButton />
        </div>
    );
}