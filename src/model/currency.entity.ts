import { PrimaryGeneratedColumn, Column, BaseEntity as TypeORMBaseEntity } from "typeorm";

export abstract class BaseEntity extends TypeORMBaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255, nullable: false })
    label: string;

    @Column({ type: "varchar", length: 50, nullable: false })
    code: string;

    @Column({ type: "smallint", nullable: true })
    precision: number;

    @Column({ type: "numeric", precision: 15, scale: 6, nullable: true })
    minsumbuy: number;

    @Column({ type: "numeric", precision: 15, scale: 6, nullable: true })
    minsumsell: number;

    @Column({ type: "numeric", precision: 15, scale: 6, nullable: true })
    maxsumbuy: number;

    @Column({ type: "numeric", precision: 15, scale: 6, nullable: true })
    maxsumsell: number;

    @Column({ type: "varchar", length: 255, nullable: true })
    addressregex: string;

    @Column({ type: "boolean", nullable: true })
    isactive: boolean;
}