import { TimeStampEntity } from "src/shared/main.entity";
import { BaseEntity, BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { IUser } from "src/shared/interfaces/user.interface";

@Entity('users')
export class UserEntity extends BaseEntity implements IUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'first_name', nullable: false})
    firstName: string;

    @Column({name: 'last_name', nullable: false})
    lastName: string;

    @Column({name: 'email', nullable: false, unique: true})
    email: string;

    @Column({name: 'password', nullable: false})
    password: string;

    @Column(()=>TimeStampEntity, {prefix: false})

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
    async validatePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }
}