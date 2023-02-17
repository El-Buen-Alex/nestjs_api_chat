import { Injectable } from '@nestjs/common';
import { IUser } from 'src/shared/interfaces/user.interface';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService {

    async store (data: any) {
        const user=UserEntity.create(data);
        await user.save();
        delete user.password;
        return user;
    }

    async showById (id: number) : Promise<UserEntity> {
        const user=await UserEntity.findOne({where: {id: id}});
        delete user.password;
        return user;
    }

    async showByEmail (email: string) : Promise<UserEntity> {
        const user=await UserEntity.findOne({where: {email: email}});
        delete user.password;
        return user;
    }
}
