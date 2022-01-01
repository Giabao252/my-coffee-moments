import users from "../models/users.js";

export const register = async (req, res) => {
    const { email, username, password } = req.body;
    const NewUser = new users({ email, username, password });

    try {
        await NewUser.save()
        res.status(200).json(NewUser); //post method
    } catch (err) {
        res.status(400).json(err.message)
    }
}

export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const AccountAuth = await users.find();
        res.status(200).json(AccountAuth);
    } catch (err) {
        res.status(404).json(err.message)
    }
}