import React from 'react'
import Card from "../components/Card";

const Home = () => {
    return (
        <Card bg={"#fff"} borderWidth={1} borderColor={"#121212"} padding={[15, 200, 8, 350]} radius={150} w={"fit-content"}>
        <div style={{ display: 'inline-block' }}>
            Home
        </div>
        </Card>
    )
}

export default Home