import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class OpTypes {
    @PrimaryGeneratedColumn({ type: 'smallint' })
    id: number;

    @Column({ type: 'varchar', length: 25, nullable: true })
    label: string;
}
