import pool from "../DB/client.js";

const getUsers = async (req, res) => {
    try {
        const users = await pool.query("SELECT * FROM users");
        return res.status(200).json(users.rows);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
const getUser = async (req, res) => {
    try {
        const user = await pool.query("SELECT * FROM users WHERE id = $1", [req.params.id]);
        return res.status(200).json(user.rows);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export{ getUsers, getUser }