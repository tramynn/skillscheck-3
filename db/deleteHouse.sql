-- delete house
DELETE FROM listing
WHERE property_id = $1;

-- display houses after deleting house
SELECT * FROM listing;