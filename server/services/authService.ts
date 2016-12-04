import * as requestModule from 'request';
import { secretConfig } from '../secret-config';

export class AuthService{

    static getUserInfo(token: string): Promise<any> {
        const promise = new Promise((resolve, reject) => {
            requestModule.post({
                url: secretConfig.userInfoUrl,
                form: {
                    id_token: token
                }
            },(err, res, body)=>{
                if(!err){
                    let userInfo = JSON.parse(body);
                    resolve(userInfo);
                }
                reject(new Error("Not Authorized"));
            });
            
        });
        return promise;        
    }

    static isAdmin(token: string): Promise<Object> {
        return this.getUserInfo(token)
            .then((res) => {
                return res.roles && res.roles.indexOf('admin') > -1;
            })
            .catch((err) => {
                return false;    
            });       
    }      
}