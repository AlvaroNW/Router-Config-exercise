
import pool from "../DB/client.js";



const getUsers = async (req, res) => {
    try {
        const users = await pool.query("SELECT * FROM users");
        return res.status(200).json(users.rows);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}
const getUser = async (req, res) => {
    try {
        const user = await pool.query("SELECT * FROM users WHERE id = $1", [req.params.id]);
        if (!user.rows.length) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(user.rows[0]);
    } catch (error) {
        if (error instanceof NotFoundError) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(500).json({ message: "Internal server error" });
    }
}

const createUser = async (req, res) => {
    const {firstname, lastname, email} = req.body;
    try {
        
        if(!firstname ||!lastname ||!email) {
            throw Error("Please fill all fields");
        }
        const newUser = await pool.query("INSERT INTO users(firstname, lastname, email) VALUES($1,$2,$3)", [firstname, lastname, email]);
        return res.status(201).json({ message: "User created successfully"})
    } catch (error) {
        if(!firstname || !lastname || !email) {
            return res.status(400).json({ message: "Please fill all fields" });
        }
        return res.status(500).json({ message: "Internal server error" });
    }
}

export{ getUsers, getUser, createUser }