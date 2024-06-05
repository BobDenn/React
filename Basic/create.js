// React 组件必须以大写字母开头，而 HTML 标签则必须是小写字母
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