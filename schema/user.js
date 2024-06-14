// 用户信息验证规则模块
const joi=require('joi')
// string() 值必须是字符串
// alphanuw()值只能是包含a-zA-Z0-9的字符串
// min(length)最小长度
//max(length)最大长度
// required()值是必须项，不能为undefiend
// pattern（正则表达式）值必须符合正则表达式的规则

/**
 * 定义用户注册信息的验证规则
 * 无参数
 * 无返回值，但定义了两个验证规则：username 和 password
 */

// 定义用户名的验证规则
// - 类型为字符串
// - 只能包含字母和数字
// - 最小长度为5个字符，最大长度为12个字符
// - 是必需的字段
const username=joi.string().alphanum().min(5).max(12).required()

// 定义密码的验证规则
// - 类型为字符串
// - 必须符合正则表达式要求：至少6个非空字符，最多12个字符，可以包含任何字符类型
// - 是必需的字段
const password=joi.string().pattern(/^[\S]{6,12}$/).required()
// 注册和登录表单的验证规则对象
exports.reg_login_schema={
    // 表示需要对req.body 中的数据进行验证
    body: {
        username,
        password
    }
}