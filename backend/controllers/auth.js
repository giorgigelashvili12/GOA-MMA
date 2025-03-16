import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/User.js';
dotenv.config();

const signup = async (req, res) => {
    const { username, password } = req.body;
    try {
        const exists = await User.findOne({username});
        if(exists) {
            return res.status(400).json({msg: 'User with this username already exists'})
        }

        const hashed = bcrypt.hashSync(password, 8)
        const user = new User({username, password: hashed});
        await user.save();

        const token = jwt.sign({id: user._id, username: user.username}, process.env.JWT, {expiresIn: '30h'});
        res.cookie('token', token);

        res.json({status: 'success', msg: 'user created', user: {id: user._id, username: user.username}});

    } catch(e) {
        console.error('Error creating user:', e);
        res.status(500).json({ msg: 'Error creating user', stack: e, min: e.message});
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT, { expiresIn: '5d' });
            res.cookie('token', token);
            res.json({ status: 'success', msg: 'Login successful', user: { id: user._id, username: user.username } });
        } else {
            res.status(401).json({ status: 'error', msg: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ status: 'error', msg: 'Error logging in', error });
    }
};

const logout = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({msg: 'Logout successful', data: []});
}

export {signup, login, logout};