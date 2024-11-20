-- init.sql

-- Tworzenie tabeli test1
CREATE TABLE IF NOT EXISTS test1 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    value INT NOT NULL
);

-- Dodanie danych do test1
INSERT INTO test1 (name, value) VALUES
('example1', 123),
('example2', 456);

-- Tworzenie tabeli test2
CREATE TABLE IF NOT EXISTS test2 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description TEXT NOT NULL
);

-- Dodanie danych do test2
INSERT INTO test2 (description) VALUES
('sample description 1'),
('sample description 2');