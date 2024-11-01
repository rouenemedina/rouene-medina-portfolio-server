-- CREATE TABLE hero (
--     hero_id SERIAL PRIMARY KEY,
--     hero_name VARCHAR(255),
--     hero_position VARCHAR(255),
--     hero_location VARCHAR(255),
--     hero_image VARCHAR(255)
-- );

-- INSERT INTO hero (hero_name, hero_position, hero_location)
-- VALUES ('ROUENE MEDINA', 'Full Stack Software Developer', 'based in Toronto, Ontario');

-- CREATE TABLE about (
--     about_id SERIAL PRIMARY KEY,
--     about_title VARCHAR(255),
--     about_subtitle VARCHAR(255)
-- );

-- CREATE TABLE aboutContent (
--     aboutContent_id SERIAL PRIMARY KEY,
--     aboutContent_description TEXT NOT NULL,
--     aboutContent_image VARCHAR(255),
--     about_id INT REFERENCES about(about_id) ON DELETE CASCADE
-- );

-- INSERT INTO about (about_title, about_subtitle)
-- VALUES ('We All Have a Story', 'Here''s a little bit about me');

-- INSERT INTO aboutContent (about_id, aboutContent_description, aboutContent_image)
-- VALUES 
-- (1, 'Hi, my name is Rouene Medina and I am a full-stack software developer.', '/images'),
-- (1, 'I''ve always been drawn to creativity and problem-solving, which led me to explore both project management in construction and design and entrepreneurship in the creative sector.', '/images'),
-- (1, 'However, my real passion emerged when I discovered software engineering, particularly front-end and full-stack development.', '/images'),
-- (1, 'Transitioning to tech allowed me to combine my love for design with my growing technical knowledge in coding, giving me the chance to create visually appealing, user-friendly digital experiences that are not only functional but impactful.', '/images'),
-- (1, 'Additionally, I am excited to continue my journey as a developer. After completing my diploma in an intensive software engineering bootcamp, I gained hands-on experience with various technologies like HTML, CSS, JavaScript, TypeScript, and React.', '/images'),
-- (1, 'I learned how to build responsive, dynamic websites. I also worked with MySQL and PostgreSQL databases, and utilized REST APIs and Web APIs to create seamless integrations. Tools like GitHub, Postman, Thunder Client, and Visual Studio Code have been essential in my development process, while Figma and Adobe Creative Suite support my design work.', '/images'),
-- (1, 'Now, I''m focused on using my diverse background to craft seamless digital experiences, blending creativity and technology to bring ideas to life through code, ensuring that every element not only looks good but also functions seamlessly.', '/images');