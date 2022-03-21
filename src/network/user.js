import { request } from './request';
import { Logout } from './login';
import store from '../store'


//用来更新本地的用户状态，每次更改后都要执行！！
export function GetUser() {
    return request({
        url: '/shidao/fore/GetUser',
        method: 'get',
    })
}
export function checkUser(id) {
    return request({
        url: '/shidao/userInfo/checkUser',
        method: 'get',
        params:{
            id
        }
    })
}
export function UpdateLocal() {


    //请求5次直到成功，5次失败强行登出
    {
        GetUser().then((res) => {
            if (res.data.msg === "success") {
                let data = res.data.userInfo;
                store.commit('SetUserState', {
                    login: 1,
                    userId: data.id,
                    userName: data.username,
                    userImg: data.userImg,
                    domainText: data.domainText,
                    collectionClass: data.collectionClass,
                    collectionQuestion: data.collectionQuestion
                })

                return;
            }
            if (res.data.msg === "fail") {

                {
                    this.$message({
                        type: "error",
                        message: "抱歉，服务器错误，将立即登出您的账号以保证安全！"
                    })
                    setTimeout(() => {
                        Logout();
                        this.$router.push('/home');
                    }, 1000)
                }
            }
        })

    }


}