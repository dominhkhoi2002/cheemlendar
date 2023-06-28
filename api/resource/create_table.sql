CREATE TABLE User (
    user_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username VARCHAR(30),
    email VARCHAR(30),
    name VARCHAR(40),
    password VARCHAR(30)
);
CREATE TABLE Calendar (
    calendar_id INT PRIMARY KEY AUTO_INCREMENT,
    calendar_name VARCHAR(30),
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES User(user_id)
);
CREATE TABLE Events (
    event_id INT PRIMARY KEY AUTO_INCREMENT,
    calendar_id INT,
    event_title VARCHAR(30),
    start_datetime DATETIME,
    end_datetime DATETIME,
    color_theme INT,
    task_id INT,
    description VARCHAR(255),
    FOREIGN KEY(calendar_id) REFERENCES Calendar(calendar_id)
);
CREATE TABLE Team (
    team_id INT PRIMARY KEY AUTO_INCREMENT,
    team_name VARCHAR(30),
    public BOOLEAN,
    description VARCHAR(255)
);
CREATE TABLE Team_member (
    team_id INT,
    user_id INT,
    is_leader BOOLEAN,
    FOREIGN KEY(team_id) REFERENCES Team(team_id),
    FOREIGN KEY(user_id) REFERENCES User(user_id)
);
CREATE TABLE Task (
    task_id INT PRIMARY KEY AUTO_INCREMENT,
    task_name VARCHAR(30),
    start_date DATETIME,
    due_date DATETIME,
    description VARCHAR(255),
    team_id INT,
    parent_task_id INT,
    FOREIGN KEY(team_id) REFERENCES Team(team_id),
    FOREIGN KEY(parent_task_id) REFERENCES Task(task_id)
);

ALTER TABLE Events ADD FOREIGN KEY(task_id) REFERENCES Task(task_id);

CREATE TABLE Task_assign (
    task_id INT,
    user_id INT,
    FOREIGN KEY(task_id) REFERENCES Task(task_id),
    FOREIGN KEY(user_id) REFERENCES User(user_id)
);

INSERT INTO User (username, email, name, password)
VALUES ('nimi', 'nimi@gmail.com', 'Nimi76D', '123456'),
      ('kien', 'kien@gmail.com', 'Kiene', '123456'),
      ('umaru', 'umaru@gmail.com', 'UmaruSimp', '123456'),
      ('zang', 'zang@gmail.com', 'Zang', '123456'),
      ('punny', 'punny@gmail.com', 'PunnyXD', '123456');

INSERT INTO Calendar (calendar_name, user_id)
VALUES ('Hust Calendar', 1),
      ('Work Calendar', 1);

INSERT INTO Events (calendar_id, event_title, start_datetime, end_datetime, description, color_theme)
VALUES (1, 'AI Intro', '2023-06-19 08:25:00', '2023-06-19 11:45:00', 'Học Nhập môn AI tại D9-501', 0),
      (1, 'ITSS', '2023-06-19 12:30:00', '2023-06-19 15:50:00', 'Học ITSS tại D9-501', 0),
      (1, 'Tư tưởng HCM', '2023-06-19 16:00:00', '2023-06-19 17:30:00', 'Học tư tưởng HCM tại D9-401', 0),
      (1, '日本語2', '2023-06-20 08:30:00', '2023-06-20 10:00:00', 'Học tiếng Nhật tại D9-405', 0),
      (1, 'Software Engineering', '2023-06-21 15:05:00', '2023-06-21 17:30:00', 'Học kỹ thuật phần mềm tại D9-401', 0),
      (1, 'IT日本語2', '2023-06-22 10:15:00', '2023-06-22 14:00:00', 'Học tiếng Nhật chuyên ngành tại B1-303', 0),
      (1, '日本語6', '2023-06-23 08:30:00', '2023-06-23 10:00:00', 'Học tiếng Nhật tại D9-405', 0),
      (1, 'UIUX', '2023-06-23 12:30:00', '2023-06-23 15:50:00', 'Học giao diện và trải nhiệm người dùng tại D9-401', 0),
      (1, 'PLDC', '2023-06-23 16:00:00', '2023-06-23 17:30:00', 'Học Pháp luật đại cương tại D9-401', 0),
      (2, 'Intern', '2023-06-21 08:00:00', '2023-06-21 11:30:00', 'Thực tập', 1),
      (2, 'Intern', '2023-06-20 12:30:00', '2023-06-20 17:30:00', 'Thực tập', 1);

INSERT INTO Team (team_id, team_name, description, public)
VALUES (1, 'SAMI sama', 'Vì 10 điểm giải tích, đại số', true),
      (2, 'Monke', 'BK ko sợ tạch', true),
      (3, 'Eula simp', 'Eula rerun when (づ｡◕‿‿◕｡)づ', false);

INSERT INTO Team_member (team_id, user_id, is_leader)
VALUES (1, 1, true),
      (1, 2, false),
      (2, 2, true),
      (2, 3, false),
      (1, 3, true);

INSERT INTO Task (task_id, task_name, start_date, due_date, description, team_id, parent_task_id)
VALUES (1, 'Implement Feature A', '2023-06-25', '2023-06-30', 'Implement new feature A', 1, NULL),
      (2, 'Unit Testing', '2023-06-27', '2023-06-29', 'Write unit tests for Feature A', 1, 1),
      (3, 'Integration Testing', '2023-06-28', '2023-06-29', 'Perform integration testing for Feature A', 1, 1);

INSERT INTO Task_assign (task_id, user_id)
VALUES (1, 1),
      (1, 2),
      (2, 2),
      (2, 3);
