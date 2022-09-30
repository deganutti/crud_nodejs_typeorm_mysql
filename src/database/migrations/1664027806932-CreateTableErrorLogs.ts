import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableErrorLogs1664027806932 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: 'errorlog',
                    columns: [
                        {
                            name: "id_log",
                            type: "varchar",
                            isPrimary: true,
                            generationStrategy: "uuid"
                        },
                        {
                            name: "tabela",
                            type: "varchar(100)",
                        },
                        {
                            name:"log",
                            type:"longtext"
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
                    ]
                }
            ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("errorlog");
    }

}
