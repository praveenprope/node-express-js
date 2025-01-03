import express from 'express';
const app = express();

app.get('/',(req, res)=>{
    res.send('Server is ready')
});

app.get('/api/jokes',(req,res)=>{
    res.send(
        [
            {
              "id": 1,
              "category": "Technology",
              "joke": "Why do programmers prefer dark mode? Because light attracts bugs!"
            },
            {
              "id": 2,
              "category": "Relationships",
              "joke": "Why did the girl break up with the calendar? It had too many dates!"
            },
            {
              "id": 3,
              "category": "Animals",
              "joke": "Why don’t elephants use computers? They're afraid of the mouse!"
            },
            {
              "id": 4,
              "category": "Work",
              "joke": "Why did the developer go broke? Because he used up all his cache!"
            },
            {
              "id": 5,
              "category": "School",
              "joke": "Why was the math book sad? Because it had too many problems!"
            }
          ]
          
    )
})

const Port = process.env.PORT || 3000;

app.listen(Port,()=>{
    console.log(`Server is start ${Port}`)
})