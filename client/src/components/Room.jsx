import React from 'react'

const Room = ({ username, setUsername, room, setRoom, setChatScreen, socket }) => {

    const sendRoom = () => {
        socket.emit('room', room)
        setChatScreen(true)
    }
    return (
        <div className='flex items-center justify-center h-full'>
            <div className='w-1/3 h-[300px] bg-indigo-600 flex flex-col gap-y-4 p-3 rounded-lg'>
                <h1 className='font-bold text-2xl text-center my-4'>WELCOME TO CHAT</h1>
                <input value={username} onChange={(e) => setUsername(e.target.value)}
                    className='h-12 rounded-xl p-3 outline-none' type="text" placeholder='Username' />
                <input value={room} onChange={(e) => setRoom(e.target.value)}
                    className='h-12 rounded-xl p-3 outline-none' type="text" placeholder='Room' />
                <div onClick={sendRoom} className='bg-indigo-900 text-white tracking-wider h-12 pt-2 text-xl text-center rounded-xl cursor-pointer 
                hover:opacity-80'>CHAT!!!
                </div>
            </div>
        </div>
    )
}

export default Room