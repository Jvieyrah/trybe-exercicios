interface logger {
    log(message: string): void;
    }

class ConsoleLogger implements logger {
    log(message: string): void {
        console.log(message);
    }
}

class ConsoleLogger2 implements logger {
    log(message: string): void {
        console.log('Logger2: ' + message);
    }
}

interface database {
    logger: logger;
    save(key:string , value:string): void;
}

class exempleDatabase implements database {
    constructor(public logger: logger = new ConsoleLogger()) {}
    save(key: string, value: string): void {
        this.logger.log(`Saving ${key} = ${value}`);
    }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const db1 = new exempleDatabase(logger1);
const db2 = new exempleDatabase(logger2);
const db3 = new exempleDatabase();

db1.save('key1', 'value1');
db2.save('key2', 'value2');
db3.save('key3', 'value3');