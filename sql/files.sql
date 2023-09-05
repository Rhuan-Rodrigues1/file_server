CREATE TABLES files (
    name SERIAL PRIMARY KEY,
    size NUMERIC NOT NULL,
    key INTEGER NOT NULL,
    url VARCHAR(255) NOT NULL,
    createdAt DATE,
)