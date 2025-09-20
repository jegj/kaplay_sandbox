import { pbkdf2 } from "crypto";

process.env.UV_THREADPOOL_SIZE = 5;

const start = Date.now();
const maxCalls = 5;

for (let i = 0; i < maxCalls; i++) {
  pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Hash ${i + 1}:`, Date.now() - start);
  });
}
