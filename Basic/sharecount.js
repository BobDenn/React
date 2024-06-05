import { useState } from 'React'

export default function myApp(){
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>不管点击哪个按钮, 点击次数是同步的</h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
        </div>
    );
}

function MyButton({ count, onClick }) {
    return (
        <button onClick={onClick}>
            共计点击了{count}次
        </button>
    );
}