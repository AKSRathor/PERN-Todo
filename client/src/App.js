import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"
import ListViewTD from './Components/ListViewTD';
import { List } from '@mui/material';
import CreatePost from './Components/CreatePost';


function App() {
  const [listOfPosts, setListOfPosts] = useState([])

  useEffect(() => {

    axios.get("http://localhost:5000/posts").then((res) => {
      // console.log(res.data)
      setListOfPosts(res.data)

    })
    return () => {

    }
  }, [])


  return (
    <div className="App">
      <CreatePost/>
      <h1 style={{textAlign:"center", paddingTop:"5%"}}>Posts</h1>
      <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper', margin:"auto", paddingTop:"5%" }}>
        {listOfPosts.map((i) => {
          return <ListViewTD title = {i.title} desc= {i.postText} key = {i.id} />
        })}
      </List>


    </div>
  );
}

export default App;
