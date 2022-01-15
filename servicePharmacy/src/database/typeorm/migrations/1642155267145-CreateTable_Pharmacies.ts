import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTablePharmacies1642155267145 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pharmacies',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'idSede',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'logo',
            type: 'varchar',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'cnpj',
            type: 'varchar',
          },
          {
            name: 'endereco',
            type: 'varchar',
          },
          {
            name: 'horarioFuncionamento',
            type: 'varchar',
          },
          {
            name: 'responsavel',
            type: 'varchar',
          },
          {
            name: 'telefone',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pharmacies');
  }
}
