
-- modify the following line to match your database name
SELECT 'CREATE DATABASE alex_db'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'alex_db')\gexec