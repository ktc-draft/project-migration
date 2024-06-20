import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Currency } from "./Currency"; // Подключение сущности Currency

export abstract class Cluster {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255, nullable: false })
    codenetwork: string;

    @Column({ type: "varchar", length: 50, nullable: false })
    code: string;

    @ManyToOne(() => Currency)
    @JoinColumn({ name: "basecurrid" })
    baseCurrency: Currency;

    @Column({ type: "varchar", length: 25, nullable: true })
    type: string;

    @Column({ type: "boolean", nullable: true })
    isactive: boolean;
}