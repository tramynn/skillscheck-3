-- add house
INSERT INTO listing 
(name, address, city, state, zip, img, mortgage, rent)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)

-- add three colums, img, mortgage, and rent
-- ALTER TABLE listing
-- ADD COLUMN img TEXT NOT NULL,
-- ADD COLUMN mortgage NUMERICN NOT NULL,
-- ADD COLUMN rent NUMERIC NOT NULL