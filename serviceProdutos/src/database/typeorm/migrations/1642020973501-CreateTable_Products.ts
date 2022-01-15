import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableProducts1642020973501 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'thumbnail',
            type: 'varchar',
          },
          {
            name: 'preco',
            type: 'varchar',
          },
          {
            name: 'ingredientes',
            type: 'varchar',
          },
          {
            name: 'disponibilidade',
            type: 'varchar',
          },
          {
            name: 'volume',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
