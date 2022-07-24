import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Departamentos1658359584031 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Departamentos",
                columns: [
                 {
                     name: "id_id",
                     type: "uuid",
                     isPrimary: true,
                 },
                 {
                     name: "nome_id",
                     type: "uuid",
                     isUnique: true,
                 },
                 {
                     name: "tipo",
                     type: "varchar",
                 },
            ],
            foreignKeys: [
                {
                    name: "fk_id_colaboradores",
                    columnNames: ["id_id"],
                    referencedTableName: "colaboradores",
                    referencedColumnNames: ["id"],
                },
            ]
        })
    );    
}

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
