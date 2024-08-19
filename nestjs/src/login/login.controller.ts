import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from '../app.service';
import { HttpService } from '@nestjs/axios';

@Controller('login')
export class LoginController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService,
  ) {}

  @Get()
  async list(@Query() params: { code: string }): Promise<any> {
    let info = null;
    let accessToken = null;
    accessToken = await this.httpService
      .post(
        'https://www.linkedin.com/oauth/v2/accessToken',
        {},
        {
          params: {
            grant_type: 'authorization_code',
            code: params.code,
            client_id: '78h5sre0emtth7',
            client_secret: 'RaLfupkTIWqQrrsJ',
            redirect_uri: 'http://localhost:3001/login',
          },
        },
      )
      .toPromise()
      .then(async (res) => {
        return res.data.access_token;
      })
      .catch((err) => {
        console.log('err getInfo');
      });
    if (accessToken) {
      info = await this.httpService
        .get('https://api.linkedin.com/v2/userinfo', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .toPromise()
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log('err getToken');
        });
    }
    if (info) {
      const user = await this.appService.findUser('email', info.email);
      if (!user) {
        console.log(user)
        await this.appService.createUser(info.name, info.email, accessToken);
      }
    }
    return { accessToken: accessToken, info: info };
  }
}
