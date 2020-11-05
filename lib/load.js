import fs from "fs";
import path from "path";

const root = process.cwd();

export default function load(file) {
  return fs.readFileSync(path.join(root, "content", file), "utf8");
}
