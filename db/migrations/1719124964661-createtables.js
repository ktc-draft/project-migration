"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Createtables1719124964661 = void 0;
class Createtables1719124964661 {
    constructor() {
        this.name = 'Createtables1719124964661';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "crypto_wallet" ("id" SERIAL NOT NULL, "label" character varying(255) NOT NULL, CONSTRAINT "PK_cc61f8f26483f676cc4adcd2e02" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "auth_provider" ("id" SERIAL NOT NULL, "is_enabled" boolean NOT NULL DEFAULT true, "provider_name" character varying(20) NOT NULL, CONSTRAINT "UQ_f52e4ea6a8bcd9777609a80459f" UNIQUE ("provider_name"), CONSTRAINT "PK_0a6e6348fe38ba49160eb903c95" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "currency" ("id" SERIAL NOT NULL, "label" character varying(255) NOT NULL, "code" character varying(50) NOT NULL, "precision" smallint, "minsumbuy" numeric(15,6), "minsumsell" numeric(15,6), "maxsumbuy" numeric(15,6), "maxsumsell" numeric(15,6), "addressregex" character varying(255), "isactive" boolean NOT NULL, CONSTRAINT "PK_3cda65c731a6264f0e444cc9b91" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cluster" ("id" SERIAL NOT NULL, "codenetwork" character varying(255) NOT NULL, "code" character varying(50) NOT NULL, "type" character varying(25), "isactive" boolean NOT NULL, "basecurridId" integer NOT NULL, CONSTRAINT "PK_b09d39b9491ce5cb1e8407761fd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "promo_partner" ("id" SERIAL NOT NULL, "name" character varying(255), "adddata" jsonb, "email" character varying(255), CONSTRAINT "PK_b80df99fb6bd94fad23b4961c7a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "promo_tariff_plan" ("id" SERIAL NOT NULL, "isactive" boolean, "label" character varying(255), "rate" numeric(10,10), CONSTRAINT "PK_87bcad391d2de1bb6fb034dd8dc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "promo_code" ("id" SERIAL NOT NULL, "code" character varying(255), "email" character varying(255), "promopartneridId" integer NOT NULL, "promotariffplanidId" integer NOT NULL, CONSTRAINT "PK_ded0af550884c7ab3e345e76d73" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "login_user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(255), "adddata" jsonb, "authProviderIdId" integer NOT NULL, "promocodeidId" integer, CONSTRAINT "PK_6da2fec3d330c1b6c67c427937e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "permissions" ("clusterid" integer NOT NULL, "currid" integer NOT NULL, "isdisabled" boolean NOT NULL, CONSTRAINT "PK_67547fe29e374c72c0c1e9a5528" PRIMARY KEY ("clusterid", "currid"))`);
        await queryRunner.query(`CREATE TABLE "op_types" ("id" SMALLSERIAL NOT NULL, "label" character varying(25), CONSTRAINT "PK_f5c42d4f5266e749d01c09876eb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "transaction" ("id" BIGSERIAL NOT NULL, "datestart" date NOT NULL, "datefinish" date NOT NULL, "incsum" numeric(10,10), "outsum" numeric(10,10), "feepaysystem" numeric(10,10), "feenetwork" numeric(10,10), "finalsum" numeric(10,10), "inccurridId" integer NOT NULL, "incclasteridId" integer NOT NULL, "outcurridId" integer NOT NULL, "outclasteridId" integer NOT NULL, "feecurrencyidId" integer, "optypeidId" smallint NOT NULL, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "transactioninfo" ("transactionid" BIGSERIAL NOT NULL, "incaccount" character varying(255) NOT NULL, "incaccountdata" jsonb, "outaccount" character varying(255) NOT NULL, "outaccountdata" jsonb, "email" character varying(255), "rate" numeric(10,10), "cryptowalletid" integer, "userid" uuid NOT NULL, CONSTRAINT "PK_a49516efbcb657d7e5441820786" PRIMARY KEY ("transactionid"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "cluster" ADD CONSTRAINT "FK_de27f7356592ef106d816a4e873" FOREIGN KEY ("basecurridId") REFERENCES "currency"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "promo_code" ADD CONSTRAINT "FK_dd540d6773a99227ae5c752d99b" FOREIGN KEY ("promopartneridId") REFERENCES "promo_partner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "promo_code" ADD CONSTRAINT "FK_150f23533a49b55ce8d021c0e1d" FOREIGN KEY ("promotariffplanidId") REFERENCES "promo_tariff_plan"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "login_user" ADD CONSTRAINT "FK_077ad211b93aa618f705dfcd53e" FOREIGN KEY ("authProviderIdId") REFERENCES "auth_provider"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "login_user" ADD CONSTRAINT "FK_4f0a14b9ff2ba1136fd0fab4cfd" FOREIGN KEY ("promocodeidId") REFERENCES "promo_code"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "permissions" ADD CONSTRAINT "FK_242d7c709083a246bd28462d07b" FOREIGN KEY ("clusterid") REFERENCES "cluster"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "permissions" ADD CONSTRAINT "FK_ee68427ee15fa281f4dfbe3fafb" FOREIGN KEY ("currid") REFERENCES "currency"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transaction" ADD CONSTRAINT "FK_cbf802a14a52e1b19ba9ae3e3a9" FOREIGN KEY ("inccurridId") REFERENCES "currency"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transaction" ADD CONSTRAINT "FK_3be6477fe1dd1ea4dd9100b90da" FOREIGN KEY ("incclasteridId") REFERENCES "cluster"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transaction" ADD CONSTRAINT "FK_37af882048f4be6f9c0e02b3ca9" FOREIGN KEY ("outcurridId") REFERENCES "currency"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transaction" ADD CONSTRAINT "FK_22f1549962716cbd9fe9cea7ef7" FOREIGN KEY ("outclasteridId") REFERENCES "cluster"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transaction" ADD CONSTRAINT "FK_695effb5af72a1e54134fa30acc" FOREIGN KEY ("feecurrencyidId") REFERENCES "currency"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transaction" ADD CONSTRAINT "FK_d7718dc95bea4af3f0ca961ad3e" FOREIGN KEY ("optypeidId") REFERENCES "op_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transactioninfo" ADD CONSTRAINT "FK_a49516efbcb657d7e5441820786" FOREIGN KEY ("transactionid") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transactioninfo" ADD CONSTRAINT "FK_62f56e29051d0d15cd0c8a82273" FOREIGN KEY ("cryptowalletid") REFERENCES "crypto_wallet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transactioninfo" ADD CONSTRAINT "FK_34159d3c32276a21456a5df256b" FOREIGN KEY ("userid") REFERENCES "login_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "transactioninfo" DROP CONSTRAINT "FK_34159d3c32276a21456a5df256b"`);
        await queryRunner.query(`ALTER TABLE "transactioninfo" DROP CONSTRAINT "FK_62f56e29051d0d15cd0c8a82273"`);
        await queryRunner.query(`ALTER TABLE "transactioninfo" DROP CONSTRAINT "FK_a49516efbcb657d7e5441820786"`);
        await queryRunner.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_d7718dc95bea4af3f0ca961ad3e"`);
        await queryRunner.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_695effb5af72a1e54134fa30acc"`);
        await queryRunner.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_22f1549962716cbd9fe9cea7ef7"`);
        await queryRunner.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_37af882048f4be6f9c0e02b3ca9"`);
        await queryRunner.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_3be6477fe1dd1ea4dd9100b90da"`);
        await queryRunner.query(`ALTER TABLE "transaction" DROP CONSTRAINT "FK_cbf802a14a52e1b19ba9ae3e3a9"`);
        await queryRunner.query(`ALTER TABLE "permissions" DROP CONSTRAINT "FK_ee68427ee15fa281f4dfbe3fafb"`);
        await queryRunner.query(`ALTER TABLE "permissions" DROP CONSTRAINT "FK_242d7c709083a246bd28462d07b"`);
        await queryRunner.query(`ALTER TABLE "login_user" DROP CONSTRAINT "FK_4f0a14b9ff2ba1136fd0fab4cfd"`);
        await queryRunner.query(`ALTER TABLE "login_user" DROP CONSTRAINT "FK_077ad211b93aa618f705dfcd53e"`);
        await queryRunner.query(`ALTER TABLE "promo_code" DROP CONSTRAINT "FK_150f23533a49b55ce8d021c0e1d"`);
        await queryRunner.query(`ALTER TABLE "promo_code" DROP CONSTRAINT "FK_dd540d6773a99227ae5c752d99b"`);
        await queryRunner.query(`ALTER TABLE "cluster" DROP CONSTRAINT "FK_de27f7356592ef106d816a4e873"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "transactioninfo"`);
        await queryRunner.query(`DROP TABLE "transaction"`);
        await queryRunner.query(`DROP TABLE "op_types"`);
        await queryRunner.query(`DROP TABLE "permissions"`);
        await queryRunner.query(`DROP TABLE "login_user"`);
        await queryRunner.query(`DROP TABLE "promo_code"`);
        await queryRunner.query(`DROP TABLE "promo_tariff_plan"`);
        await queryRunner.query(`DROP TABLE "promo_partner"`);
        await queryRunner.query(`DROP TABLE "cluster"`);
        await queryRunner.query(`DROP TABLE "currency"`);
        await queryRunner.query(`DROP TABLE "auth_provider"`);
        await queryRunner.query(`DROP TABLE "crypto_wallet"`);
    }
}
exports.Createtables1719124964661 = Createtables1719124964661;
//# sourceMappingURL=1719124964661-createtables.js.map