import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class PessoasSituacao1663770626885 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        new Table({
                name:"pessoas_situacao",
                  columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        generationStrategy: 'uuid',
                    },
                    {
                        name: "id_pessoa",
                        type: "int", 
                    },
                    {
                        name: "situacao",
                        type: "boolean",
                    },
                  ],
                   foreignKeys: [
                    {
                      name: "fk_id_pessoa_situacao",
                      referencedTableName: "pessoas",
                      referencedColumnNames: ["id_pessoa"],
                      columnNames: ["id_pessoa"],
                      onDelete: "CASCADE",
                      onUpdate: "CASCADE"
                    }
                  ]
            })
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
          await queryRunner.dropTable("pessoas_situacao");
    }

}
