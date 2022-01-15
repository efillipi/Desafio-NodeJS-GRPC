import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity('pharmacies')
class Pharmacy {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  idSede: number;

  @Column()
  logo: string;

  @Column()
  nome: string;

  @Column()
  cnpj: string;

  @Column()
  endereco: string;

  @Column()
  horarioFuncionamento: string;

  @Column()
  responsavel: string;

  @Column()
  telefone: string;

  @ManyToOne(() => Pharmacy, pharmacy => pharmacy.filiais)
  @JoinColumn({ name: 'idSede' })
  sede: Pharmacy;

  @OneToMany(() => Pharmacy, pharmacy => pharmacy.sede)
  @JoinColumn({ name: 'id' })
  filiais: Pharmacy[];
}

export default Pharmacy;
