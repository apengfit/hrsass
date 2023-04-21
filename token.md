# 定义

token存放的一般是：用户信息和登录的过期时间；一般是由后端生成并返回的。

存token的方式：

- localStorage
  - 存在本地或浏览器中
- vuex
  - 把数据存在内存中
  - 后者速度更快



# 问题

vuex存在一个问题：刷新会丢失数据，所以需要把数据持久化



# cookie与localStorage存储token的对比

- cookie有着一些安全策略的限制
  - 比如：可以禁止外站脚本访问cookie，可以要求只在https下传递token信息。
  - 但是cookie会被一些移动端禁用，只能用localStorage
- 以后主流
  - PC一般用cookie存储token
  - 移动端一般用localStorage存储token



# 将token存储到cookie

- 原生 --比较麻烦
- 插件：js-cookie