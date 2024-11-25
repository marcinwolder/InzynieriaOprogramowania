-- TABLE: server_types
CREATE TABLE
    IF NOT EXISTS server_types (
        game_id INT AUTO_INCREMENT PRIMARY KEY,
        game_name VARCHAR(30) NOT NULL,
        description TEXT,
        base_config TEXT
    );

INSERT INTO
    server_types
VALUES
    (1, 'Minecraft', 'Minecraft is a fun game!', '{"example": "config"}');

-- TABLE: plans
CREATE TABLE
    IF NOT EXISTS plans (
        plan_id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(30) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        description TEXT
    );

INSERT INTO 
    plans 
VALUES
    (1, 'Basic Plan', 9.99, 'Basic plan description'),
    (2, 'Premium Plan', 19.99, 'Premium plan description');

-- TABLE: users
CREATE TABLE
    IF NOT EXISTS users (
        user_id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(30) NOT NULL,
        email VARCHAR(50) NOT NULL,
        password VARCHAR(30) NOT NULL,
        registration_date DATE NOT NULL,
        recovery_hash VARCHAR(32)
    );

INSERT INTO 
    users
VALUES
    (1, 'user1', 'user1@example.com', 'password123', '2024-01-01', 'hash1'),
    (2, 'user2', 'user2@example.com', 'password456', '2024-01-02', 'hash2');

-- TABLE: servers
CREATE TABLE
    IF NOT EXISTS servers (
        server_id INT AUTO_INCREMENT PRIMARY KEY,
        game_id INT NOT NULL,
        user_id INT NOT NULL,
        ip_address VARCHAR(15),
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        is_disabled BOOLEAN NOT NULL DEFAULT 0,
        name VARCHAR(30) NOT NULL,
        plan_id INT NOT NULL,
        FOREIGN KEY (game_id) REFERENCES server_types (game_id),
        FOREIGN KEY (user_id) REFERENCES users (user_id),
        FOREIGN KEY (plan_id) REFERENCES plans (plan_id)
    );

INSERT INTO 
    servers 
VALUES
    (1, 1, 1, '192.168.1.1', '2024-01-03 12:00:00', 0, 'Server A', 1),
    (2, 1, 2, '192.168.1.2', '2024-01-04 13:00:00', 1, 'Server B', 2);

-- TABLE: orders
CREATE TABLE
    IF NOT EXISTS orders (
        order_uuid VARCHAR(36) PRIMARY KEY NOT NULL,
        user_id INT NOT NULL,
        server_id INT NOT NULL,
        purchase_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        expiration_date TIMESTAMP NOT NULL,
        status ENUM ('pending', 'successful', 'cancelled') NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users (user_id),
        FOREIGN KEY (server_id) REFERENCES servers (server_id)
    );

INSERT INTO 
    orders
VALUES
    (NULL, 1, 1, DEFAULT, '2024-02-05 14:00:00', 'pending'),
    (NULL, 2, 2, '2024-01-06 15:00:00', '2024-02-06 15:00:00', 'successful');

-- TABLE: logs
CREATE TABLE
    IF NOT EXISTS logs (
        log_id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        server_id INT,
        action_type VARCHAR(30) NOT NULL,
        description TEXT,
        timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users (user_id),
        FOREIGN KEY (server_id) REFERENCES servers (server_id)
    );

INSERT INTO 
    logs 
VALUES
    (NULL, 1, 1, 'create', 'Server created', DEFAULT),
    (NULL, 2, 2, 'delete', 'Server deleted', DEFAULT);