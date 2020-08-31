// registro de usuários na API.

import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (userExists){
      return res.status(400).json({error: 'Usuário já existe'});
    }

    const { id, name, email, provider } = await User.create(req.body); //retorno de campos pro front end
    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}
export default new UserController();
