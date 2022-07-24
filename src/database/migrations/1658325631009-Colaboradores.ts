import { MigrationInterface, QueryRunner, Table,} from "typeorm"
export class Colaboradores1658325631009 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
               name: "colaboradores",
               columns: [
                {
                    name: "id",
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: "nome",
                    type: "varchar",
                    isUnique: true,
                },
                {
                    name: "email",
                    type: "varchar",
                    isUnique: true,
                },
                {
                    name: "idade",
                    type: "integer",
                },
                {
                    name: "senha",
                    type: "varchar",
                    isUnique: true,
                },
                {
                    name: "status",
                    type: "varchar",
                },
                {
                    name: "redes sociais",
                    type: "varchar",
                },
                {
                    name: "descrição de perfil",
                    type: "varchar",

                },
               ] ,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Colaboradores")
    }

}
