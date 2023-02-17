import {  CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class TimeStampEntity  {
    
    @CreateDateColumn( {name: 'created_at', default: () => 'CURRENT_TIMESTAMP'} )
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at', default: () => 'CURRENT_TIMESTAMP'})
    updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at', nullable: true})
    deletedAt: Date;
}