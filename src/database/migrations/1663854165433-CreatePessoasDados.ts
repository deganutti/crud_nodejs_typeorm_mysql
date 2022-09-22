import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePessoasDados1663854165433 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "pessoasdados",
                columns: [
                    {
                        name: "id_dados",
                        type: "varchar",
                        isPrimary: true,
                        generationStrategy: "uuid"
                    },
                    {
                        name: "id_pessoa",
                        type: "varchar",
                        isNullable: false,
                        isPrimary: true,
                    },
                    {
                        name: "rg",
                        type: "varchar(15)",

                        isNullable: true,
                    },
                    {
                        name: "cpf",
                        type: "varchar(20)",
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        isNullable: true,
                        default: "current_timestamp"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        isNullable: true,
                        default: "current_timestamp"
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_pessoa_id_dados",
                        referencedTableName: "pessoas",
                        referencedColumnNames: ["id_pessoa"],
                        columnNames: ["id_pessoa"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pessoasdados");
    }

}
