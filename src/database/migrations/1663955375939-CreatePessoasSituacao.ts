import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePessoasSituacao1663955375939 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: 'pessoassituacao',
                    columns: [
                        {
                            name: "id_situacao",
                            type: "varchar",
                            isPrimary: true,
                            generationStrategy: "uuid"
                        },
                        {
                            name: "id_pessoa",
                            type: "varchar",
                            isPrimary: true,
                        },
                        {
                            name: "situacao",
                            type: "boolean",
                            isNullable: false,
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
                    foreignKeys: [
                        {
                            name: "fk_pessoa_id_situacao",
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
        await queryRunner.dropTable("pessoassituacao");
    }

}
