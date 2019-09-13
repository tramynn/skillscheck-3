-- create listing table
CREATE TABLE listing (
  property_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(2) NOT NULL,
  zip INTEGER NOT NULL
);

-- ADD
-- add house
INSERT INTO listing 
(name, address, city, state, zip, img, mortgage, rent)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)

-- add three colums, img, mortgage, and rent
-- ALTER TABLE listing
-- ADD COLUMN img TEXT NOT NULL,
-- ADD COLUMN mortgage NUMERICN NOT NULL,
-- ADD COLUMN rent NUMERIC NOT NULL

-- GET
-- get houses
SELECT * FROM listing;

-- DELETE
-- delete house
DELETE FROM listing
WHERE property_id = $1;

-- display houses after deleting house
SELECT * FROM listing;