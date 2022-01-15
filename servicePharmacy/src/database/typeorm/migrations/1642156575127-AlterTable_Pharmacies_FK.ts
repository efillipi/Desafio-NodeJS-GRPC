import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AlterTablePharmaciesFK1642156575127 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'pharmacies',
      new TableForeignKey({
        columnNames: ['idSede'],
        referencedColumnNames: ['id'],
        referencedTableName: 'pharmacies',
        name: 'fk_pharmacies_idSede',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('pharmacies', 'fk_pharmacies_idSede');
  }
}
