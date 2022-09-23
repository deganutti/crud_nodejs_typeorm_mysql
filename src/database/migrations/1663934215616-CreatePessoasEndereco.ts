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
                        isNullable: false,
                        isPrimary: true,
                    },
                    {
                        name: "cep",
                        type: "varchar(10)",
                        isNullable: false,
                    },
                    {
                        name: "tipo_logradouro",
                        type: "varchar(20)",
                        isNullable: false,
                    },
                    {
                        name: "logradouro",
                        type: "varchar(200)",
                        isNullable: false,
                    },
                    {
                        name: "numero",
                        type: "varchar(10)",
                        isNullable: false,
                    },
                    {
                        name: "complemento",
                        type: "varchar(200)",
                        isNullable: true,
                    },
                    {
                        name: "bairro",
                        type: "varchar(200)",
                        isNullable: false,
                    },
                    {
                        name: "cidade",
                        type: "varchar(200)",
                        isNullable: false,
                    },
                    {
                        name: "estado",
                        type: "varchar(100)",
                        isNullable: false,
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
