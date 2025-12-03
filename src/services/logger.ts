import * as fs from "fs";
import * as path from "path";

class Logger {
  public name: string;
  public filePath: string;

  constructor(name: string, filePath: string) {
    this.name = name;
    this.filePath = filePath;

    // Ensure log directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  private format(level: string, message: string): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${this.name}] [${level.toUpperCase()}] ${message}`;
  }

  private writeToFile(formattedMessage: string): void {
    fs.appendFileSync(this.filePath, formattedMessage + "\n", "utf8");
  }

  public log(message: string): void {
    const formatted = this.format("info", message);
    console.log(formatted);
    this.writeToFile(formatted);
  }

  public info(message: string): void {
    const formatted = this.format("info", message);
    console.info(formatted);
    this.writeToFile(formatted);
  }

  public warn(message: string): void {
    const formatted = this.format("warn", message);
    console.warn(formatted);
    this.writeToFile(formatted);
  }

  public error(message: string): void {
    const formatted = this.format("error", message);
    console.error(formatted);
    this.writeToFile(formatted);
  }

  public debug(message: string): void {
    const formatted = this.format("debug", message);
    console.debug(formatted);
    this.writeToFile(formatted);
  }
}

export default Logger;
