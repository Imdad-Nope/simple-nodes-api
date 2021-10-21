const express = require('express')
const cors = require('cors')
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('My first node is sent.Ok i am ready')
});


const users = [
    { id: 0, name: 'afrin', email: 'afrin@gamil.com', phone: '0145544558' },

    { id: 1, name: 'raqul', email: 'raqul@gamil.com', phone: '0145544558' },

    { id: 2, name: 'kabiya', email: 'kabiya@gamil.com', phone: '0145544558' },

    { id: 3, name: 'srabony', email: 'srabony@gamil.com', phone: '0145544558' },

    { id: 4, name: 'samira', email: 'samira@gamil.com', phone: '0145544558' },

    { id: 5, name: 'souad', email: 'souad@gamil.com', phone: '0145544558' },
]


app.get('/users', (req, res) => {
    // using Query parmametre.
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else {
        res.send(users)
    }

    // using Post METHOD.
    app.post('/users', (req, res) => {
        const newUsers = req.body;
        newUsers.id = users.length;
        users.push(newUsers);
        console.log('hitting the post', req.body)
        // res.send('inside post')
        res.json(newUsers)
    })


});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)

})

app.listen(port, () => {
    console.log('listening to port', port)
})