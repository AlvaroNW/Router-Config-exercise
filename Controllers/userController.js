import pool from "../DB/client.js";

const getUsers = async (req, res) => {
    try {
        const users = await pool.query("SELECT * FROM users");
        return res.status(200).json(users.rows);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export{ getUsers }