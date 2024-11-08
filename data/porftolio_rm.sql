-- CREATE TABLE hero (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255),
--     position VARCHAR(255),
--     location VARCHAR(255),
--     imageUrl VARCHAR(255)
-- );

-- INSERT INTO hero (name, position, location, imageUrl)
-- VALUES ('ROUENE MEDINA', 'Full Stack Software Developer', 'based in Toronto, Ontario','https://res.cloudinary.com/dzqivwyjr/image/upload/v1730360859/hero_rdv0mt.jpg');

-- CREATE TABLE about (
--     id SERIAL PRIMARY KEY,
--     title VARCHAR(255),
--     subtitle VARCHAR(255)
-- );

-- INSERT INTO about (title, subtitle)
-- VALUES ('We All Have a Story', 'Here''s a little bit about me');

-- CREATE TABLE aboutcontent (
--     id SERIAL PRIMARY KEY,
--     description TEXT NOT NULL,
--     imageurl VARCHAR(255),
--     about_id INT REFERENCES about(id) ON DELETE CASCADE
-- );

-- INSERT INTO aboutcontent (about_id, description, imageurl)
-- VALUES 
-- (1, 'Hi, my name is Rouene Medina and I am a full-stack software developer.', 'https://res.cloudinary.com/dzqivwyjr/image/upload/v1731043318/about_persona1_dgj3kj.png'),
-- (1, 'I''ve always been drawn to creativity and problem-solving, which led me to explore both project management in construction and design and entrepreneurship in the creative sector.', 'https://res.cloudinary.com/dzqivwyjr/image/upload/v1731043318/about_persona2_vqzw79.png'),
-- (1, 'However, my real passion emerged when I discovered software engineering, particularly front-end and full-stack development.', 'https://res.cloudinary.com/dzqivwyjr/image/upload/v1731043096/about_codes_lb5712.png'),
-- (1, 'Transitioning to tech allowed me to combine my love for design with my growing technical knowledge in coding, giving me the chance to create visually appealing, user-friendly digital experiences that are not only functional but impactful.', 'https://res.cloudinary.com/dzqivwyjr/image/upload/v1731043097/about_ui_gj1kpk.png'),
-- (1, 'Additionally, I am excited to continue my journey as a developer. After completing my diploma in an intensive software engineering bootcamp, I gained hands-on experience with various technologies like HTML, CSS, JavaScript, TypeScript, and React.', 'https://res.cloudinary.com/dzqivwyjr/image/upload/v1731043097/about_diploma_gznqwq.png'),
-- (1, 'I learned how to build responsive, dynamic websites. I also worked with MySQL and PostgreSQL databases, and utilized REST APIs and Web APIs to create seamless integrations. Tools like GitHub, Postman, Thunder Client, and Visual Studio Code have been essential in my development process, while Figma and Adobe Creative Suite support my design work.', 'https://res.cloudinary.com/dzqivwyjr/image/upload/v1731043098/about_media_umdhdf.png'),
-- (1, 'Now, I''m focused on using my diverse background to craft seamless digital experiences, blending creativity and technology to bring ideas to life through code, ensuring that every element not only looks good but also functions seamlessly.', 'https://res.cloudinary.com/dzqivwyjr/image/upload/v1731043097/about_persona3_yoawzu.png');


-- SELECT * FROM about AS a
-- JOIN aboutcontent AS ac
-- ON a.about_id = ac.about_id;

-- SELECT * FROM about AS a
-- LEFT OUTER JOIN aboutcontent AS ac
-- ON a.about_id = ac.about_id
-- WHERE a.about_id = 1
-- ORDER BY ac.aboutcontent_description asc;

-- SELECT about.title, a.subtitle FROM about;