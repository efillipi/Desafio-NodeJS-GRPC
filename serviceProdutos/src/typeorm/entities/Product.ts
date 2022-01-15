import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  thumbnail: string;

  @Column()
  preco: string;

  @Column()
  ingredientes: string;

  @Column()
  disponibilidade: string;

  @Column()
  volume: string;
}

export default Product;
