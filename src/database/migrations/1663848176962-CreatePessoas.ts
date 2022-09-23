import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePessoas1663848176962 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "pessoas",
                columns: [
                    {
                        name: "id_pessoa",
                        type: "varchar",
                        isPrimary: true,
                        generationStrategy: "uuid"
                    },
                    {
                        name: "nome",
                        type: "varchar(100)",
                        isNullable: false,
                    },
                    {
                        name: "apelido",
                        type: "varchar(100)"
                    },
                    {
                        name: "nacimento",
                        type: "date"
                    },
                    {
                        name: "email",
                        type: "varchar(100)",
                        isUnique: true,
                        isPrimary: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "current_timestamp"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "current_timestamp"
                    }
                ],
            })
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pessoas");
    }

}
