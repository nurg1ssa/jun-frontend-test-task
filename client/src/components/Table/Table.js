import React from "react";
import table from "./Table.module.css"
import io from 'socket.io-client'
import { useEffect, useState } from 'react';

const socket = io.connect("http://localhost:3002")

function Table() {
    const [names, setNames] = useState([]);
    useEffect(() => {
        socket.emit('start')
        socket.on("ticker", (data) => {
            setNames(data)
        })
    }, [socket])
    return (
        <div className={table.table}>
            {names.map(horse => <div>{horse.name} distance:{horse.distance}</div>)}
        </div>
    )
}
export default Table;