import { drizzle } from "drizzle-orm/libsql";
// import { createClient } from "@libsql/client/web";

const turso = {
  url: "libsql://ppr-prisri.turso.io",
  authToken:
    "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3Mzc1NjY4MTYsImlkIjoiYjFjYTIwNzAtNjc4Zi00N2M5LTliYTItNzczZDRjODZmZDM5In0.gXO16K682RrCofhkaVHrfbgoWVIen42h-4HsIuy-GItYdrBUwFgtXa91PmDSDsjAkCKZN4ge_xAvkxH08worAQ",
};

export const db = drizzle({ connection: turso });
