import { useState } from "react";

function Example() {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1)
    }

    const Decrement = () => {

        // setCount(count - 1)
        for (let i = 0; i < count.length; i++) {
            // if (count[i] > 0) {
            setCount(count[i] - 1)
            // break;
            // } else {
            //     console.log("error");
            // }
        }
    }

    return (<>
        <h1 className="text-4xl text-center">{count}</h1>
        <div className="text-center">
            <button onClick={Increment} className="px-5 py-2 rounded-lg bg-green-400 m-2">+</button>
            <button onClick={Decrement} className="px-5 py-2 rounded-lg bg-red-400 m-2 r">-</button>
        </div>
    </>);
}

export default Example;