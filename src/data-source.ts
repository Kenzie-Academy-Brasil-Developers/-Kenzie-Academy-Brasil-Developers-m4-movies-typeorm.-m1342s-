import "reflect-metadata"
import "dotenv/config"
import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";

const dataSourceConfig=():DataSourceOptions=>{
    const entities:string=path.join(__dirname,"./entities/**.{ts,js}")
    const migrations:string=path.join(__dirname,"./migrations/**.{ts,js}")
    
    const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === 'test') {
    return {
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      entities: [entities],
    };
  }
    
    const urlDB:string|undefined=process.env.DATABASE_URL

    if (!urlDB) {
        throw new Error("missing env.var:'DATABASE_URL'")
    }

    return{
        type:"postgres",
        url:urlDB,
        synchronize:false,
        logging:true,
        entities:[entities],
        migrations:[migrations],
    }
}
export const AppDataSource=new DataSource(dataSourceConfig())