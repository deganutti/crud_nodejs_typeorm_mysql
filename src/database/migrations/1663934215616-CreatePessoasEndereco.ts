import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePessoasEndereco1663934215616 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "pessoasendereco",
                columns: [
                    {
                        name: "id_endereco",
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
                        name: "cep",
                        type: "varchar(10)",
                    },
                    {
                        name: "tipo_logradouro",
                        type: "varchar(20)",
                    },
                    {
                        name: "logradouro",
                        type: "varchar(200)",
                    },
                    {
                        name: "numero",
                        type: "varchar(10)",
                    },
                    {
                        name: "complemento",
                        type: "varchar(200)",
                        isNullable: true,
                    },
                    {
                        name: "bairro",
                        type: "varchar(200)",
                    },
                    {
                        name: "cidade",
                        type: "varchar(200)",
                    },
                    {
                        name: "estado",
                        type: "varchar(100)",
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
                        name: "fk_pessoa_id_enderecos",
                        referencedTableName: "pessoas",
                        referencedColumnNames: ["id_pessoa"],
                        columnNames: ["id_pessoa"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]

            })
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pessoasendereco");
    }

}
