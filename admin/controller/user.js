const Router = require('koa-router');
// 获取用户模型
const UserModel = require('../model/UserModel');
// 实例化用户模型
const usermodel = new UserModel();
const user = new Router();
const generateToken = require('../../middleware/token').generateToken;
const randomID = require('../../utils/random-id');
// 管理员登录
user.post('/user/login', async c => {
    const {username, password} = c.request.body;
    if( username === undefined ) {
        c.body = {
            code: 1,
            msg: '请输入用户名'
        }
        return;
    }
    if( password === undefined ) {
        c.body = {
            code: 1,
            msg: '请输入密码'
        }
        return;
    }
    if( username.trim() === '' ) {
        c.body = {
            code: 1,
            msg: '用户名不能为空！',
        }
        return;
    }
    if( password.trim() === '' ) {
        c.body = {
            code: 1,
            msg: '密码不能为空！',
        }
        return;
    }
    // 查询用户是否已经存在
    const checkUserRes = await usermodel.checkUser(username);
    if ( checkUserRes.length === 0 ) {
        c.body = {
            code: 1,
            msg: '用户名不存在！',
        }
    }
    else {
        // 登录
        try {
            const userInfo = await usermodel.login(username, password);
            const user = userInfo[0];
            if( user ) {
                if( user.isAdmin !== 1 ) {
                    c.body = {
                        code: 1,
                        msg: '很抱歉，您不是系统管理员！',
                    };
                    return;
                }
                // 登录成功
                c.body = {
                    code: 0,
                    msg: '登录成功！',
                    username: user.username,
                    token: generateToken({isAdmin: 1, uid: user.uid, username: user.username})
                }
            } else {
                c.body = {
                    code: 1,
                    msg: '密码错误！',
                }
            }
        } catch (err) {
            c.body = {
                code: 1,
                msg: '登录失败！',
            }
        }
    }
});
// 用户注册
user.post('/user/register', async c => {
    // 获取用户名和密码
    const {username, password} = c.request.body;
    if( username.trim() === '' ) {
        c.body = {
            code: 1,
            msg: '用户名不能为空！',
        }
        return;
    }
    if( password.trim() === '' ) {
        c.body = {
            code: 1,
            msg: '密码不能为空！',
        }
        return;
    }
    // 检查是否已经存在
    const checkUserRes = await usermodel.checkUser(username)
    if( checkUserRes && checkUserRes.length ) {
        c.body = {
            code: 1,
            msg: '用户名已存在！'
        }
    } else {
        // 随机id
        const id = randomID();
        // 注册
        const res = await usermodel.register(id, username, password);
        c.body = {
            code: 0,
            msg: '注册成功！',
            token: token({uid: res.uid, username: res.username}, id)
        }
    }
});
user.post('/user/checkLogin', async c => {
    c.body = {
        code: 0,
        msg: 'admin is logined'
    }
})
module.exports = user;