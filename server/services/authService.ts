import * as requestModule from 'request';
import { Response, Request } from "express";
import * as jwt from 'express-jwt';
import { secretConfig } from '../secret-config';

interface IAccess {
    allowed: boolean;
}

export class AuthService {

    static authCheck = jwt({
        secret: secretConfig.secret,
        audience: secretConfig.audience
    });

    static getUserInfo(token: string): Promise<any> {
        const promise = new Promise((resolve, reject) => {
            requestModule.post({
                url: secretConfig.userInfoUrl,
                form: {
                    id_token: token
                }
            }, (err, res, body) => {
                if (!err) {
                    let userInfo = JSON.parse(body);
                    resolve(userInfo);
                }
                reject(new Error("Not Authorized"));
            });

        });
        return promise;
    }

    static isAdmin(token: string): Promise<Boolean> {
        return this.getUserInfo(token)
            .then((res) => {
                return res.roles && res.roles.indexOf('admin') > -1;
            })
            .catch((err) => {
                return false;
            });
    }

    static checkRole(request: Request, role: string): Promise<IAccess> {
        let token = request.headers.authorization ? request.headers.authorization.split(' ')[1] : '';
        switch (role) {
            case 'admin': {
                if(!token){
                    return Promise.resolve({ allowed: false });
                }
                return this.isAdmin(token).then((isAdmin) => {
                    return { allowed: isAdmin };
                });
            }

            case 'user': {
                return Promise.resolve({ allowed: true });
            }
        }
    }
}