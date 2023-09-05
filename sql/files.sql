CREATE TABLES files (
    name SERIAL PRIMARY KEY,
    size FLOAT NOT NULL,
    key NUMERIC NOT NULL,
    url VARCHAR(255) NOT NULL,
    createdAt DATE,
)