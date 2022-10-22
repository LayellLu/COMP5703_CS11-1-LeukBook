-- Create Schema
CREATE SCHEMA IF NOT EXISTS leukbook;
-- Init User Related Tables
CREATE TABLE IF NOT EXISTS leukbook.user
(
    id       serial PRIMARY KEY,
    email    text unique not null,
    password text        not null
);

CREATE TABLE IF NOT EXISTS leukbook.user_body
(
    id             serial PRIMARY KEY,
    user_id        bigint REFERENCES leukbook.user (id) NOT NULL,
    upper_arm       decimal,
    upper_thigh     decimal,
    shoulder_width decimal,
    bust           decimal,
    waist          decimal,
    hip            decimal
);
