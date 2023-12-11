const UserServices = require('../Services/User_services');

const UserControllers = {
  getAllUsers: async (req, res) => {
    try {
      const users = await UserServices.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },
  getUserById: async(req, res) => {
    const { id } = req.params
    try {
      const user = await UserServices.getUserById(id)
      res.status(200).json(user)
    } catch (error) {
      res.status(500).send({ message: error.message})
    }
  },
  getUserByEmail: async (req, res) => {
    const { email } = req.query
    try {
      const user = await UserServices.getUserByEmail(email)
      res.status(200).json(user)
    } catch (error) {
      res.status(500).send({ message: error.message })
    }
  },
  updateUser: async (req, res) => {
    const { id } = req.params
    const updateData = req.body
    try {
      const user = await UserServices.updateUser(id, updateData)
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json({ message: error.message})
    }
  },
  deleteUser: async (req, res) => {
    const { id } = req.params
    try {
      const user = await UserServices.deleteUser(id)
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
  createUser: async (req, res) => {
    try {
      const { usuario, email, password, comfirmpass} = req.body;
      err = ""
      if (!usuario) {
        err += `[usuario can't be empty] `
      }
      if (!email) {
        err += `[email can't be empty] `
      }
      if (!password) {
        err += `[password can't be empty] `
      }
      if (!comfirmpass ) {
        err += `[comfirmpass can't be empty] `
      }
      if (err !== ""){
        res.status(400).json({error: err})
      }
      const roleid = 3

      const result = await UserServices.register(usuario, email, password, comfirmpass, roleid)
      res.status(200).json(result)
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = UserControllers;
