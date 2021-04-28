app.post('/users', async (req, res) => {
    // req.body contains an Object with firstName, lastName, email
    const { firstName, lastName, email } = req.body;
    const newUser = await User.create({
        firstName,
        lastName,
        email
    });
    
    // Send back the new user's ID in the response:
    res.json({
        id: newUser.id
    });
})

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});