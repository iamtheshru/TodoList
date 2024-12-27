import { useState } from "react";

function TodoList() {
    const [inp, setInp] = useState("");
    const [data, setdata] = useState([{ name: "shraddha", done: false }])
    const handalchange = (e) => {
        setInp(e.target.value)
    }
    const handaldata = (e) => {
        e.preventDefault();
        console.log(...inp);
        setdata([...data, { "name": inp, done: false }])
        setdata([...data, { "name": inp, done: false }])
        setInp("");
    }

    return (<>
        <div className="container w-100 h-screen flex justify-center items-center bg-slate-200">
            <div className="row ">
                <div className="col shadow-2xl bg-white p-10 rounded-2xl  mt-5 " >
                    <h2 className="text-center text-4xl font-bold mb-10 text-blue-500 uppercase">To-do List</h2>
                    <form onSubmit={handaldata} className="flex items-center">
                        <input type="text" value={inp} onChange={handalchange} className=" border-2 rounded w-80 h-12 ps-2 placeholder:text-xl text-2xl" placeholder="Text" />
                        <button type="submit" className=" bg-blue-400 w-16 h-12 rounded mx-1 text-white text-lg  font-bold  hover:bg-blue-700">Add</button>
                    </form>
                    <ul className="mt-7 overflow-y-auto" style={{ maxHeight: "28rem" }} >{data.map((item, index) => {
                        return (
                            <li key={index} className="flex justify-between items-center border my-2 p-1 rounded bg-white shadow" >
                                <span style={{ textDecoration: item.done === true ? "line-through" : "none", }} className="text-xl text-gray-800 capitalize text-left m-2">{item.name}</span>
                                <span>
                                    <button className=" bg-green-700 w-16 h-8 rounded mx-1 text-white text-lg  font-bold" onClick={() => setdata(data.map((item, i) => i === index ? { ...item, done: true } : item))}>Done</button>
                                    <button className=" bg-amber-400 w-16 h-8 rounded mx-1 text-white text-lg  font-bold">Edit</button>
                                    <button className=" bg-red-600 w-16 h-8 rounded mx-1 text-white text-lg  font-bold">Delete</button>
                                </span>

                            </li>)
                    })}
                    </ul >
                </div>
            </div>
        </div>

        {/* <p>{inp}</p> */}
        {/*  */}


    </>);
}

export default TodoList;