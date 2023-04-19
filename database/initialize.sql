BEGIN;

CREATE TABLE asanas (
    id serial primary key,
    benefits text,
    name text,
    notes text,
    instructions text,
    sanskrit text

);

COMMIT;