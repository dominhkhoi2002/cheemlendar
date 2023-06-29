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
    progress INT,
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
      (2, 'Intern', '2023-06-20 12:30:00', '2023-06-20 17:30:00', 'Thực tập', 1),
      (1, 'AI Intro', '2023-06-26 08:25:00', '2023-06-26 11:45:00', 'Học Nhập môn AI tại D9-501', 0),
      (1, 'ITSS', '2023-06-26 12:30:00', '2023-06-26 15:50:00', 'Học ITSS tại D9-501', 0),
      (1, 'Tư tưởng HCM', '2023-06-26 16:00:00', '2023-06-26 17:30:00', 'Học tư tưởng HCM tại D9-401', 0),
      (1, '日本語2', '2023-06-27 08:30:00', '2023-06-27 10:00:00', 'Học tiếng Nhật tại D9-405', 0),
      (1, 'Software Engineering', '2023-06-28 15:05:00', '2023-06-28 17:30:00', 'Học kỹ thuật phần mềm tại D9-401', 0),
      (1, 'IT日本語2', '2023-06-29 10:15:00', '2023-06-29 14:00:00', 'Học tiếng Nhật chuyên ngành tại B1-303', 0),
      (1, '日本語6', '2023-06-30 08:30:00', '2023-06-30 10:00:00', 'Học tiếng Nhật tại D9-405', 0),
      (1, 'UIUX', '2023-06-30 12:30:00', '2023-06-30 15:50:00', 'Học giao diện và trải nhiệm người dùng tại D9-401', 0),
      (1, 'PLDC', '2023-06-30 16:00:00', '2023-06-30 17:30:00', 'Học Pháp luật đại cương tại D9-401', 0),
      (2, 'Intern', '2023-06-28 08:00:00', '2023-06-28 11:30:00', 'Thực tập', 1),
      (2, 'Intern', '2023-06-27 12:30:00', '2023-06-27 17:30:00', 'Thực tập', 1),
      (1, 'AI Intro', '2023-07-03 08:25:00', '2023-07-03 11:45:00', 'Học Nhập môn AI tại D9-501', 0),
      (1, 'ITSS', '2023-07-03 12:30:00', '2023-07-03 15:50:00', 'Học ITSS tại D9-501', 0),
      (1, 'Tư tưởng HCM', '2023-07-03 16:00:00', '2023-07-03 17:30:00', 'Học tư tưởng HCM tại D9-401', 0),
      (1, '日本語2', '2023-07-04 08:30:00', '2023-07-04 10:00:00', 'Học tiếng Nhật tại D9-405', 0),
      (1, 'Software Engineering', '2023-07-05 15:05:00', '2023-07-05 17:30:00', 'Học kỹ thuật phần mềm tại D9-401', 0),
      (1, 'IT日本語2', '2023-07-06 10:15:00', '2023-07-06 14:00:00', 'Học tiếng Nhật chuyên ngành tại B1-303', 0),
      (1, '日本語6', '2023-07-07 08:30:00', '2023-07-07 10:00:00', 'Học tiếng Nhật tại D9-405', 0),
      (1, 'UIUX', '2023-07-07 12:30:00', '2023-07-07 15:50:00', 'Học giao diện và trải nhiệm người dùng tại D9-401', 0),
      (1, 'PLDC', '2023-07-07 16:00:00', '2023-07-07 17:30:00', 'Học Pháp luật đại cương tại D9-401', 0),
      (2, 'Intern', '2023-07-05 08:00:00', '2023-07-05 11:30:00', 'Thực tập', 1),
      (2, 'Intern', '2023-07-04 12:30:00', '2023-07-04 17:30:00', 'Thực tập', 1);

INSERT INTO Team (team_id, team_name, description, public)
VALUES (1, 'SAMI sama', 'Vì 10 điểm giải tích, đại số', true),
      (2, 'Monke', 'BK ko sợ tạch', true),
      (3, 'Eula simp', 'Eula rerun when (づ｡◕‿‿◕｡)づ', false);

INSERT INTO Team_member (team_id, user_id, is_leader)
VALUES (1, 1, true),
      (1, 2, false),
      (1, 3, false),
      (1, 4, false),
      (1, 5, false),
      (2, 1, false),
      (2, 2, true),
      (3, 1, true);

INSERT INTO Task (task_id, task_name, start_date, due_date, description, team_id, parent_task_id, progress)
VALUES (1, 'Học tập tuần 1-3', '2023-06-25', '2023-07-07', 'Chuẩn bị tài liệu cần thiết, học tập môn giải tích 1, đại số tuần 1-3', 1, NULL, 50),
      (2, 'Tìm hiểu về hàm số', '2023-06-25', '2023-06-30', 'Tóm tắt lý thuyết hàm số, dãy số, các tính chất', 1, 1, 100),
      (3, 'Tìm hiểu về logic, tập hợp', '2023-06-25', '2023-06-30', 'Tóm tắt lý thuyết logic, tập hợp, các tính chất', 1, 1, 100),
      (4, 'Thảo luận tuần 1', '2023-07-01', '2023-07-01', 'Tổng hợp lý thuyết, chữa các bài tập khó tuần 1', 1, 1, 100),
      (5, 'Tìm hiểu về giới hạn, hàm số liên tục', '2023-07-01', '2023-07-08', 'Tóm tắt lý thuyết giới hạn hàm số, VCL (vô cùng lớn), VCB (vô cùng bé)', 1, 1, 100),
      (6, 'Tìm hiểu về ánh xạ', '2023-07-01', '2023-07-08', 'Tóm tắt lý thuyết ánh xạ các tính chất', 1, 1, 100),
      (7, 'Thảo luận tuần 2', '2023-07-08', '2023-07-08', 'Tổng hợp lý thuyết, chữa các bài tập khó tuần 2', 1, 1, 25),
      (8, 'Tìm hiểu về đạo hàm và vi phân', '2023-07-08', '2023-07-15', 'Tóm tắt lý thuyết đạo hàm và vi phân', 1, 1, 0),
      (9, 'Tìm hiểu về cấu trúc đại số', '2023-07-08', '2023-07-15', 'Tóm tắt lý thuyết  cấu trúc đại số', 1, 1, 0),
      (10, 'Thảo luận tuần 3', '2023-07-15', '2023-07-15', 'Tổng hợp lý thuyết, chữa các bài tập khó tuần 3', 1, 1, 0),
      (11, 'Nghỉ ngơi time', '2023-07-16', '2023-07-16', 'Đóng tiền học và tiếp tục bị sami cho ăn hành', 1, NULL, 0),
      (12, 'Chờ Eula rerun (づ｡◕‿‿◕｡)づ', '2021-12-15', '2023-7-5', 'Chờ đợi trong vô vọng', 3, NULL, 0);

INSERT INTO Task_assign (task_id, user_id)
VALUES (1, 1),
      (1, 2),
      (2, 2),
      (2, 3),
      (3, 1),
      (4, 2),
      (5, 2),
      (5, 3),
      (6, 2),
      (6, 4),
      (7, 1),
      (7, 5),
      (8, 5),
      (9, 1),
      (9, 4),
      (10, 2),
      (11, 1),
      (11, 2),
      (11, 3),
      (11, 4),
      (11, 5),
      (12, 1);
