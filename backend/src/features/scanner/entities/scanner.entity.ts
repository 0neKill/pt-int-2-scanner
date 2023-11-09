import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('scanner')
export class ScannerEntity {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ type: 'character varying', nullable: false })
    ip: string;

    @Column({ type: 'numeric', nullable: false })
    port: number;

    @Column({ type: 'character varying', nullable: false })
    login: string;

    @Column({ type: 'character varying', nullable: false })
    password: string;

    @Column({ type: 'character varying', nullable: false })
    staticHostname: string;

    @Column({ type: 'character varying', nullable: false })
    operatingSystem: string;

    @Column({ type: 'character varying', nullable: false })
    version: string;

    @Column({ type: 'character varying', nullable: true })
    architecture: string;

}

