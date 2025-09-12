type Level = 'NOTSET' | 'DEBUG' | 'INFO' | 'WARNING' | 'ERROR' | 'CRITICAL';
type Message = string | number | boolean | object | null | undefined;

export class Logger {
  //
  private _name: string = 'main';

  //
  private constructor() {}

  //
  public static get(name: string = 'main'): Logger {
    const logger = new Logger();
    logger._name = name;
    return logger;
  }

  public clone(name: string): Logger {
    return Logger.get(name);
  }

  //
  public debug(...messages: Message[]): void {
    this.log('DEBUG', ...messages);
  }

  public info(...messages: Message[]): void {
    this.log('INFO', ...messages);
  }

  public warning(...messages: Message[]): void {
    this.log('WARNING', ...messages);
  }

  public error(...messages: Message[]): void {
    this.log('ERROR', ...messages);
  }

  public critical(...messages: Message[]): void {
    this.log('CRITICAL', ...messages);
  }

  //
  public log(level: Level, ...messages: Message[]): void {
    console.log({
      level,
      name: this._name,
      message: messages[0],
      rest: messages.slice(1),
    });

    //const logWriter = LogWriter.get();
    //logWriter.write(this._name, level, ...messages);
  }
}
